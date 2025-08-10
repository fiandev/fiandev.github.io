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
                period: 'July 2025 - Present',
                institution: 'PT. RyuCode Digital Solutions',
                description: 'As the Chief Technology Officer, I am responsible for overseeing the technical direction of the company, ensuring that our products and services are built with the latest technologies and best practices. I work closely with the product and engineering teams to define technical requirements, implement new features, and improve the overall technical infrastructure of the company.'
            },
            {
                title: 'Software Engineer (Intern)',
                period: 'February 2025 - June 2025',
                institution: 'PT. Rise Landscape Holtikultura',
                description: 'Actively participated in the development of new features for the company\'s main platform, okegarden.com, in close collaboration with the tech team.Responsible for maintaining and optimizing existing features to ensure better performance, scalability, and user engagement.'
            },
            {
                title: "Senior Web Developer",
                period: "December 2024 - May 2025",
                institution: "CV. Asfatour Traveling & Education",
                description: "Led the development of a web-based travel agency platform using Laravel, focusing on scalability, security, and performance. Designed and implemented key features such as booking, package management, online payments, and an admin dashboard.Led the development of a web-based travel agency platform using Laravel, focusing on scalability, security, and performance. Designed and implemented key features such as booking, package management, online payments, and an admin dashboard."
            },
            {
                title: "Fullstack Developer",
                period: "May 2024 - August 2024",
                institution: "CV. Harapan Digital",
                description: "An experienced full-stack web developer who handles custom website creation requests for clients. Skilled in building a variety of websites, including e-commerce platforms, school websites, inventory systems, landing pages, company profiles, and personal portfolios."
            },
            {
                title: "Freelance Programmer",
                period: "January 2022 - April 2024",
                institution: "Freelance",
                description: "As a freelance full-stack web developer, I offer a comprehensive suite of web development services. These include building custom websites from the ground up, providing bug fixing and error resolution for existing sites, offering expert IT consultation, and collaborating with other developers to support and accelerate their development process."
            }
        ] as TimelineItem[],
        education: [
            {
                title: 'SMK Teknik Komputer dan Jaringan',
                period: 'Jun 2022 - May 2024',
                institution: 'SMK Abdurrahman Wahid',
                description: "During my studies at vocational school with a focus on Network Engineering, I built a strong foundation in network infrastructure. My training covered LAN design and implementation, Linux (Debian) server administration, network management using Mikrotik devices, and hands-on fiber optic installation. I am also skilled in network troubleshooting to diagnose and resolve various connectivity issues"
            }
        ] as TimelineItem[]
    }),

    getters: {
        getExperience: (state) => state.experience,
        getEducation: (state) => state.education,
    },
})