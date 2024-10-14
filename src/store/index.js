
// import { createStore } from "vuex";
// import { getFirestore, doc, getDoc } from "firebase/firestore";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import firebaseApp from "@/firebase/firebaseInit";

// // Initialize Firestore and Auth from the Firebase app
// const db = getFirestore(firebaseApp);
// const auth = getAuth(firebaseApp);

// const store = createStore({
//     state: {
//         sampleBlogCards: [
//             { blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogDate: "May 1, 2024" },
//             { blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogDate: "May 1, 2024" },
//             { blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogDate: "May 1, 2024" },
//             { blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogDate: "May 1, 2024" },
//         ],
//         editPost: null,
//         user: null,
//         profileEmail: null,
//         profileFirstName: null,
//         profileLastName: null,
//         profileUserName: null,
//         profileId: null,
//         profileInitials: null,
//     },
//     mutations: {
//         toggleEditPost(state, payload) {
//             state.editPost = payload;
//             console.log(state.editPost);
//         },
//         updateUser(state, payload) {
//             state.user = payload;
//         },
//         // setUser(state, payload) {
//         //     state.user = payload;
//         // },
//         setProfileInfo(state, profile) {
//             console.log("Profile Data: ", profile);
//             state.profileEmail = profile.email;
//             state.profileFirstName = profile.firstName;
//             state.profileLastName = profile.lastName;
//             state.profileUserName = profile.username;
//             state.profileId = profile.id;
//             state.profileInitials = profile.initials;
//         },
//         setProfileInitials(state) {
//             state.profileFirstName.match(/(\b\S)?/g).join("") +
//                 state.profileLastName.match(/(\b\S)?/g).join("");
//         },
//     },
//     actions: {
//         // This action listens for changes in the authentication state
//         async getCurrentUser({ commit }) {
//             const database = await db.collection("users").doc(auth.currentUser.uid);
//             console.log(database);
//             const databaseResults = await database.get();
//             console.log(databaseResults);
//             commit("setProfile", databaseResults);
//             commit("setProfileInititals");
//             console.log(databaseResults);
//         }
//     },
//     modules: {
//         // Additional modules can go here
//     }
// });

// export default store;

import { createStore } from "vuex";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebaseApp from "@/firebase/firebaseInit";

// Initialize Firestore and Auth from the Firebase app
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const store = createStore({
    state: {
        sampleBlogCards: [
            { blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogDate: "May 1, 2024" },
            { blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogDate: "May 1, 2024" },
            { blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogDate: "May 1, 2024" },
            { blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogDate: "May 1, 2024" },
        ],
        editPost: null,
        user: null,
        profileEmail: null,
        profileFirstName: null,
        profileLastName: null,
        profileUserName: null,
        profileId: null,
        profileInitials: null,
    },
    mutations: {
        toggleEditPost(state, payload) {
            state.editPost = payload;
            console.log(state.editPost);
        },
        updateUser(state, payload) {
            state.user = payload;
        },
        setProfileInfo(state, profile) {
            console.log("Profile Data: ", profile);
            state.profileEmail = profile.email;
            state.profileFirstName = profile.firstName;
            state.profileLastName = profile.lastName;
            state.profileUserName = profile.username;
            state.profileId = profile.id;
            state.profileInitials = profile.initials;
        },
        setProfileInitials(state) {
            const initials =
                state.profileFirstName.match(/(\b\S)?/g).join("") +
                state.profileLastName.match(/(\b\S)?/g).join("");
            state.profileInitials = initials;
        },
    },
    actions: {
        async getCurrentUser({ commit }) {
            try {
                // Get the current user from Firebase Auth
                const user = auth.currentUser;

                if (user) {
                    // Access the Firestore document for the user
                    const userDocRef = doc(db, "users", user.uid);
                    const userDocSnapshot = await getDoc(userDocRef);

                    if (userDocSnapshot.exists()) {
                        const userData = userDocSnapshot.data();
                        console.log("User data: ", userData);
                        commit("setProfileInfo", userData);
                        commit("setProfileInitials");
                    } else {
                        // console.log("No such document!");
                    }
                } else {
                    console.log("No user is signed in.");
                }
            } catch (error) {
                console.error("Error fetching user document: ", error);
            }
        },
    },
    modules: {
        // Additional modules can go here
    }
});

export default store;
