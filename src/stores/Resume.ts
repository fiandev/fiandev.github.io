import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

interface TimelineItem {
  title: string
  period: string
  institution: string
  description: string
}

interface LocaleMessage {
  resume: {
    experiences: TimelineItem[]
    educations: TimelineItem[]
  }
}

export const useResumeStore = defineStore('resume', () => {
  const { locale, messages } = useI18n()

  const experience = computed<TimelineItem[]>(() => {
    const currentMessages = messages.value[locale.value] as unknown as LocaleMessage
    return currentMessages.resume.experiences
  })

  const education = computed<TimelineItem[]>(() => {
    const currentMessages = messages.value[locale.value] as unknown as LocaleMessage
    return currentMessages.resume.educations
  })

  const getExperience = computed(() => experience.value)
  const getEducation = computed(() => education.value)

  return {
    experience,
    education,
    getExperience,
    getEducation,
  }
})
