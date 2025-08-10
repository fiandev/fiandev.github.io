import { defineStore } from 'pinia'
import { nextTick } from 'vue';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'ai';
}

export const useChatStore = defineStore('chat', {
    state: () => ({
        isChatOpen: false,
        messages: [
            { id: 1, text: 'Halo! Selamat datang di portofolio saya. Ada yang bisa saya bantu?', sender: 'ai' },
        ] as Message[],
        newMessage: '',
    }),
    actions: {
        openChat() {
            this.isChatOpen = true;
        },
        closeChat() {
            this.isChatOpen = false;
        },
        async sendMessage() {
            if (this.newMessage.trim() === '') return;

            this.messages.push({
                id: Date.now(),
                text: this.newMessage,
                sender: 'user'
            });

            const userMessage = this.newMessage;
            this.newMessage = '';

            // Simulate AI response
            setTimeout(() => {
                this.messages.push({
                    id: Date.now() + 1,
                    text: `Anda bertanya tentang: "${userMessage}". Fitur ini sedang dalam pengembangan.`,
                    sender: 'ai'
                });
            }, 1000);
        }
    }
})