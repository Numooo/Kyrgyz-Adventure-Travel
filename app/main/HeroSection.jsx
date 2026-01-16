"use client"
import { motion } from 'framer-motion';

export function HeroSection() {
    return (
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/bg.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                <div className="absolute inset-0 bg-black/30" />
            </div>


            <div className="relative z-10 h-full flex items-center justify-center px-6">
                <div className="text-center max-w-4xl">
                    <motion.h1
                        className="text-white mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="text-7xl lg:text-8xl font-bold tracking-wider mb-2">TRAVEL</div>
                        <div className="text-4xl lg:text-5xl font-light">перезагрузка</div>
                    </motion.h1>
                    <motion.p
                        className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Найдите единомышленников для незабываемых путешествий по всему миру
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <button className="bg-[#FFD84D] hover:bg-[#FFCC00] text-black px-8 py-3 rounded-full font-medium transition-colors">
                            Выбрать программу
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-medium transition-colors">
                            Больше о Nesin Travel
                        </button>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    );
}