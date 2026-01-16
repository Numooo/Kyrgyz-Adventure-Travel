"use client"
import { motion } from 'framer-motion';

export function GiftSection() {
    return (
        <section className="bg-[#1a1a1a] py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20">
                        <div className="w-full h-full bg-gradient-to-l from-yellow-400 to-transparent" />
                    </div>

                    <div className="relative z-10 max-w-2xl">
                        <motion.h2
                            className="text-white text-4xl lg:text-5xl font-bold mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Дарите эмоции —<br />
                            путешествие в <span className="underline decoration-[#FFD84D]">подарок</span>!
                        </motion.h2>
                        <motion.p
                            className="text-white/80 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Подарочный сертификат на путешествие — это лучший подарок для близких. Выберите любую программу или номинал, и мы оформим красивый сертификат.
                        </motion.p>
                        <motion.div
                            className="flex gap-4 mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <button className="bg-[#FFD84D] hover:bg-[#FFCC00] text-black px-8 py-3 rounded-full font-medium transition-colors">
                                Купить сертификат
                            </button>
                            <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-medium transition-colors">
                                Узнать, как это работает
                            </button>
                        </motion.div>

                        <motion.div
                            className="flex gap-8 text-white/60 text-sm"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#FFD84D] rounded-full" />
                                <span>Любой номинал</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#FFD84D] rounded-full" />
                                <span>Срок действия 1 год</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#FFD84D] rounded-full" />
                                <span>Электронный формат</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}