import { defineStore } from 'pinia'

interface Skill {
  name: string
  iconClass: string
  colorClass: string
}

interface SkillCategory {
  id: string
  name: string
  skills: Skill[]
}

export const useSkillsStore = defineStore('skills', {
  state: () => ({
    categories: [
      {
        id: 'frontend',
        name: 'Frontend',
        skills: [
          {
            name: 'HTML5',
            iconClass: 'devicon-html5-plain-wordmark',
            colorClass: 'text-orange-500',
          },
          { name: 'CSS3', iconClass: 'devicon-css3-plain-wordmark', colorClass: 'text-blue-500' },
          {
            name: 'JavaScript',
            iconClass: 'devicon-javascript-plain',
            colorClass: 'text-yellow-400',
          },
          {
            name: 'Bootstrap CSS',
            iconClass: 'devicon-bootstrap-plain',
            colorClass: 'text-indigo-500',
          },
          {
            name: 'Tailwind CSS',
            iconClass: 'devicon-tailwindcss-plain',
            colorClass: 'text-teal-400',
          },
          {
            name: 'React',
            iconClass: 'devicon-react-original-wordmark',
            colorClass: 'text-sky-400',
          },
          {
            name: 'Vue.js',
            iconClass: 'devicon-vuejs-plain-wordmark',
            colorClass: 'text-green-500',
          },
          {
            name: 'Next.js',
            iconClass: 'devicon-nextjs-original-wordmark',
            colorClass: 'text-white',
          },
          {
            name: 'Nuxt.js',
            iconClass: 'devicon-nuxtjs-plain-wordmark',
            colorClass: 'text-green-400',
          },
        ],
      },
      {
        id: 'backend',
        name: 'Backend',
        skills: [
          { name: 'Express', iconClass: 'devicon-express-original-wordmark', colorClass: '' },
          {
            name: 'Laravel',
            iconClass: 'devicon-laravel-plain-wordmark',
            colorClass: 'text-red-500',
          },
          { name: 'Flask', iconClass: 'devicon-flask-plain-wordmark', colorClass: 'text-blue-400' },
          {
            name: 'Nest.js',
            iconClass: 'devicon-nestjs-plain-wordmark',
            colorClass: 'text-red-400',
          },
          {
            name: 'CodeIgniter',
            iconClass: 'devicon-codeigniter-plain-wordmark',
            colorClass: 'text-red-500',
          },
        ],
      },
      {
        id: 'language',
        name: 'Language',
        skills: [
          {
            name: 'JavaScript',
            iconClass: 'devicon-javascript-plain',
            colorClass: 'text-yellow-400',
          },
          { name: 'PHP', iconClass: 'devicon-php-plain', colorClass: 'text-indigo-400' },
          {
            name: 'Node.js',
            iconClass: 'devicon-nodejs-plain-wordmark',
            colorClass: 'text-green-500',
          },
          { name: 'Python', iconClass: 'devicon-python-plain', colorClass: 'text-blue-500' },
          { name: 'Go', iconClass: 'devicon-go-plain', colorClass: 'text-sky-400' },
          { name: 'Bash Script', iconClass: 'devicon-bash-plain', colorClass: 'text-slate-200' },
          { name: 'Solidity', iconClass: 'devicon-solidity-plain', colorClass: 'text-gray-300' },
        ],
      },
      {
        id: 'DBMS',
        name: 'DBMS',
        skills: [
          {
            name: 'MySQL',
            iconClass: 'devicon-mysql-plain-wordmark',
            colorClass: 'text-yellow-400',
          },
          {
            name: 'MongoDB',
            iconClass: 'devicon-mongodb-plain-wordmark',
            colorClass: 'text-green-400',
          },
          {
            name: 'PostgreSQL',
            iconClass: 'devicon-postgresql-plain-wordmark',
            colorClass: 'text-blue-400',
          },
          {
            name: 'SQLite',
            iconClass: 'devicon-sqlite-plain-wordmark',
            colorClass: 'text-yellow-400',
          },
          {
            name: 'Firebase',
            iconClass: 'devicon-firebase-plain-wordmark',
            colorClass: 'text-red-400',
          },
          {
            name: 'Redis',
            iconClass: 'devicon-redis-plain-wordmark',
            colorClass: 'text-red-400',
          },
        ],
      },
      {
        id: 'tools',
        name: 'Tools',
        skills: [
          { name: 'Git', iconClass: 'devicon-git-plain-wordmark', colorClass: 'text-red-500' },
          { name: 'GitHub', iconClass: 'devicon-github-original-wordmark', colorClass: '' },
          { name: 'Figma', iconClass: 'devicon-figma-plain', colorClass: 'text-purple-500' },
          {
            name: 'VS Code',
            iconClass: 'devicon-vscode-plain-wordmark',
            colorClass: 'text-sky-500',
          },
          {
            name: 'Docker',
            iconClass: 'devicon-docker-plain-wordmark',
            colorClass: 'text-blue-600',
          },
          {
            name: 'Hardhat',
            iconClass: 'devicon-hardhat-plain',
            colorClass: 'text-yellow-400',
          },
          {
            name: 'Copilot',
            iconClass: 'fab fa-github',
            colorClass: 'text-white',
          },
          {
            name: 'Gemini AI',
            iconClass: 'fas fa-robot',
            colorClass: 'text-blue-400',
          },
        ],
      },
    ] as SkillCategory[],
  }),
  getters: {
    getCategoryById: (state) => (id: string) => {
      return state.categories.find((category) => category.id === id)
    },
  },
})
