"use client"
import { motion } from 'framer-motion';

export function PaymentSection() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-4xl lg:text-5xl font-bold mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Путешествия без границ
                </motion.h2>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1689020339486-92fed96a676e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwcmVkJTIwY2FyfGVufDF8fHx8MTc2ODQ4MDUzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Travel"
                            className="w-full h-96 object-cover rounded-3xl"
                        />
                    </motion.div>

                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-4">
                            Застрахованные карты<br />
                            Visa / Mastercard
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Мы принимаем оплату картами Visa и Mastercard. Все платежи защищены современными системами безопасности. Вы можете оплатить тур полностью или воспользоваться рассрочкой.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-[#FFD84D] hover:bg-[#FFCC00] text-black px-8 py-3 rounded-full font-medium transition-colors">
                                Оплатить онлайн
                            </button>
                            <button className="border border-gray-300 hover:border-gray-400 text-black px-8 py-3 rounded-full font-medium transition-colors">
                                Подробнее →
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}