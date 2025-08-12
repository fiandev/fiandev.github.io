import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        name: "Aditia Akbar Putra A",
        username: 'Fiandev',
        age: new Date().getFullYear() - 2005,
        email: 'fiandev@gmail.com',
        phone: '085183778737',
        prophecy: "Fullstack Web Developer",
        socials: [
            {
                name: 'Github',
                url: 'https://github.com/fiandev'
            },
            {
                name: 'Linkedin',
                url: 'https://linkedin.com/in/fiandev'
            },
            {
                name: 'X',
                url: 'https://x.com/fiandev'
            },
            {
                name: 'Instagram',
                url: 'https://instagram.com/i.m.fian'
            },
            {
                name: 'Tiktok',
                url: 'https://tiktok.com/@fiandev'
            }
        ],
        overview: "Fullstack Developer yang berdedikasi untuk menciptakan pengalaman web yang mulus dan efisien. Saya sangat antusias dengan inovasi di dunia Web3 dan bersemangat untuk mengintegrasikan teknologi terdesentralisasi ke dalam proyek-proyek pengembangan web."
    }),

    getters: {
        getAbout: (state) => {
            return state
        },
    },
})