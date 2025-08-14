<script setup lang="ts">
import { ref } from 'vue'
import { useSkillsStore } from '@/stores/Skills'

const skillsStore = useSkillsStore()
const activeTab = ref('frontend')

const changeTab = (tabId: string) => {
    activeTab.value = tabId
}

</script>
<template>
    <section id="skills" class="py-20">
        <h2 class="text-4xl font-bold text-center text-white mb-16" data-aos="fade-up">My Tech Stack</h2>
        <div class="w-max-full overflow-x-scroll scrollbar-hide">
            <div class="flex justify-start space-x-2 md:space-x-4 mb-12" data-aos="fade-up" data-aos-delay="100">
                <button v-for="category in skillsStore.categories" :key="category.id" @click="changeTab(category.id)"
                    :class="[
                        'font-medium py-2 px-6 rounded-lg transition-colors duration-300',
                        activeTab === category.id
                            ? 'bg-sky-500 text-white'
                            : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                    ]">
                    {{ category.name }}
                </button>
            </div>
        </div>
        <div id="skills-content" data-aos="fade-up" data-aos-delay="200">
            <div v-for="category in skillsStore.categories" :key="category.id" v-show="activeTab === category.id">
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
                    <div v-for="skill in category.skills" :key="skill.name"
                        class="bg-slate-800 p-6 rounded-lg flex flex-col items-center justify-center space-y-4 hover:bg-slate-700/50 hover:-translate-y-2 transition-all duration-300">
                        <i :class="[skill.iconClass, skill.colorClass, 'text-5xl']"></i>
                        <p>{{ skill.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>