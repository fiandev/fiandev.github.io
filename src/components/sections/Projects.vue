<script setup lang="ts">
import { onMounted } from 'vue';
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import { useProjectsStore } from '@/stores/Projects';
import { useI18n } from 'vue-i18n'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const { t } = useI18n()

const projectsStore = useProjectsStore();

onMounted(() => {
    new Swiper(".mySwiper", {
        modules: [Autoplay, Pagination],
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    });
});
</script>
<template>
    <section id="projects" class="py-20">
        <h2 class="text-4xl font-bold text-center text-white mb-16" data-aos="fade-up">My Projects</h2>
        <div class="swiper mySwiper" data-aos="fade-up" data-aos-delay="200">
            <div class="swiper-wrapper pb-16">
                <div class="swiper-slide" v-for="project in projectsStore.getAllProjects" :key="project.name">
                    <div class="bg-slate-800 rounded-lg overflow-hidden group h-full flex flex-col">
                        <div class="overflow-hidden">
                            <img :src="project.imageUrl" :alt="project.name"
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        </div>
                        <div class="p-6 flex flex-col flex-grow">
                            <h3 class="text-xl font-bold text-white mb-2">{{ project.name }}</h3>
                            <p class="text-slate-400 mb-4 flex-grow">{{ t(project.description) }}</p>
                            <div class="flex space-x-4 mt-auto">
                                <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank"
                                    class="text-sky-400 hover:text-sky-300 font-medium transition-colors duration-300">Live
                                    Demo <i class="fas fa-external-link-alt text-sm"></i></a>
                                <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank"
                                    class="text-sky-400 hover:text-sky-300 font-medium transition-colors duration-300">GitHub
                                    <i class="fab fa-github text-sm"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </section>
</template>