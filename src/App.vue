<script setup>
import Header from './layouts/Header.vue'
import Main from './layouts/Main.vue'
import Footer from './layouts/Footer.vue'
import ChatBoxAi from './components/sections/ChatBoxAi.vue'
import Loader from './components/animations/Loader.vue'
</script>

<template>
  <Loader />

  <div class="bg-slate-900 text-slate-300 relative max-w-screen overflow-x-hidden">
    <Header />
    <Main />
    <Footer />
    <ChatBoxAi />
  </div>
</template>