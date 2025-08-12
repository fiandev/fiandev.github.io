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
                name: 'Fulhive',
                description: 'web application for inventory management that is integrated with online marketplaces.',
                imageUrl: 'https://ryucode.com/assets/img/projects/project_68752ea087233.png',
                liveUrl: 'https://fulhive.com/',
                githubUrl: ''
            },
            {
                name: 'Flexio',
                description: 'A freelancer platform called Flexio with seller-buyer switch feature integrated with Xendit.',
                imageUrl: 'https://ryucode.com/assets/img/projects/project_6874832cd567b.png',
                liveUrl: 'https://flexio.id',
                githubUrl: ''
            },
            {
                name: 'Asfatour Web Travel',
                description: 'A travel website for a tour and travel agency named Asfatour, operating in Lamongan, East Java. This website is designed to increase awareness among potential customers about the newly established travel agency.',
                imageUrl: 'https://ryucode.com/assets/img/projects/project_6874830e34e5e.png',
                liveUrl: 'https://asfatour.com',
                githubUrl: ''
            },
            {
                name: 'GriyaCozy Website',
                description: 'A boarding house business website with a catalog feature, integrated with Midtrans payment gateway and connected to a WhatsApp bot.',
                imageUrl: 'https://ryucode.com/assets/img/projects/project_6874834b89c08.png',
                liveUrl: 'https://griyacozy.web.id',
                githubUrl: ''
            },
            {
                name: 'Mikrotik Multi Vendor Device Monitoring System',
                description: 'This system aims to monitor network devices (such as routers, switches, servers) from various vendors (multi-vendor), with real-time and historical data displays for observability, problem solving and performance analysis.',
                imageUrl: 'https://ryucode.com/assets/img/projects/project_6880d0b063cd4.png',
                liveUrl: '',
                githubUrl: ''
            },
        ] as Project[]
    }),
    getters: {
        getAllProjects: (state) => state.projects
    }
})