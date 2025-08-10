import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        name: "Aditia Akbar Putra A",
        username: 'Fiandev',
        age: new Date().getFullYear() - 2005,
        email: 'fiandev@gmail.com',
        phone: '085183778737',
        prophecy: "Fullstack Web Developer",
        overview: "Fullstack Developer yang berdedikasi untuk menciptakan pengalaman web yang mulus dan efisien. Saya sangat antusias dengan inovasi di dunia Web3 dan bersemangat untuk mengintegrasikan teknologi terdesentralisasi ke dalam proyek-proyek pengembangan web."
    }),

    getters: {
        getAbout: (state) => {
            return state
        },
    },
})