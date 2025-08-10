<script setup lang="ts">
import { useResumeStore } from '@/stores/Resume'

const resumeStore = useResumeStore()
</script>
<template>
    <section id="experience" class="py-20">
        <h2 class="text-4xl font-bold text-center text-white mb-16" data-aos="fade-up">Experience &amp; Education</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div data-aos="fade-up" data-aos-duration="800">
                <h3 class="text-2xl font-bold text-sky-400 mb-8 flex items-center gap-3"><i
                        class="fas fa-briefcase"></i> Experience</h3>
                <div
                    class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-600 before:to-transparent">
                    <div v-for="(item, index) in resumeStore.getExperience" :key="index"
                        class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div
                            class="flex items-center justify-center w-10 h-10 rounded-full border-2 border-sky-500 bg-slate-800 group-hover:bg-sky-500 transition-colors duration-300 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <i class="fas fa-check"></i>
                        </div>
                        <div
                            class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-sky-500/20 transition-shadow duration-300">
                            <div class="flex items-center justify-between space-x-2 mb-1">
                                <h4 class="font-bold text-white">{{ item.title }}</h4><time
                                    class="font-caveat font-medium text-sky-400">{{ item.period }}</time>
                            </div>
                            <p class="text-sm text-slate-400 mb-2">{{ item.institution }}</p>
                            <p class="text-slate-400 text-sm">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                <h3 class="text-2xl font-bold text-sky-400 mb-8 flex items-center gap-3"><i
                        class="fas fa-graduation-cap"></i> Education</h3>
                <div
                    class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-600 before:to-transparent">
                    <div v-for="(item, index) in resumeStore.getEducation" :key="index"
                        class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div
                            class="flex items-center justify-center w-10 h-10 rounded-full border-2 border-sky-500 bg-slate-800 group-hover:bg-sky-500 transition-colors duration-300 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <i class="fas fa-check"></i>
                        </div>
                        <div
                            class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-sky-500/20 transition-shadow duration-300">
                            <div class="flex items-center justify-between space-x-2 mb-1">
                                <h4 class="font-bold text-white">{{ item.title }}</h4><time
                                    class="font-caveat font-medium text-sky-400">{{ item.period }}</time>
                            </div>
                            <p class="text-sm text-slate-400 mb-2">{{ item.institution }}</p>
                            <p class="text-slate-400 text-sm">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>