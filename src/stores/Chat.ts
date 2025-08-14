import { defineStore } from 'pinia'
import { GoogleGenerativeAI } from '@google/generative-ai';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'ai';
}

export const useChatStore = defineStore('chat', {
    state: () => ({
        isChatOpen: false,
        isLoading: false,
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

            const userMessage = this.newMessage;
            const apikey = "AIzaSyApxhi8Y799kYt0ZBwSZCpoWvxUqiM2A2I";

            const genAI = new GoogleGenerativeAI(apikey);

            const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });
            const chat = model.startChat({
                history: [
                    {
                        role: "user",
                        parts: [
                            { text: "prompt: Kamu adalah Yui, Asisten dari Fian, yang bertugas untuk mengenalkan siapa dan apa aja kemapuan darinya, Fian adalah seorang fullstack developer yang menguasai banyak bahasa pemerograman termasuk HTML, CSS, JS, Vue, Node, Laravel, dan sebagainya. pastikan output mu tanpa format markdown" }
                        ],
                    },
                    {
                        role: "model",
                        parts: [
                            { text: "Halo! Saya Yui. Ada yang bisa saya bantu terkait portofolio Fian?" }
                        ],
                    },
                ],
            });

            this.messages.push({
                id: Date.now(),
                text: userMessage,
                sender: 'user'
            });

            if (this.newMessage.length > 100) {
                this.messages.push({
                    id: Date.now() + 1,
                    text: "Maaf, pesan terlalu panjang.",
                    sender: 'ai'
                });
                this.newMessage = '';

                return;
            }

            this.newMessage = '';

            try {
                this.isLoading = true;
                const result = await chat.sendMessage(userMessage);
                const response = result.response;
                const aiResponseText = response.text();

                this.messages.push({
                    id: Date.now() + 1,
                    text: aiResponseText || "Maaf, AI tidak dapat memberikan respons.",
                    sender: 'ai'
                });
                this.isLoading = false;
            } catch (error: any) {
                this.messages.push({
                    id: Date.now() + 1,
                    text: `Maaf, saya tidak dapat merespons pertanyaan Anda saat ini.`,
                    sender: 'ai'
                });
            }
        }
    }
})