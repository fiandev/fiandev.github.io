<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Reactive references for form fields and state management
const contactName = ref('')
const contactEmail = ref('')
const contactMessage = ref('')
const errors = ref({})

const isSubmitting = ref(false)
const errorMessage = ref('')
const formSubmitted = ref(false)

// The URL from your Google Apps Script deployment
const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzudItdVnZKimXLyzV8iuNwJim90SJmZnlctmTxonlsDK-nIn4_KxO3VLCNZDyYZFa9/exec'

function validateForm() {
  const newErrors = {}
  // Name validation
  if (!contactName.value.trim()) {
    newErrors.name = t('contact.validation.nameRequired')
  }

  // Email validation
  if (!contactEmail.value.trim()) {
    newErrors.email = t('contact.validation.emailRequired')
  } else if (!/^\S+@\S+\.\S+$/.test(contactEmail.value)) {
    newErrors.email = t('contact.validation.emailInvalid')
  }

  // Message validation
  if (!contactMessage.value.trim()) {
    newErrors.message = t('contact.validation.messageRequired')
  } else if (contactMessage.value.trim().length < 10) {
    newErrors.message = t('contact.validation.messageTooShort')
  }

  errors.value = newErrors
  return Object.keys(newErrors).length === 0
}

// Watchers to clear errors as user types
watch(contactName, () => {
  if (errors.value.name) delete errors.value.name
})
watch(contactEmail, () => {
  if (errors.value.email) delete errors.value.email
})
watch(contactMessage, () => {
  if (errors.value.message) delete errors.value.message
})

async function handleSubmit() {
  // Clear previous success/error messages
  formSubmitted.value = false
  errorMessage.value = ''

  if (!validateForm()) return

  isSubmitting.value = true

  // Create a FormData object to send the data
  const formData = new FormData()
  formData.append('name', contactName.value)
  formData.append('email', contactEmail.value)
  formData.append('message', contactMessage.value)

  try {
    // Use fetch to send a POST request to the Apps Script URL
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      body: formData,
    })

    const result = await response.json()

    if (result.result === 'success') {
      // If successful, show the success message
      formSubmitted.value = true
      contactName.value = ''
      contactEmail.value = ''
      contactMessage.value = ''
      errors.value = {}
    } else {
      // If the script returns an error, display it
      throw new Error(result.error || 'An unknown error occurred.')
    }
  } catch (error) {
    // Handle network errors or errors from the script
    console.error('Error submitting form:', error)
    errorMessage.value = t('contact.error')
  } finally {
    isSubmitting.value = false
  }
}
</script>
<template>
  <section id="contact" class="py-20">
    <h2 class="text-4xl font-bold text-center text-white mb-4" data-aos="fade-up">{{ t('contact.title') }}</h2>
    <p
      class="text-center text-slate-400 mb-12 max-w-2xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {{ t('contact.description') }}
    </p>
    <form
      @submit.prevent="handleSubmit"
      class="max-w-xl mx-auto flex flex-col"
      data-aos="fade-up"
      data-aos-delay="200"
      novalidate
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label for="name" class="block text-slate-400 mb-2">{{ t('contact.name') }}</label>
          <input
            type="text"
            :placeholder="t('contact.namePlaceholder')"
            v-model="contactName"
            id="name"
            name="name"
            :class="{ 'border-red-500 focus:ring-red-500': errors.name }"
            class="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300"
          />
          <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name }}</p>
        </div>
        <div>
          <label for="email" class="block text-slate-400 mb-2">{{ t('contact.email') }}</label>
          <input
            type="email"
            :placeholder="t('contact.emailPlaceholder')"
            v-model="contactEmail"
            id="email"
            name="email"
            :class="{ 'border-red-500 focus:ring-red-500': errors.email }"
            class="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300"
          />
          <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
        </div>
      </div>
      <div class="mb-6">
        <label for="message" class="block text-slate-400 mb-2">{{ t('contact.message') }}</label>
        <textarea
          :placeholder="t('contact.messagePlaceholder')"
          id="message"
          v-model="contactMessage"
          name="message"
          rows="5"
          class="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-shadow duration-300"
          required
        ></textarea>
        <p v-if="errors.message" class="text-red-500 text-xs mt-1">{{ errors.message }}</p>
      </div>
      <div class="self-start">
        <button
          @click="handleSubmit"
          type="submit"
          :disabled="isSubmitting"
          class="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105"
        >
          {{ isSubmitting ? t('contact.sending') : t('contact.send') }}
        </button>
        <p v-if="errorMessage" class="text-red-500 mt-2 text-sm">{{ errorMessage }}</p>
        <p v-if="formSubmitted" class="text-green-500 mt-2 text-sm">{{ t('contact.success') }}</p>
      </div>
    </form>
  </section>
</template>
