<template>
    <header>
        <nav class="container">
            <div class="branding">
                <router-link class="header" :to="{ name: 'Home' }">FireBlogs</router-link>
            </div>
            <div class="nav-links">
                <ul v-show="!mobile">
                    <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
                    <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
                    <router-link class="link" to="#">Create Post</router-link>
                    <router-link class="link" :to="{ name: 'Login' }">Login/Register</router-link>
                </ul>
                <div class="profile" ref="profile">
                    <span>{{ this.$store.state.profileInitials }}</span>
                    <div class="profile-menu">
                        <div class="info">
                            <p class="initials">{{ this.$store.state.profileInitials }}</p>
                            <div class="right">
                                <p>{{ this.$store.state.profileFirstName }} {{ this.$store.state.profileLastName }}</p>
                                <p>{{ this.$store.state.profileUserName }}</p>
                                <p>{{ this.$store.state.profileEmail }}</p>
                            </div>
                        </div>
                        <div class="options">
                            <div class="option">
                                <router-link class="option" to="#">
                                    <userIcon class="icon" />
                                    <p>Profile</p>
                                </router-link>
                            </div>
                            <div class="option">
                                <router-link class="option" to="#">
                                    <adminIcon class="icon" />
                                    <p>Admin</p>
                                </router-link>
                            </div>
                            <div class="option">
                                <router-link class="option" to="#">
                                    <signOutIcon class="icon" />
                                    <p>Sign Out</p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile" />
        <transition name="mobile-nav">
            <ul class="mobile-nav" v-show="mobileNav">
                <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
                <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
                <router-link class="link" to="#">Create Post</router-link>
                <router-link class="link" :to="{ name: 'Login' }">Login/Register</router-link>
            </ul>
        </transition>
    </header>
</template>
<script>
import menuIcon from '../assets/Icons/bars-regular.svg';
import userIcon from '../assets/Icons/user-alt-light.svg';
import adminIcon from '../assets/Icons/user-crown-light.svg';
import signOutIcon from '../assets/Icons/sign-out-alt-regular.svg';

export default {
    name: "Navigation",
    components: {
        menuIcon,
        userIcon,
        adminIcon,
        signOutIcon,
    },
    data() {
        return {
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        };
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
    mounted() { },
    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 768) {
                this.mobile = true;
            } else {
                this.mobile = false;
                this.mobileNav = false;
                return;
            }
        },
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        }
    },
    watch: {},
};


</script>
<style lang="scss" scoped>
header {
    background-color: #f8f8f8;
    // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 0 25px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px —1px rgba(0, 0, 0, 0.06);
    z-index: 99;

    .link {
        font-weight: 5øø;
        padding: 0 8px;
        transition: 0.3s color ease;

        &:hover {
            color: #1eb8b8;
        }
    }

    nav {
        display: flex;
        padding: 25px 0;

        .branding {
            display: flex;
            align-items: center;

            .header {
                font-size: 24px;
                font-weight: 600;
                color: #090909;
                text-decoration: none;
            }
        }


        .nav-links {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex: 1;

            ul {
                margin-right: 32px;

                .link {
                    margin-right: 32px;
                }

                .link:last-child {
                    margin-right: 0;
                }
            }
        }
    }

    .menu-icon {
        cursor: pointer;
        position: absolute;

        top: 32px;
        right: 25px;
        height: 25px;
        width: auto;
    }

    .mobile-nav {
        padding: 20px;
        width: 70%;
        max-width: 250px;
        display: flex;
        flex-direction: column;
        position: fixed;
        height: 100%;
        background-color: #303030;
        top: 0;
        left: 0;

        .link {
            padding: 15px 0;
            color: #f8f8f8;
        }
    }


    // .mobile-nav-enter-active,
    // .mobile-nav-leave-active {
    //     transition: transform 1s ease;
    // }

    // .mobile-nav-enter {
    //     transform: translateX(-250px);
    // }

    // .mobile-nav-enter-to {
    //     transform: translateX(0);
    // }

    // .mobile-nav-leave-to {
    //     transform: translateX(-250px);
    // }
    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
        transition: transform 1s ease;
        /* Apply the same transition for both entering and leaving */
    }

    .mobile-nav-enter,
    .mobile-nav-leave-to {
        /* Both for entering and leaving */
        transform: translateX(-250px);
        /* Start off-screen */
    }

    .mobile-nav-enter-to {
        transform: translateX(0);
        /* End at normal position */
    }

}
</style>