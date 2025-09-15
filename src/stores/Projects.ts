import { defineStore } from 'pinia'

interface Project {
  name: string
  description: string
  imageUrl: string
  liveUrl: string
  githubUrl: string
  category: string
}

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [
      {
        name: 'Tkluxury',
        description: 'projects.tkluxury',
        imageUrl: 'https://i.ibb.co.com/svgM8Sz8/72df6a35050715a239ec0f5185a84dca34a057a8.png',
        liveUrl: 'http://tkluxuryhouses.com/',
        githubUrl: '',
        category: 'Web Development',
      },
      {
        name: 'Fulhive',
        description: 'projects.fulhive',
        imageUrl: 'https://ryucode.com/assets/img/projects/project_68752ea087233.png',
        liveUrl: 'https://fulhive.com/',
        githubUrl: '',
        category: 'Web Development',
      },
      {
        name: 'Flexio',
        description: 'projects.flexio',
        imageUrl: 'https://ryucode.com/assets/img/projects/project_6874832cd567b.png',
        liveUrl: 'https://flexio.id',
        githubUrl: '',
        category: 'Web Development',
      },
      {
        name: 'Asfatour Web Travel',
        description: 'projects.asfatour',
        imageUrl: 'https://ryucode.com/assets/img/projects/project_6874830e34e5e.png',
        liveUrl: 'https://asfatour.com',
        githubUrl: '',
        category: 'Web Development',
      },
      {
        name: 'GriyaCozy Website',
        description: 'projects.griyacozy',
        imageUrl: 'https://ryucode.com/assets/img/projects/project_6874834b89c08.png',
        liveUrl: 'https://griyacozy.web.id',
        githubUrl: '',
        category: 'Web Development',
      },
      {
        name: 'Mikrotik Multi Vendor Device Monitoring System',
        description: 'projects.mikrotik',
        imageUrl: 'https://ryucode.com/assets/img/projects/project_6880d0b063cd4.png',
        liveUrl: '',
        githubUrl: '',
        category: 'Backend',
      },
    ] as Project[],
  }),
  getters: {
    getAllProjects: (state) => state.projects,
    getProjectsByCategory: (state) => {
      return state.projects.reduce((acc, project) => {
        if (!acc[project.category]) {
          acc[project.category] = []
        }
        acc[project.category].push(project)
        return acc
      }, {} as Record<string, typeof state.projects>)
    },
  },
})
