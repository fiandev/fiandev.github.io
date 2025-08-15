<script setup>
import About from '@/components/sections/About.vue';
import Skills from '@/components/sections/Skills.vue';
import Resume from '@/components/sections/Resume.vue';
import Projects from '@/components/sections/Projects.vue';
import Contact from '@/components/sections/Contact.vue';
import { watch } from 'vue';

watch(() => {
    window.addEventListener("keydown", (e) => {
        // listen a, s, e, p, c
        if (e.key === "a") {
            window.location.href = "#about"
        }
        if (e.key === "s") {
            window.location.href = "#skills"
        }
        if (e.key === "e") {
            window.location.href = "#experience"
        }
        if (e.key === "p") {
            window.location.href = "#projects"
        }
        if (e.key === "c") {
            window.location.href = "#contact"
        }
    });

    return () => {
        window.removeEventListener("keydown", (e) => {
            // listen a, s, e, p, c
            if (e.key === "a") {
                window.location.href = "#about"
            }
            if (e.key === "s") {
                window.location.href = "#skills"
            }
            if (e.key === "e") {
                window.location.href = "#experience"
            }
            if (e.key === "p") {
                window.location.href = "#projects"
            }
            if (e.key === "c") {
                window.location.href = "#contact"
            }
        });
    }
})
</script>

<template>
    <main class="container-xl mx-auto px-6 pt-24">
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Contact />

    </main>
</template>