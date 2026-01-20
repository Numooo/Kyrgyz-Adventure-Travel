"use client"
import { motion } from 'framer-motion';
import Rotate from "@/utils/Rotate";

export function ForWhoSection() {
    const images = [
        'https://images.unsplash.com/photo-1598177183308-ec8555cbfe76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwcnVpbnMlMjB0ZW1wbGV8ZW58MXx8fHwxNzY4NDU4MjI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1655976795408-92a8498838c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBib290cyUyMHRyYWlsfGVufDF8fHx8MTc2ODQ2MTYwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1676981405728-e5ec4e112a67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBtb3VudGFpbnMlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzY4NDgwNTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1633421457649-cbeee97256c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBtb3VudGFpbiUyMHZpZXd8ZW58MXx8fHwxNzY4NDgwNTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ];

    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <motion.div
                            className="flex items-center gap-4 mb-4"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Rotate>ДНК бренда</Rotate>
                        </motion.div>
                        <motion.h2
                            className="text-4xl lg:text-5xl font-bold mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Для кого<br />
                            Nesin Travel?
                        </motion.h2>
                        <motion.p
                            className="text-gray-600 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Для людей, которые хотят путешествовать в компании единомышленников, исследовать новые места, получать незабываемые впечатления и заводить друзей по всему миру.
                        </motion.p>
                        <motion.button
                            className="bg-[#FFD84D] hover:bg-[#FFCC00] text-black px-8 py-3 rounded-full font-medium transition-colors"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Подробнее о нас
                        </motion.button>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="flex gap-4">
                            {images.map((image, index) => (
                                <motion.div
                                    key={index}
                                    className="flex-1 h-80 rounded-3xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
                                    style={{
                                        marginTop: index % 2 === 0 ? '0' : '2rem',
                                    }}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.15 }}
                                >
                                    <img
                                        src={image}
                                        alt={`Travel ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}