<template>
  <div ref="cursorContainer" class="cursor-container">
    <div ref="cursorDot" class="cursor-dot"></div>
    <div ref="cursorRing" class="cursor-ring"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const cursorContainer = ref(null);
const cursorDot = ref(null);
const cursorRing = ref(null);

const onMouseMove = (e) => {
  if (cursorDot.value && cursorRing.value) {
    cursorDot.value.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    cursorRing.value.style.transform = `translate(${e.clientX - cursorRing.value.offsetWidth / 2}px, ${e.clientY - cursorRing.value.offsetHeight / 2}px)`;
  }
};

const onClick = (e) => {
  if (cursorContainer.value) {
    const ripple = document.createElement('div');
    ripple.classList.add('click-ripple');
    cursorContainer.value.appendChild(ripple);

    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;

    setTimeout(() => {
      ripple.remove();
    }, 500);
  }
};

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('click', onClick);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('click', onClick);
});
</script>
