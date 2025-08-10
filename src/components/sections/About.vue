<script setup lang="ts">
import { defineStore } from 'pinia'
import { useUserStore } from '@/stores/About'

const { name, overview, prophecy } = useUserStore()

</script>
<template>
    <section id="about" class="min-h-screen flex items-center py-16">
        <div class="grid grid-cols-1 gap-10 items-center">
            <!-- <div data-aos="fade-right" data-aos-duration="1000">
                <img src="https://placehold.co/600x600/1e293b/ffffff?text=Foto+Anda" alt="Foto [Nama Anda]"
                    class="rounded-full shadow-lg shadow-sky-500/20 w-3/4 mx-auto md:w-full">
            </div> -->
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" class="w-3/4">
                <h1 class="text-5xl md:text-6xl font-bold text-white mb-4">Hi, I'm <span class="text-sky-400">{{
                    name }}</span></h1>
                <h2 class="text-2xl font-medium text-slate-400 mb-6">{{ prophecy }}</h2>
                <p class="mb-6 leading-relaxed">{{ overview }}</p>
                <div class="flex space-x-4">
                    <a href="#contact"
                        class="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105">Hire
                        Me</a>
                    <a href="#projects"
                        class="border-2 border-slate-600 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">See
                        My Work</a>
                </div>
            </div>
        </div>
    </section>

</template>