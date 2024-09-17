<template>
    <div>
        <div class="flex pt-8 pl-16 pr-16 fle-row justify-between items-center">
            <h2 class="font-extrabold text-[45px]">MasaGitu</h2>
            <div>
                <span :class="`mr-5 font-medium ${$props.currentPage == 'home' ? 'text-blue-500' : 'text-black'} hover:text-blue-500 hover:cursor-pointer`" @click="goToHome">Home</span>
                <span :class="`mr-5 font-medium ${$props.currentPage == 'article' ? 'text-blue-500' : 'text-black'} hover:text-blue-500 hover:cursor-pointer`" @click="goToArticle">Article</span>
                <span class="font-medium hover:text-blue-500 hover:cursor-pointer" @click="goToSignIn">Sign In</span>
            </div> 
        </div>
    </div>
</template>


<script>
import router from '@/routes/route';

export default {
    data() {
        return {}
    },
    props: {
        currentPage: {
            type: String,
            required: true,
            default: ''
        }
    },
    methods: {
        goToHome() {
            router.push("/")
        },
        goToSignIn() {
            router.push("/sign-in")
        },
        goToArticle() {
            router.push("/article")
        }
    }
}


</script>

<style></style>