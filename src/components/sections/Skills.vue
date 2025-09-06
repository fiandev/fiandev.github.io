<script setup lang="ts">
import { ref, watch } from 'vue'
import { useSkillsStore } from '@/stores/Skills'

const skillsStore = useSkillsStore()
const activeTab = ref('frontend')

const changeTab = (tabId: string) => {
  activeTab.value = tabId
}

// rerender when tab change
watch(activeTab, () => {
  //
})
</script>
<template>
  <section id="skills" class="py-20">
    <h2 class="text-4xl font-bold text-center text-white mb-16" data-aos="fade-up">
      My Tech Stack
    </h2>
    <div class="w-max-full overflow-x-scroll scrollbar-hide">
      <div
        class="flex justify-start space-x-2 md:space-x-4 mb-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <button
          v-for="category in skillsStore.categories"
          :key="category.id"
          @click="changeTab(category.id)"
          :class="[
            'font-medium py-2 px-6 rounded-lg transition-colors duration-300',
            activeTab === category.id
              ? 'bg-sky-500 text-white'
              : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200',
          ]"
        >
          {{ category.name }}
        </button>
      </div>
    </div>
    <div id="skills-content" data-aos="fade-up" data-aos-delay="200">
      <div
        v-for="category in skillsStore.categories"
        :key="category.id"
        v-show="activeTab === category.id"
      >
        <TransitionGroup
          name="staggered-fade"
          tag="div"
          class="grid grid-cols-2 sm:grid-cols-3 overflow-hidden md:grid-cols-4 lg:grid-cols-6 gap-8 text-center"
        >
          <div
            v-for="(skill, index) in category.skills"
            :key="skill.name"
            :class="[
              `bg-slate-800 p-6 rounded-lg transition-all duration-500 cursor-pointer flex flex-col items-center justify-center space-y-4`,
              activeTab === category.id ? 'skill-item' : '',
              'hover:bg-slate-700/50 hover:-translate-y-2',
            ]"
            :style="{
              animation: `fadeUp ${(index + 1) * 500}ms ease-in-out`,
            }"
          >
            <i :class="[skill.iconClass, skill.colorClass, 'text-5xl']"></i>
            <p>{{ skill.name }}</p>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>
