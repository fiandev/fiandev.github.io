<script setup>
import About from '@/components/sections/About.vue'
import Skills from '@/components/sections/Skills.vue'
import Resume from '@/components/sections/Resume.vue'
import Projects from '@/components/sections/Projects.vue'
import Contact from '@/components/sections/Contact.vue'
import { watch } from 'vue'

watch(() => {
  window.addEventListener('keydown', (e) => {
    // listen a, s, e, p, c
    if (e.ctrlKey && e.altKey && e.key === 'a') {
      window.location.href = '#about'
    }
    if (e.ctrlKey && e.altKey && e.key === 's') {
      window.location.href = '#skills'
    }
    if (e.ctrlKey && e.altKey && e.key === 'e') {
      window.location.href = '#experience'
    }
    if (e.ctrlKey && e.altKey && e.key === 'p') {
      window.location.href = '#projects'
    }
    if (e.ctrlKey && e.altKey && e.key === 'c') {
      window.location.href = '#contact'
    }
  })

  return () => {
    window.removeEventListener('keydown', (e) => {
      // listen a, s, e, p, c
      if (e.ctrlKey && e.altKey && e.key === 'a') {
        window.location.href = '#about'
      }
      if (e.ctrlKey && e.altKey && e.key === 's') {
        window.location.href = '#skills'
      }
      if (e.ctrlKey && e.altKey && e.key === 'e') {
        window.location.href = '#experience'
      }
      if (e.ctrlKey && e.altKey && e.key === 'p') {
        window.location.href = '#projects'
      }
      if (e.ctrlKey && e.altKey && e.key === 'c') {
        window.location.href = '#contact'
      }
    })
  }
})
</script>

<template>
  <main class="container-xl mx-auto">
    <About class="section-bg-odd" />
    <Skills class="section-bg-even" />
    <Resume class="section-bg-odd" />
    <Projects class="section-bg-even" />
    <Contact class="section-bg-odd" />
  </main>
</template>
