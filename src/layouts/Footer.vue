<script setup lang="ts">
import { useUserStore } from '@/stores/About'

const { username } = useUserStore()
</script>
<template>
    <footer class="bg-slate-800/50">
        <div class="container mx-auto px-6 py-8 text-center text-slate-400">
            <div class="flex justify-center space-x-6 mb-4">
                <a href="#" class="hover:text-sky-400 transition-colors duration-300 text-2xl"><i
                        class="fab fa-github"></i></a>
                <a href="#" class="hover:text-sky-400 transition-colors duration-300 text-2xl"><i
                        class="fab fa-linkedin"></i></a>
                <a href="#" class="hover:text-sky-400 transition-colors duration-300 text-2xl"><i
                        class="fab fa-instagram"></i></a>
            </div>
            <p>&copy; {{ new Date().getFullYear() }} {{ username }}. All Rights Reserved.</p>
        </div>
    </footer>
</template>