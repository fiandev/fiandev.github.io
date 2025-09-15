<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useProjectsStore } from '@/stores/Projects'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const projectsStore = useProjectsStore()
const activeTab = ref('All')
const currentPage = ref(1)
const projectsPerPage = 3

const categories = computed(() => {
  const cats = new Set(projectsStore.getAllProjects.map((p) => p.category))
  return ['All', ...Array.from(cats)]
})

const filteredProjects = computed(() => {
  if (activeTab.value === 'All') {
    return projectsStore.getAllProjects
  }
  return projectsStore.getAllProjects.filter((p) => p.category === activeTab.value)
})

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * projectsPerPage
  const end = start + projectsPerPage
  return filteredProjects.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(filteredProjects.value.length / projectsPerPage)
})

const changeTab = (tab: string) => {
  activeTab.value = tab
  currentPage.value = 1
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

watch(activeTab, () => {
  currentPage.value = 1
})

</script>
<template>
  <section id="projects" class="py-20">
    <h2 class="text-4xl font-bold text-center text-white mb-16" data-aos="fade-up">My Projects</h2>

    <div class="w-max-full overflow-x-scroll scrollbar-hide">
      <div
        class="flex justify-start space-x-2 md:space-x-4 mb-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <button
          v-for="category in categories"
          :key="category"
          @click="changeTab(category)"
          :class="[
            'font-medium py-2 px-6 rounded-lg transition-colors duration-300',
            activeTab === category
              ? 'bg-sky-500 text-white'
              : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200',
          ]"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
      <div
        v-for="project in paginatedProjects"
        :key="project.name"
        class="bg-slate-800 rounded-lg overflow-hidden group h-full flex flex-col"
      >
        <div class="overflow-hidden">
          <img
            :src="project.imageUrl"
            :alt="project.name"
            class="w-full h-52 h-max-52 object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div class="p-6 flex flex-col flex-grow h-48 h-max-48">
          <h3 class="text-xl font-bold text-white mb-2">{{ project.name }}</h3>
          <p class="text-slate-400 mb-4 flex-grow line-clamp-4">{{ t(project.description) }}</p>
          <div class="flex space-x-4 mt-auto">
            <a
              v-if="project.liveUrl"
              :href="project.liveUrl"
              target="_blank"
              class="text-sky-400 hover:text-sky-300 font-medium transition-colors duration-300"
              >Live Demo <i class="fas fa-external-link-alt text-sm"></i
            ></a>
            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              class="text-sky-400 hover:text-sky-300 font-medium transition-colors duration-300"
              >GitHub <i class="fab fa-github text-sm"></i
            ></a>
          </div>
        </div>
      </div>
    </div>

    <div v-if="totalPages > 1" class="flex justify-center items-center space-x-4 mt-8">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="bg-slate-800 text-white py-2 px-4 rounded-lg disabled:opacity-50"
      >
        Previous
      </button>
      <span class="text-white">{{ currentPage }} / {{ totalPages }}</span>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="bg-slate-800 text-white py-2 px-4 rounded-lg disabled:opacity-50"
      >
        Next
      </button>
    </div>
  </section>
</template>
