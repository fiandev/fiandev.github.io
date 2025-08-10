<script setup lang="ts">
import { useUserStore } from '@/stores/About'

const { name } = useUserStore()
</script>
<template>
    <header class="bg-slate-900/70 backdrop-blur-lg fixed top-0 left-0 right-0 z-50">
        <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" class="text-2xl font-bold text-white">{{ name }}</a>
            <div class="hidden md:flex space-x-6 items-center">
                <a href="#about" class="hover:text-sky-400 transition-colors duration-300">About</a>
                <a href="#skills" class="hover:text-sky-400 transition-colors duration-300">Skills</a>
                <a href="#experience" class="hover:text-sky-400 transition-colors duration-300">Experience</a>
                <a href="#projects" class="hover:text-sky-400 transition-colors duration-300">Projects</a>
                <a href="#contact"
                    class="bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Contact
                    Me</a>
            </div>
            <button class="md:hidden focus:outline-none"><i class="fas fa-bars text-2xl"></i></button>
        </nav>
    </header>
</template>