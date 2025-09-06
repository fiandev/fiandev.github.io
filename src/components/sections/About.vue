<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/stores/About'
import { onMounted, ref, watch } from 'vue'
import Typed from 'typed.js'

const { t, locale, messages } = useI18n()
const { name, cvUrl } = useUserStore()

const typedRef = ref(null)
let typed: Typed | null = null

const getRoles = () => {
  return (messages.value[locale.value] as any).about.roles
}

const options = {
  strings: getRoles(),
  typeSpeed: 30,
  backSpeed: 10,
  loop: true,
}

onMounted(() => {
  if (typedRef.value) {
    typed = new Typed(typedRef.value, options)
  }
})

watch(locale, () => {
  if (typed) {
    typed.destroy()
  }
  const newOptions = {
    ...options,
    strings: getRoles(),
  }
  if (typedRef.value) {
    typed = new Typed(typedRef.value, newOptions)
  }
})
</script>
<template>
  <section id="about" class="min-h-screen flex items-center py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div class="flex justify-center">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          class="bg-sky-400 w-96 h-96 rounded-md overflow-hidden group/avatar transition-transform duration-1000"
        >
          <img
            src="/gw.png"
            alt="Foto fiandev"
            class="w-full h-full object-cover group-hover/avatar:scale-150 transition-transform duration-300"
          />
        </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" class="lg:w-3/4">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-4">
          Hi, I'm <span class="text-sky-400">{{ name }}</span>
        </h1>
        <h2 class="text-2xl font-medium text-slate-400 mb-6">
          <span ref="typedRef"></span>
        </h2>
        <p class="mb-6 leading-relaxed">{{ t('about.overview') }}</p>
        <div class="flex space-x-4">
          <a
            :href="cvUrl"
            target="_blank"
            class="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105"
          >
            {{ t('about.seeMyCv') }}
          </a>
          <a
            href="#projects"
            class="border-2 border-slate-600 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >{{ t('about.seeMyWork') }}</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
