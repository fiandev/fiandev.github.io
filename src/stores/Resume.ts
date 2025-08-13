import { defineStore } from 'pinia'

interface TimelineItem {
    title: string;
    period: string;
    institution: string;
    description: string;
}

export const useResumeStore = defineStore('resume', {
    state: () => ({
        experience: [
            {
                title: 'Chief Technology Officer',
                period: 'Juli 2025 - Sekarang',
                institution: 'PT. RyuCode Digital Solutions',
                description: 'Sebagai Chief Technology Officer, saya bertanggung jawab atas arah teknis perusahaan, memastikan bahwa produk dan layanan kami dikembangkan menggunakan teknologi terbaru dan praktik terbaik. Saya bekerja sama erat dengan tim produk dan teknik untuk mendefinisikan persyaratan teknis, mengimplementasikan fitur baru, dan meningkatkan infrastruktur teknis perusahaan secara keseluruhan.'
            },
            {
                title: 'Software Engineer (Intern)',
                period: 'Februari 2025 - Juni 2025',
                institution: 'PT. Rise Landscape Holtikultura',
                description: 'Aktif berpartisipasi dalam pengembangan fitur-fitur baru untuk platform utama perusahaan, okegarden.com, bekerja sama erat dengan tim teknis. Bertanggung jawab atas pemeliharaan dan optimasi fitur-fitur yang sudah ada untuk memastikan kinerja yang lebih baik, skalabilitas, dan keterlibatan pengguna.'
            },
            {
                title: "Senior Web Developer",
                period: "Desember 2024 - Mei 2025",
                institution: "CV. Asfatour Traveling & Education",
                description: "Memimpin pengembangan platform agen perjalanan berbasis web menggunakan Laravel, dengan fokus pada skalabilitas, keamanan, dan kinerja. Mendesain dan mengimplementasikan fitur-fitur utama seperti pemesanan, pengelolaan paket, pembayaran online, dan dashboard admin.Memimpin pengembangan platform agen perjalanan berbasis web menggunakan Laravel, dengan fokus pada skalabilitas, keamanan, dan kinerja. Mendesain dan mengimplementasikan fitur-fitur utama seperti pemesanan, pengelolaan paket, pembayaran online, dan dashboard admin."
            },
            {
                title: "Fullstack Developer",
                period: "Mei 2024 - Agustus 2024",
                institution: "CV. Harapan Digital",
                description: "An experienced full-stack web developer who handles custom website creation requests for clients. Skilled in building a variety of websites, including e-commerce platforms, school websites, inventory systems, landing pages, company profiles, and personal portfolios."
            },
            {
                title: "Freelance Programmer",
                period: "Januari 2022 - April 2024",
                institution: "Freelance",
                description: "As a freelance full-stack web developer, I offer a comprehensive suite of web development services. These include building custom websites from the ground up, providing bug fixing and error resolution for existing sites, offering expert IT consultation, and collaborating with other developers to support and accelerate their development process."
            }
        ] as TimelineItem[],
        education: [
            {
                title: 'SMK Teknik Komputer dan Jaringan',
                period: 'Juni 2022 - Mei 2024',
                institution: 'SMK Abdurrahman Wahid',
                description: "Selama studi saya di sekolah kejuruan dengan fokus pada Teknik Jaringan, saya membangun dasar yang kuat dalam infrastruktur jaringan. Pelatihan saya mencakup desain dan implementasi jaringan lokal (LAN), administrasi server Linux (Debian), pengelolaan jaringan menggunakan perangkat Mikrotik, serta instalasi serat optik secara praktis. Saya juga terampil dalam pemecahan masalah jaringan untuk mendiagnosis dan menyelesaikan berbagai masalah konektivitas."
            }
        ] as TimelineItem[]
    }),

    getters: {
        getExperience: (state) => state.experience,
        getEducation: (state) => state.education,
    },
})