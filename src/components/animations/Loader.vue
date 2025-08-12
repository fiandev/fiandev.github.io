<template>
    <div id="loader-wrapper"
        class="bg-black flex items-center justify-center min-h-screen overflow-hidden h-screen w-screen fixed z-[9999] transition-opacity duration-1000">
        <div id="central-block"
            class="absolute w-20 h-24 bg-sky-400/10 backdrop-blur-2xl animate-pulse-glow z-90 transition-opacity duration-500"
            style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);">
            <div class="w-full h-full flex items-center justify-center">

                <svg xmlns="http://www.w3.org/2000/svg" class="animate-pulse h-10 w-10 text-sky-300" fill="none"
                    viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M18.763 10.236c.279-1.895-1.155-2.905-3.131-3.591l.64-2.553l-1.56-.389l-.623 2.49l-1.245-.297l.631-2.508L11.915 3l-.641 2.562l-.992-.234v-.01l-2.157-.54l-.415 1.668s1.155.272 1.137.28c.631.163.74.578.722.903l-.723 2.923l.163.054l-.171-.036l-1.02 4.087c-.072.19-.27.478-.712.36c.018.028-1.128-.27-1.128-.27l-.776 1.778l2.03.505l1.11.289l-.65 2.59l1.56.387l.633-2.562l1.253.324l-.64 2.554l1.56.388l.641-2.59c2.662.505 4.665.307 5.505-2.102c.676-1.94-.037-3.05-1.435-3.79c1.02-.225 1.786-.902 1.985-2.282zm-3.564 4.999c-.479 1.94-3.745.884-4.8.63l.857-3.436c1.055.27 4.448.784 3.943 2.796zm.478-5.026c-.433 1.76-3.158.866-4.033.65l.775-3.113c.885.217 3.718.632 3.258 2.463" />
                </svg>
            </div>
        </div>
        <div id="loader-container" class="relative z-10 w-80 h-80 flex items-center justify-center">

        </div>

    </div>
</template>

<style>
/* Animasi denyut dan pendar untuk blok tengah */
@keyframes pulse-glow {

    0%,
    100% {
        box-shadow: 0 0 20px 5px rgba(56, 189, 248, 0.3);
        transform: scale(1);
    }

    50% {
        box-shadow: 0 0 35px 15px rgba(56, 189, 248, 0.5);
        transform: scale(1.05);
    }
}

.animate-pulse-glow {
    animation: pulse-glow 3s infinite ease-in-out;
}

/* --- PERBAIKAN UTAMA ADA DI SINI --- */

/* Styling dasar untuk partikel */
.particle {
    --angle: 0deg;
}

/* Styling untuk "jejak" partikel menggunakan ::after */
.particle::after {
    content: '';
    position: absolute;
    /* Posisi diatur agar berpusat pada partikel */
    top: 50%;
    left: 25%;
    z-index: -1;
    transform-origin: left;
    transform: translateY(-50%) rotate(var(--angle));
    /* Menggunakan angle dari JavaScript */

    /* Tampilan jejak */
    width: 25px;
    /* Panjang jejak */
    height: 1.5px;
    background: linear-gradient(to right, #38bdf8, transparent);

    /* Animasi pudar (fade) */
    opacity: 0;
    transition: opacity 0.5s ease-out;
}

/* Class ini akan ditambahkan oleh JS untuk MEMUNCULKAN jejak */
.particle.show-trail::after {
    opacity: 0.7;
    /* Munculkan jejaknya */
    transition: opacity 0.05s ease-in;
    /* Transisi saat muncul dibuat sangat cepat */
}
</style>

<script>
async function wait(n) {
    await new Promise((resolve) => setTimeout(resolve, n));
}

document.addEventListener('DOMContentLoaded', async function () {
    const container = document.getElementById('loader-container');
    if (!container) return;

    // Definisikan variabel di scope yang lebih luas
    let particles = [];
    let animationFrameId = null;
    const particleCount = 64;
    let initialRadius = 180;

    // Inisialisasi partikel
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle absolute w-2 h-2 bg-white rounded-full shadow-lg shadow-sky-400/50';

        particle.dataset.angle = Math.random() * 360;
        particle.dataset.speed = (Math.random() * 0.4 + 0.2) * (Math.random() > 0.5 ? 1 : -1);
        particle.dataset.radius = initialRadius + (Math.random() - 0.5) * 50;
        // particle.dataset.radius = Math.random() * initialRadius;
        particles.push(particle);
    }

    for await (let particle of particles) {
        container.appendChild(particle);
        await wait(Math.random() * 100);
    }

    // Fungsi animasi orbit utama
    function animateParticles() {
        particles.forEach((p) => {
            let angle = parseFloat(p.dataset.angle);
            const speed = parseFloat(p.dataset.speed);
            const r = parseFloat(p.dataset.radius);

            angle += speed;
            p.dataset.angle = angle;

            const x = r * Math.cos(angle * Math.PI / 180);
            const y = r * Math.sin(angle * Math.PI / 180);

            p.style.transform = `translate(${x}px, ${y}px)`;
            p.style.setProperty('--angle', `${angle + 180}deg`);
            p.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            p.style.transition = ".3s";
            p.classList.add('show-trail');

        });

        // Simpan ID frame animasi untuk bisa dihentikan nanti
        animationFrameId = requestAnimationFrame(animateParticles);
        setTimeout(window.hideLoader, 3000);
    }

    window.hideLoader = function () {
        // 1. Hentikan loop animasi orbit
        cancelAnimationFrame(animationFrameId);

        const centralBlock = document.getElementById('central-block');
        const loaderWrapper = document.getElementById('loader-wrapper');

        // 2. Buat semua partikel memencar dan menghilang
        particles.forEach(p => {
            const currentAngle = parseFloat(p.dataset.angle);
            const scatterRadius = window.innerWidth / 2; // Jarak pencar ke ujung layar

            // Hitung posisi akhir di luar layar
            const x = scatterRadius * Math.cos(currentAngle * Math.PI / 180);
            const y = scatterRadius * Math.sin(currentAngle * Math.PI / 180);

            // Terapkan transformasi untuk memencar & mengecil
            p.style.transform = `translate(${x}px, ${y}px) scale(0)`;
        });

        // 3. Hilangkan blok tengah dan latar belakang secara perlahan
        if (centralBlock) centralBlock.style.opacity = '0';
        if (loaderWrapper) loaderWrapper.style.opacity = '0';

        setTimeout(() => {
            if (loaderWrapper) loaderWrapper.remove();
        }, 1200);
    }

    // --- Mulai animasi ---
    animateParticles();

    // --- DEMO: Panggil fungsi hideLoader setelah 5 detik ---
});
</script>