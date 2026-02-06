"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Rotate from "@/utils/Rotate";
import useViewportWidth from "@/hooks/useViewportWidth";

const cards = [
    {
        title: "6 лет",
        desc: "создаем эксклюзивные авторские программы",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
        title: "Более 1000",
        desc: "путешественников доверяют нам каждый год",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
        title: "35 направлений",
        desc: "мы открыли за время работы проекта",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    },
    {
        title: "63 000 человек",
        desc: "вступило в наше travel-комьюнити",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    },
];

export function StatsSection() {
    const sectionRef = useRef(null);
    const viewportWidth = useViewportWidth();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={sectionRef} className="relative bg-white py-32">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 px-6">
                {/* LEFT */}
                <div className="sticky top-32 h-fit">
                    <Rotate>reasons to believe</Rotate>

                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight my-6">
                        Почувствуйте <br /> себя особенным
                    </h2>

                    <p className="text-gray-600 max-w-md">
                        Наша команда окружает заботой и любовью каждого участника
                        и никогда не останавливается на достигнутом.
                    </p>
                </div>

                <div className="relative">
                    {cards.map((card, index) => {
                        const start = index / cards.length;
                        const end = (index + 1) / cards.length;

                        const baseWidth = Math.min(viewportWidth * 0.6, 600);
                        const maxShrink = baseWidth * 0.07;
                        const step = baseWidth * 0.02;

                        const shrinkAmount = Math.max(0, maxShrink - index * step);

                        const width = useTransform(
                            scrollYProgress,
                            [start, end],
                            [baseWidth, baseWidth - shrinkAmount]
                        );

                        const x = useTransform(width, (w) => (baseWidth - w) / 2);

                        const y = useTransform(
                            scrollYProgress,
                            [start, end],
                            [50, -baseWidth * 0.15 + index * baseWidth * 0.05]
                        );

                        return (
                            <motion.div
                                key={index}
                                style={{
                                    y,
                                    x,
                                    width,
                                    zIndex: index,
                                }}
                                className="sticky top-60 mb-5 rounded-[32px] overflow-hidden shadow-xl"
                            >
                                <div
                                    className="h-50 flex flex-col relative justify-end p-8 text-white"
                                    style={{
                                        backgroundImage: `url(${card.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <div className="absolute inset-0 bg-black/30" />
                                    <h3 className="text-3xl relative font-bold mb-2">
                                        {card.title}
                                    </h3>
                                    <p className="text-sm relative opacity-90">
                                        {card.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}