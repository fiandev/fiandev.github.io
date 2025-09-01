<script setup>
import Header from './layouts/Header.vue'
import Main from './layouts/Main.vue'
import Footer from './layouts/Footer.vue'
import ChatBoxAi from './components/sections/ChatBoxAi.vue'
import Loader from './components/animations/Loader.vue'
</script>

<template>

  <div class="text-slate-300 relative max-w-screen overflow-x-hidden">
    <div class="gradient-container"></div>
    <div class="cursor"></div>
    <Loader />
    <Header />
    <Main />
    <Footer />
    <ChatBoxAi />
  </div>
</template>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
  });

  document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
      cursor.classList.remove("expand");
    }, 500);
  });

  // Gradient background animation
  const gradientContainer = document.querySelector('.gradient-container');

  function createGradientBlob() {
    const blob = document.createElement('div');
    blob.classList.add('gradient-blob');
    gradientContainer.appendChild(blob);

    const size = Math.random() * 200 + 100; // Random size between 100px and 300px
    const color = `hsl(${Math.random() * 360}, 70%, 50%)`; // Random HSL color

    blob.style.width = `${size}px`;
    blob.style.height = `${size}px`;
    blob.style.backgroundColor = color;
    blob.style.filter = `blur(${Math.random() * 50 + 20}px)`; // Random blur between 20px and 70px
    blob.style.left = `${Math.random() * 100}%`;
    blob.style.top = `${Math.random() * 100}%`;
    blob.style.transform = `translate(-50%, -50%)`;
    blob.style.position = 'absolute';
    blob.style.borderRadius = '50%';
    blob.style.opacity = '0.3';
    blob.style.transition = 'all 10s ease-in-out';

    animateBlob(blob);
  }

  function animateBlob(blob) {
    setInterval(() => {
      const newLeft = Math.random() * 100;
      const newTop = Math.random() * 100;
      const newColor = `hsl(${Math.random() * 360}, 70%, 50%)`;

      blob.style.left = `${newLeft}%`;
      blob.style.top = `${newTop}%`;
      blob.style.backgroundColor = newColor;
    }, 1000); // Change position and color every 10 seconds
  }

  // Create a few blobs initially
  for (let i = 0; i < 5; i++) {
    createGradientBlob();
  }
});
</script>