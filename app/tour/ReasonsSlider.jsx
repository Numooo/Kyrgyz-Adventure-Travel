"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ReasonsSlider({ reasons }) {
    const wrapperRef = useRef(null);

    const [current, setCurrent] = useState(0);
    const [cardWidth, setCardWidth] = useState(550);
    const gap = 24;

    /* ---------- adaptive card width ---------- */
    useEffect(() => {
        const update = () => {
            if (window.innerWidth < 640) setCardWidth(280);
            else if (window.innerWidth < 1024) setCardWidth(360);
            else setCardWidth(550);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const maxIndex = reasons.length - 2;

    const prev = () => setCurrent((i) => Math.max(i - 1, 0));
    const next = () => setCurrent((i) => Math.min(i + 1, maxIndex));

    return (
        <section className="py-16 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* header */}
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl lg:text-5xl font-bold">
                        Ради чего стоит поехать
                    </h2>

                    <div className="flex gap-4">
                        <button
                            onClick={prev}
                            className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:opacity-30"
                        >
                            <ArrowLeft />
                        </button>
                        <button
                            onClick={next}
                            className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:opacity-30"
                        >
                            <ArrowRight />
                        </button>
                    </div>
                </div>

                {/* slider */}
                <div ref={wrapperRef} className="">
                    <motion.div
                        className="flex gap-6 cursor-grab active:cursor-grabbing"
                        drag="x"
                        dragConstraints={{
                            left: -(cardWidth + gap) * maxIndex,
                            right: 0,
                        }}
                        animate={{
                            x: -(cardWidth + gap) * current,
                        }}
                        transition={{ type: "spring", stiffness: 220, damping: 28 }}
                        onDragEnd={(e, info) => {
                            if (info.offset.x < -100) next();
                            if (info.offset.x > 100) prev();
                        }}
                    >
                        {reasons.map((reason, index) => (
                            <div
                                key={index}
                                className="relative shrink-0 rounded-3xl overflow-hidden"
                                style={{
                                    width: cardWidth,
                                    height: 500,
                                }}
                            >
                                <img
                                    src={reason.image}
                                    alt={reason.title}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                <div className="absolute bottom-10 left-10">
                                    <h3 className="text-white text-2xl font-bold">
                                        {reason.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
