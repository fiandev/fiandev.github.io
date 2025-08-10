import { defineStore } from 'pinia'

interface Project {
    name: string;
    description: string;
    imageUrl: string;
    liveUrl: string;
    githubUrl: string;
}

export const useProjectsStore = defineStore('projects', {
    state: () => ({
        projects: [
            {
                name: 'Project Alpha',
                description: 'A modern e-commerce platform built with Vue.js, Pinia, and Tailwind CSS, featuring a seamless shopping experience.',
                imageUrl: 'https://placehold.co/600x400/1e293b/0ea5e9?text=Project+Alpha',
                liveUrl: '#',
                githubUrl: '#'
            },
            {
                name: 'Project Beta',
                description: 'A decentralized finance (DeFi) dashboard using React and Web3.js to track and manage crypto assets.',
                imageUrl: 'https://placehold.co/600x400/1e293b/0ea5e9?text=Project+Beta',
                liveUrl: '#',
                githubUrl: '#'
            },
            {
                name: 'Project Gamma',
                description: 'A real-time chat application powered by Node.js, Express, and Socket.IO for instant communication.',
                imageUrl: 'https://placehold.co/600x400/1e293b/0ea5e9?text=Project+Gamma',
                liveUrl: '#',
                githubUrl: '#'
            },
            {
                name: 'Project Delta',
                description: 'A content management system (CMS) built with Laravel and MySQL, designed for easy content creation and management.',
                imageUrl: 'https://placehold.co/600x400/1e293b/0ea5e9?text=Project+Delta',
                liveUrl: '#',
                githubUrl: '#'
            },
        ] as Project[]
    }),
    getters: {
        getAllProjects: (state) => state.projects
    }
})