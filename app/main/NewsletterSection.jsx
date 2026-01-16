"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';

export function NewsletterSection() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Subscribe:', email);
        setEmail('');
    };

    return (
        <section className="bg-[#1a1a1a] py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Лучшего момента не будет,
                </motion.h2>
                <motion.h2
                    className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    пора путешествовать!
                </motion.h2>

                <motion.p
                    className="text-white/80 mb-12 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Подпишитесь на рассылку и получайте эксклюзивные предложения, советы путешественникам и вдохновение для новых приключений
                </motion.p>

                <motion.form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Введите ваш email"
                        className="flex-1 px-6 py-3 rounded-full border border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-[#FFD84D]"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-[#FFD84D] hover:bg-[#FFCC00] text-black px-8 py-3 rounded-full font-medium transition-colors whitespace-nowrap"
                    >
                        Подписаться
                    </button>
                </motion.form>
            </div>
        </section>
    );
}