<template>
    <div class="home">
        <BlogPost :post="welcomeScreen" />
        <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
        <div class="blog-card-wrap">
            <div class="container">
                <h3>View More Recent Blogs</h3>
                <div class="blog-cards">
                    <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
                </div>
            </div>
        </div>
        <div class="updates">
            <div class="container">
                <h2>Never Miss a Post. Register for your free account today!</h2>
                <router-link class="router-button" to="#">Register for FireBlogs!
                    <Arrow class="arrow" />
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>


import BlogPost from '@/components/BlogPost.vue';
import BlogCard from '@/components/BlogCard.vue';
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
    name: 'Home',
    components: {
        BlogPost,
        BlogCard,
        Arrow
    },
    data() {
        return {
            welcomeScreen: {
                title: "Welcome !",
                blogPost:
                    "Lorem ipsum dolor sit amet, consectetur \
                    adipiscing elit. Sed do eiusmod tempor incididunt\
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                welcomeScreen: true,
                photo: "coding"
            },
            sampleBlogPost: [
                {
                    title: "Filler title",
                    blogHTML:
                        "Filler Blog Post Title",
                    blogCoverPhoto: "beautiful-stories",
                },
                {
                    title: "Filler title 2",
                    blogHTML:
                        "Filler Blog Post Title 2",
                    blogCoverPhoto: "designed-for-everyone",
                },
            ],

        }
    },
    computed: {
        sampleBlogCards() {
            return this.$store.state.sampleBlogCards
        }
    }
}
</script>
<style lang="scss" scoped>
.blog-card-wrap {
    h3 {
        font-weight: 300;
        font-size: 28px;
        margin-bottom: 20px;
    }
}

.updates {
    .container {
        padding: 100px 25px;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (min-width: 800px) {
            padding: 125px 25px;
            flex-direction: row;
        }

        .router-button {
            display: flex;
            font-size: 14px;
            text-decoration: none;

            @media (min-width: 800px) {
                margin-left: auto;
            }
        }

        h2 {
            font-weight: 300;
            font-size: 32px;
            max-width: 425px;
            width: 100%;
            text-align: center;
            text-transform: uppercase;

            @media (min-width: 800px) {
                text-align: initial;
                font-size: 40px;
            }
        }
    }
}
</style>