<template>
    <div>
        <Navbar current-page="home" />
        <!-- Highlight -->
        <div v-if="!loading" class="flex pt-[60px] pl-16 pr-16 flex-row justify-between items-center">
            <div class="bg-[#ffF1EDEC] w-full p-10 flex flex-col">
                <v-chip class="w-[90px] bg-[#F0F0F0] text-[#007BFF] text-center mb-3">
                    <span class=""> {{ String(dataDummy.category).toUpperCase() }}
                    </span>
                </v-chip>
                <span class="text-[32px] font-serif font-bold">{{ dataDummy.title }}</span>
                <span class="text-[20px] font-serif font-normal text-[#555] w-[70%] block"
                    v-html="dataDummy.short_desc"></span>
                <v-btn :class="`bg-[#007BFF] text-white w-[200px] mt-5 rounded-lg`">
                    <div>
                        Read More
                        <v-icon icon="mdi-arrow-right" start></v-icon>
                    </div>
                </v-btn>
            </div>
            <img :src="require('@/assets/bg-home.jpg')" :class="`w-2/4 rounded-xl h-fit`" />
        </div>
        <div v-if="loading">Loading...</div>
        <!-- End of Highlight -->

        <!-- Main Component -->
        <div :class="`pt-[150px] pl-14 pr-14`">
            <div class="text-[32px] font-bold mb-5">Recent Article</div>
            <div class="grid grid-rows-2 grid-flow-col gap-12">
                <div v-for="dataPosts in dataPost" v-bind:key="dataPosts.id_blog">
                    <img :src="require('@/assets/bg-home.jpg')" :class="`rounded-lg h-96`" />
                    <div class="pl-10 pr-10 pt-5">
                        <div class="flex flex-row items-center">
                            <v-chip class="text-sm">
                                <span>
                                    {{ String(dataPosts.category).toUpperCase() }}</span>
                            </v-chip>
                            <span class="ml-3 text-[12px]">
                                {{ dataPosts.created_at }}
                            </span>

                        </div>
                        <div class="flex flex-col">
                            <span class="text-[28px] font-bold">
                                {{ dataPosts.title }}
                            </span>
                        </div>
                        <div :class="`text-[#007BFF] w-[200px] mt-5 rounded-lg`">
                            Read More
                            <v-icon icon="mdi-arrow-right" start></v-icon>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </div>
</template>


<script>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '@/components/NavbarComponent.vue';

export default {
    components: {
        Navbar,
    },
    setup() {
        const loadingData = ref(true)


        const dataDummy = ref({});
        const dataPost = ref([])

        const router = useRouter();

        const goToHome = () => {
            router.push('/');
        };

        const goToSignIn = () => {
            router.push('/sign-in');
        };

        const goToArticle = () => {
            router.push('/article');
        };

        async function fetchDataBlogHighlight() {
            const data = require("@/assets/dummy.json")
            dataDummy.value = data
            loadingData.value = false
        }

        async function fetchDataPost() {
            const data = require("@/assets/dummy_data.json")
            console.log(data)
            dataPost.value = data
        }

        async function fetchData() {
            await fetchDataBlogHighlight()
            await fetchDataPost()
        }

        onMounted(() => {
            fetchData()
        })


        return {
            dataDummy,
            goToHome,
            goToSignIn,
            goToArticle,
            fetchDataPost,
            dataPost
        };
    },
};

</script>

<style></style>