import { defineStore } from 'pinia'

export const useUserStore = defineStore('about', {
    state: () => ({
        name: "Aditia Akbar Putra A",
        username: 'Fiandev',
        age: new Date().getFullYear() - 2005,
        email: 'fiandev@gmail.com',
        phone: '085183778737',
        prophecy: "about.prophecy",
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
                url: 'https://x.com/im_fiandev'
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
        overview: "about.overview"
    }),

    getters: {
        getAbout: (state) => {
            return state
        },
    },
})