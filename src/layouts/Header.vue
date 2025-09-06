<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useUserStore } from '@/stores/About'
import { useI18n } from 'vue-i18n'

const { name } = useUserStore()
const isMenuOpen = ref(false)
const { t, locale } = useI18n()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleLocales = () => {
  locale.value = locale.value === 'en' ? 'id' : 'en'
}

const locationHash = ref(window.location.hash)

// observer all sections elements
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      locationHash.value = `#${entry.target.id}`
    }
  })
})

onMounted(() => {
  const sections = document.querySelectorAll('section')
  sections.forEach((section) => {
    observer.observe(section)
  })
})

onUnmounted(() => {
  observer.disconnect()
})
</script>
<template>
  <header class="bg-slate-900/70 backdrop-blur-lg fixed top-0 left-0 right-0 z-50">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="#" class="text-2xl font-bold text-white">{{ name }}</a>
      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-8 items-center">
        <a
          href="#about"
          class="hover:text-sky-400 transition-colors duration-300"
          :class="{ 'text-sky-400': locationHash === '#about' }"
          >{{ t('navigation.about') }}</a
        >
        <a
          href="#skills"
          class="hover:text-sky-400 transition-colors duration-300"
          :class="{ 'text-sky-400': locationHash === '#skills' }"
          >Skills</a
        >
        <a
          href="#experience"
          class="hover:text-sky-400 transition-colors duration-300"
          :class="{ 'text-sky-400': locationHash === '#experience' }"
          >{{ t('resume.experience') }}</a
        >
        <a
          href="#projects"
          class="hover:text-sky-400 transition-colors duration-300"
          :class="{ 'text-sky-400': locationHash === '#projects' }"
          >{{ t('navigation.projects') }}</a
        >
        <a
          href="#contact"
          class="bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
          :class="{ 'bg-sky-600 text-white': locationHash === '#contact' }"
          >{{ t('navigation.contact') }}</a
        >
        <button
          @click="toggleLocales"
          class="text-white bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
        >
          {{ locale === 'en' ? 'ID' : 'EN' }}
        </button>
      </div>
      <!-- Hamburger Button -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none text-white">
        <i class="fas text-2xl" :class="isMenuOpen ? 'fa-times' : 'fa-bars'"></i>
      </button>
    </nav>
    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div v-show="isMenuOpen" class="md:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          <a
            href="#about"
            @click="toggleMenu"
            class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-800 w-full text-center"
            >{{ t('navigation.about') }}</a
          >
          <a
            href="#skills"
            @click="toggleMenu"
            class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-800 w-full text-center"
            >Skills</a
          >
          <a
            href="#experience"
            @click="toggleMenu"
            class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-800 w-full text-center"
            >{{ t('resume.experience') }}</a
          >
          <a
            href="#projects"
            @click="toggleMenu"
            class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-800 w-full text-center"
            >{{ t('navigation.projects') }}</a
          >
          <a
            href="#contact"
            @click="toggleMenu"
            class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-800 w-full text-center"
            >{{ t('navigation.contact') }}</a
          >
          <button
            @click="toggleLocales"
            class="text-white bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
          >
            {{ locale === 'en' ? 'ID' : 'EN' }}
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>
