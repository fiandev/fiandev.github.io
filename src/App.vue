<script setup>
import Header from './layouts/Header.vue'
import Main from './layouts/Main.vue'
import Footer from './layouts/Footer.vue'
import ChatBoxAi from './components/sections/ChatBoxAi.vue'

import AOS from "aos";

AOS.init({
  once: true,
  duration: 800,
});
</script>

<template>
  <div class="bg-slate-900 text-slate-300">
    <Header />
    <Main />
    <Footer />
    <ChatBoxAi />
  </div>
</template>