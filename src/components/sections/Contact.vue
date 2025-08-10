<template>
    <section id="contact" class="py-20">
        <h2 class="text-4xl font-bold text-center text-white mb-4" data-aos="fade-up">Get In Touch</h2>
        <p class="text-center text-slate-400 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">Punya
            proyek atau ide menarik? Saya akan senang mendengarnya. Kirimkan saya pesan dan mari kita wujudkan ide
            Anda.</p>
        <form action="#" method="POST" class="max-w-xl mx-auto flex flex-col" data-aos="fade-up" data-aos-delay="200">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label for="name" class="block text-slate-400 mb-2">Name</label>
                    <input type="text" placeholder="Your Name" id="name" name="name"
                        class="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-shadow duration-300"
                        required>
                </div>
                <div>
                    <label for="email" class="block text-slate-400 mb-2">Email</label>
                    <input type="email" placeholder="Your Email" id="email" name="email"
                        class="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-shadow duration-300"
                        required>
                </div>
            </div>
            <div class="mb-6">
                <label for="message" class="block text-slate-400 mb-2">Message</label>
                <textarea placeholder="Your Message" id="message" name="message" rows="5"
                    class="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-shadow duration-300"
                    required></textarea>
            </div>
            <div class="self-start">
                <button type="submit"
                    class="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105">Send
                    Message</button>
            </div>
        </form>
    </section>
</template>