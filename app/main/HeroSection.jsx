"use client"
import {motion} from 'framer-motion';
import {useEffect, useState} from "react";
import {ArrowDown} from "lucide-react"
import Line from "@/utils/Line";

const PHRASES = [
    "выйти за рамки привычного",
    "прислушаться к своим истинным желаниям",
    "взглянуть на мир и на себя с другой стороны",
];

export function HeroSection() {
    const [text, setText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [phase, setPhase] = useState("typing");

    useEffect(() => {
        let timeout;

        if (phase === "typing") {
            if (charIndex < PHRASES[textIndex].length) {
                timeout = setTimeout(() => {
                    setText((prev) => prev + PHRASES[textIndex][charIndex]);
                    setCharIndex((prev) => prev + 1);
                }, 70);
            } else {
                timeout = setTimeout(() => setPhase("pause"), 1200);
            }
        }

        if (phase === "pause") {
            timeout = setTimeout(() => setPhase("deleting"), 400);
        }

        if (phase === "deleting") {
            if (charIndex > 0) {
                timeout = setTimeout(() => {
                    setText((prev) => prev.slice(0, -1));
                    setCharIndex((prev) => prev - 1);
                }, 40);
            } else {
                setPhase("typing");
                setTextIndex((prev) => (prev + 1) % PHRASES.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [charIndex, phase, textIndex]);

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

                <div className="absolute inset-0 bg-black/30"/>
            </div>


            <div className="relative w-full max-w-7xl mx-auto z-10 h-full flex items-center px-6 justify-between">
                <div>
                    <motion.h1
                        className="text-white mb-4"
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        <div className="md:text-7xl text-5xl lg:text-8xl font-bold tracking-wider mb-2 w-fit">TRAVEL <Line/></div>

                        <div className="md:text-4xl text-3xl lg:text-5xl font-light">перезагрузка</div>
                    </motion.h1>
                    <motion.p
                        className="text-white/90 md:text-lg mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Пришло время{" "}
                        <span>
                {text}
                            <span className="ml-0.5 animate-pulse">|</span>
            </span>
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.6}}
                    >
                        <button
                            className="bg-[#FFD84D] hover:bg-[#FFCC00] text-black px-8 py-3 rounded-full font-medium transition-colors">
                            Выбрать программу
                        </button>
                        <button
                            className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-medium transition-colors">
                            Больше о Nesin Travel
                        </button>
                    </motion.div>
                </div>
                <div className={"text-white text-lg [writing-mode:vertical-rl] flex items-center gap-5 pt-20"}>
                    <p>Переверни свой внутренний мир</p>
                    <div
                        className="border-2 rounded-full p-2 animate-bounce"
                        style={{ animationDuration: '2s', transform: 'translateY(50)' }}
                    >
                        <ArrowDown />
                    </div>

                </div>
            </div>
        </section>
    );
}