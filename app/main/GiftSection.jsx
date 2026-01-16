"use client"
import {motion} from 'framer-motion';
import Line from "@/utils/Line";
import { useEffect, useState } from "react";
import {Gift} from "lucide-react";

export function GiftSection() {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const maxOffset = 5; // максимальное смещение
            const strength = 0.03; // чувствительность

            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            let dx = (e.clientX - centerX) * strength;
            let dy = (e.clientY - centerY) * strength;

            // Ограничиваем смещение
            dx = Math.max(-maxOffset, Math.min(maxOffset, dx));
            dy = Math.max(-maxOffset, Math.min(maxOffset, dy));

            // Инверсия — уходит от мыши
            setOffset({
                x: -dx,
                y: -dy,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="bg-[#222222] py-20 px-6 max-w-7xl mx-auto rounded-[50px] relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="max-w-6xl mx-auto"
                    initial={{opacity: 0, scale: 0.95}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                >

                    <div className="max-w-3xl">
                        <motion.h2
                            className="text-white text-4xl lg:text-5xl font-bold mb-6"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.6, delay: 0.2}}
                        >
                            Дарите эмоции —<br/>
                            путешествие в <div className="w-fit inline-block">подарок! <Line/></div>
                        </motion.h2>

                        <div className="flex gap-8 items-center mb-12">
                            <div className={"flex flex-col w-1/2 justify-centers"}>
                                <motion.p
                                    className="mb-8 !font-sans text-white"
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true}}
                                    transition={{duration: 0.6, delay: 0.3}}
                                >
                                    Подарите своим близким путешествие, полное приключений и ярких впечатлений!
                                </motion.p>
                                <motion.div
                                    className="flex gap-4"
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true}}
                                    transition={{duration: 0.6, delay: 0.4}}
                                >
                                    <button
                                        className="bg-[#FFD84D] w-full mr-5 hover:bg-[#f15d34] hover:text-white text-black py-5 rounded-full font-medium transition-colors">
                                        ЗАКАЗАТЬ
                                    </button>
                                </motion.div>
                            </div>
                            <motion.div
                                className="w-1/2 h-full flex p-7 gap-5 border-2 items-start rounded-[20px] border-white bg-transparent"
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.6, delay: 0.4}}
                            >
                                <div
                                    className="bg-white p-2 rounded-full">
                                    <Gift/>
                                </div>
                                <p className={"text-white !font-sans"}>Предлагаем подарочный сертификат с открытой
                                    датой <br/> на любой тур и любую сумму</p>
                            </motion.div>
                        </div>
                        <img
                            src="https://optim.tildacdn.com/tild6638-6131-4235-b464-643864353132/-/resize/760x/-/format/webp/_1.png.webp"
                            alt=""
                            className="absolute top-0 right-0 w-100 pointer-events-none transition-transform duration-150 ease-out"
                            style={{
                                transform: `translate(${offset.x}px, ${offset.y}px)`,
                            }}
                        />
                        <motion.div
                            className="flex gap-8 text-white/60 text-sm"
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.6, delay: 0.5}}
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#FFD84D] rounded-full"/>
                                <span>Любой номинал</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#FFD84D] rounded-full"/>
                                <span>Срок действия 1 год</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#FFD84D] rounded-full"/>
                                <span>Электронный формат</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}