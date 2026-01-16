"use client"
import { motion } from 'framer-motion';

export function StatsSection() {
    const stats = [
        {
            number: '12 лет',
            label: 'на рынке',
            icon: '🌍',
        },
        {
            number: 'Более 1000',
            label: 'успешных туров',
            icon: '✈️',
        },
        {
            number: '34 направления',
            label: 'по всему миру',
            icon: '📍',
        },
        {
            number: '63 000 человек',
            label: 'довольных клиентов',
            icon: '⭐',
        },
    ];

    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="flex items-center gap-4 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
          <span className="bg-[#FF6B6B] text-white text-xs px-4 py-1.5 rounded-full">
            Новое
          </span>
                </motion.div>
                <motion.h2
                    className="text-4xl lg:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Почувствуйте
                </motion.h2>
                <motion.h2
                    className="text-4xl lg:text-5xl font-bold mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    себя особенным
                </motion.h2>

                <motion.p
                    className="text-gray-600 mb-12 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Nesin Travel предлагает уникальные программы путешествий с индивидуальным подходом к каждому клиенту. Мы создаем незабываемые впечатления и помогаем открывать новые горизонты.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 hover:shadow-lg transition-shadow"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-4xl mb-4">{stat.icon}</div>
                            <div className="text-3xl font-bold mb-2">{stat.number}</div>
                            <div className="text-gray-600">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}