"use client"
import { motion } from 'framer-motion';

export function GroupTravelSection() {
    return (
        <section className="relative py-32 px-6 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1613539266165-e444d4d3c977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc3RyZWV0JTIwd2Fsa2luZ3xlbnwxfHx8fDE3Njg0ODA1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.h2
                    className="text-white text-4xl lg:text-5xl font-bold mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Путешествия для<br />
                    большой компании
                </motion.h2>
                <motion.p
                    className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Организуем корпоративные туры, поездки для друзей и семейные путешествия. Индивидуальный маршрут под ваши пожелания.
                </motion.p>
                <motion.button
                    className="bg-[#FFD84D] hover:bg-[#FFCC00] text-black px-8 py-3 rounded-full font-medium transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Оставить заявку
                </motion.button>
            </div>
        </section>
    );
}