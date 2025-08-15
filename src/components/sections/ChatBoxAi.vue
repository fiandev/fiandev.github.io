<script setup lang="ts">
import { useChatStore } from '@/stores/Chat'
import { nextTick, ref, watch } from 'vue';

const chatStore = useChatStore()
const chatMessagesContainer = ref<HTMLElement | null>(null);

// Auto-scroll to the bottom when new messages are added
watch(() => chatStore.messages,
    async () => {
        // Wait for the DOM to update
        await nextTick();
        if (chatMessagesContainer.value) {
            chatMessagesContainer.value.scrollTop = chatMessagesContainer.value.scrollHeight;
        }
    },
    { deep: true }
);

const handleSendMessage = () => {
    chatStore.sendMessage();
}

const isOnline = ref(navigator.onLine);

watch(() => navigator.onLine, (newOnline) => {
    isOnline.value = newOnline;
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        chatStore.closeChat();
    }
    // space
    if (e.key === " ") {
        chatStore.openChat();
    }
})
</script>

<template>
    <div id="chat-widget-container" class="fixed bottom-6 right-6 z-50">
        <!-- Chat Open Button -->
        <Transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0 scale-75"
            leave-active-class="transition-all duration-200 ease-in" leave-to-class="opacity-0 scale-75">
            <button v-if="!chatStore.isChatOpen" @click="chatStore.openChat" id="chat-open-btn"
                class="bg-sky-500 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <i class="fas fa-robot text-2xl"></i>
            </button>
        </Transition>

        <!-- Chat Window -->
        <Transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0 scale-95"
            leave-active-class="transition-all duration-200 ease-in" leave-to-class="opacity-0 scale-95">
            <div v-if="chatStore.isChatOpen" id="chat-window"
                class="w-80 sm:w-96 h-[32rem] bg-slate-800/80 backdrop-blur-md rounded-xl shadow-2xl flex flex-col transform">

                <!-- Header -->
                <div class="flex items-center justify-between p-4 bg-slate-900 rounded-t-xl flex-shrink-0">
                    <div class="flex items-center space-x-3">
                        <div class="relative">
                            <img src="/yui.png" alt="AI Avatar" class="w-10 h-10 rounded-full"><span
                                class="absolute bottom-0 right-0 w-3 h-3 animate-pulse bg-green-500 border-2 border-slate-900 rounded-full"></span>
                        </div>
                        <div>
                            <p class="font-bold text-white">Yui Hirasawa</p>
                            <p class="text-xs text-slate-400">{{ isOnline ? 'Online' : 'Offline' }}</p>
                        </div>
                    </div>
                    <button @click="chatStore.closeChat" id="chat-close-btn" class="text-slate-400 hover:text-white">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>

                <!-- Messages -->
                <div ref="chatMessagesContainer" id="chat-messages" class="flex-1 p-4 space-y-4 overflow-y-auto">
                    <div v-for="message in chatStore.messages" :key="message.id" class="flex"
                        :class="{ 'justify-end': message.sender === 'user' }">
                        <div class="p-3 rounded-lg max-w-xs" :class="{
                            'bg-slate-700 text-white': message.sender === 'ai',
                            'bg-sky-600 text-white': message.sender === 'user'
                        }">
                            <p class="text-sm">{{ message.text }}</p>
                        </div>
                    </div>
                </div>

                <!-- Input -->
                <div class="p-4 bg-slate-900 rounded-b-xl flex-shrink-0">
                    <form @submit.prevent="handleSendMessage" class="flex items-center space-x-2">
                        <input :disabled="chatStore.isLoading" type="text" placeholder="Ketik pesan Anda..."
                            v-model="chatStore.newMessage"
                            class="w-3/4 bg-slate-700 border border-slate-600 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm text-white">
                        <button :disabled="chatStore.isLoading" type="submit"
                            class="bg-sky-500 text-white w-1/4 h-10 rounded-full flex-shrink-0 flex items-center justify-center hover:bg-sky-600 transition-colors">
                            <i :class="chatStore.isLoading ? 'fas fa-spinner animate-spin' : 'fas fa-paper-plane'"></i>
                        </button>
                    </form>
                </div>
            </div>
        </Transition>
    </div>
</template>