"use client"
import { motion } from 'framer-motion';
import Rotate from "@/utils/Rotate";
import useViewportWidth from "@/hooks/useViewportWidth";

export function ForWhoSection() {
    const viewportWidth = useViewportWidth();

    const images = [
        'https://images.unsplash.com/photo-1598177183308-ec8555cbfe76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwcnVpbnMlMjB0ZW1wbGV8ZW58MXx8fHwxNzY4NDU4MjI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1655976795408-92a8498838c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBib290cyUyMHRyYWlsfGVufDF8fHx8MTc2ODQ2MTYwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1598177183308-ec8555cbfe76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwcnVpbnMlMjB0ZW1wbGV8ZW58MXx8fHwxNzY4NDU4MjI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1598177183308-ec8555cbfe76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwcnVpbnMlMjB0ZW1wbGV8ZW58MXx8fHwxNzY4NDU4MjI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1676981405728-e5ec4e112a67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBtb3VudGFpbnMlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzY4NDgwNTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1633421457649-cbeee97256c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBtb3VudGFpbiUyMHZpZXd8ZW58MXx8fHwxNzY4NDgwNTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ];

    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-12">
                    <div className="flex justify-between items-center">
                        <div className={"w-2/5"}>
                            <motion.div
                                className="flex items-center gap-4 mb-4"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <Rotate>ДНК бренда</Rotate>
                            </motion.div>
                            <div className={"flex flex-col"}>
                                <motion.h2
                                    className="text-4xl lg:text-5xl font-bold w-fit"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                >
                                    Для кого
                                </motion.h2>
                                <motion.h2
                                    className="text-4xl lg:text-5xl font-bold mb-6 w-fit self-end"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                >
                                    Nesin Travel?
                                </motion.h2>
                            </div>
                        </div>
                        <div className={"w-1/2"}>
                            <motion.p
                                className="text-gray-600 mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Для людей, вдохновленных новыми открытиями, полных любопытства и желания наслаждаться каждым мгновением жизни
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
                    </div>

                    <div className="flex justify-center">
                        <div className="relative flex items-center">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    data-aos="fade-left"
                                    data-aos-delay={index * 500}
                                    data-aos-duration="400"
                                    className="relative md:w-[300px] md:h-[400px] h-40 w-32 rounded-2xl md:rounded-[32px] overflow-hidden shrink-0"
                                    style={{
                                        marginLeft: index === 0 ? 0 : viewportWidth < 768 ? -50 : -120,
                                        marginTop: index % 2 === 0 ? '0px' : '80px',
                                        zIndex: index,
                                    }}
                                >
                                    <img
                                        src={image}
                                        alt={`Travel ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}