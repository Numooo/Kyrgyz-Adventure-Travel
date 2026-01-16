"use client"
import { motion } from 'framer-motion';
import Line from "@/utils/Line";

export function JoinSection() {
    return (
        <section className="bg-[#1a1a1a] max-w-7xl mx-auto rounded-[50px] py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    className="text-white text-4xl lg:text-5xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Присоединяйтесь <div className={"w-fit inline-block"}>к нам!<Line/></div>
                </motion.h2>
                <motion.div
                    className="flex justify-center gap-4 mb-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500" />
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white -ml-4">
                        <div className="w-full h-full bg-gradient-to-br from-pink-400 to-red-500" />
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white -ml-4">
                        <div className="w-full h-full bg-gradient-to-br from-green-400 to-teal-500" />
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white -ml-4">
                        <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500" />
                    </div>
                </motion.div>
                <motion.p
                    className="text-white/80 mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Уже более 10 000 путешественников со всего мира открыли для себя новые горизонты вместе с нами
                </motion.p>
                <motion.button
                    className="bg-[#FFD84D] hover:bg-[#FFCC00] text-black px-8 py-3 rounded-full font-medium transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Присоединиться
                </motion.button>
            </div>
        </section>
    );
}