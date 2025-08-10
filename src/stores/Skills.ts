import { defineStore } from 'pinia'

interface Skill {
    name: string;
    iconClass: string;
    colorClass: string;
}

interface SkillCategory {
    id: string;
    name: string;
    skills: Skill[];
}

export const useSkillsStore = defineStore('skills', {
    state: () => ({
        categories: [
            {
                id: 'frontend',
                name: 'Frontend',
                skills: [
                    { name: 'HTML5', iconClass: 'devicon-html5-plain-wordmark', colorClass: 'text-orange-500' },
                    { name: 'CSS3', iconClass: 'devicon-css3-plain-wordmark', colorClass: 'text-blue-500' },
                    { name: 'JavaScript', iconClass: 'devicon-javascript-plain', colorClass: 'text-yellow-400' },
                    { name: 'Tailwind CSS', iconClass: 'devicon-tailwindcss-plain', colorClass: 'text-teal-400' },
                    { name: 'React', iconClass: 'devicon-react-original-wordmark', colorClass: 'text-sky-400' },
                    { name: 'Vue.js', iconClass: 'devicon-vuejs-plain-wordmark', colorClass: 'text-green-500' },
                ]
            },
            {
                id: 'backend',
                name: 'Backend',
                skills: [
                    { name: 'Node.js', iconClass: 'devicon-nodejs-plain-wordmark', colorClass: 'text-green-500' },
                    { name: 'Express', iconClass: 'devicon-express-original-wordmark', colorClass: '' },
                    { name: 'PHP', iconClass: 'devicon-php-plain', colorClass: 'text-indigo-400' },
                    { name: 'Laravel', iconClass: 'devicon-laravel-plain-wordmark', colorClass: 'text-red-500' },
                    { name: 'MySQL', iconClass: 'devicon-mysql-plain-wordmark', colorClass: 'text-blue-400' },
                    { name: 'MongoDB', iconClass: 'devicon-mongodb-plain-wordmark', colorClass: 'text-green-400' },
                ]
            },
            {
                id: 'tools',
                name: 'Tools',
                skills: [
                    { name: 'Git', iconClass: 'devicon-git-plain-wordmark', colorClass: 'text-red-500' },
                    { name: 'GitHub', iconClass: 'devicon-github-original-wordmark', colorClass: '' },
                    { name: 'Figma', iconClass: 'devicon-figma-plain', colorClass: 'text-purple-500' },
                    { name: 'VS Code', iconClass: 'devicon-vscode-plain-wordmark', colorClass: 'text-sky-500' },
                    { name: 'Docker', iconClass: 'devicon-docker-plain-wordmark', colorClass: 'text-blue-600' },
                ]
            }
        ] as SkillCategory[]
    }),
    getters: {
        getCategoryById: (state) => (id: string) => {
            return state.categories.find(category => category.id === id);
        }
    }
})