"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={sectionRef} className="relative bg-white py-32">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 px-6">
                {/* LEFT */}
                <div className="sticky top-32 h-fit">
                    <span className="inline-block bg-[#f15d34] text-white uppercase text-xs font-semibold px-8 py-3 rounded-full mb-6 -rotate-3">
                        reasons to believe
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                        Почувствуйте <br /> себя особенным
                    </h2>

                    <p className="text-gray-600 max-w-md">
                        Наша команда окружает заботой и любовью каждого участника
                        и никогда не останавливается на достигнутом.
                    </p>
                </div>

                {/* RIGHT */}
                <div className="relative h-[220vh]">
                    {cards.map((card, index) => {
                        const start = index * 0.2;
                        const end = start + 0.4;

                        const y = useTransform(
                            scrollYProgress,
                            [start, end],
                            [120, 0]
                        );

                        const scale = useTransform(
                            scrollYProgress,
                            [start, end],
                            [0.95, 1]
                        );

                        return (
                            <motion.div
                                key={index}
                                style={{ y, scale }}
                                className="sticky top-24 mb-12 rounded-[32px] overflow-hidden shadow-xl"
                            >
                                <div
                                    className="h-[320px] flex flex-col justify-end p-8 text-white"
                                    style={{
                                        backgroundImage: `url(${card.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <h3 className="text-3xl font-bold mb-2">
                                        {card.title}
                                    </h3>
                                    <p className="text-sm opacity-90">
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