"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const tagsTop = [
    "КАРЕЛИЯ",
    "ЮАР",
    "АБХАЗИЯ",
    "СЕВЕРНАЯ ОСЕТИЯ",
    "ТУРЦИЯ",
    "ГОРНОЛЫЖКА В ШЕРЕГЕШЕ",
];

const tagsBottom = [
    "КЫРГЫЗСТАН",
    "МАРОККО",
    "КАМЧАТКА",
    "АРМЕНИЯ",
    "ЯПОНИЯ",
    "ИСЛАНДИЯ",
];

export default function ScrollTags() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Верхний ряд → вправо
    const xTop = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);

    // Нижний ряд → влево
    const xBottom = useTransform(scrollYProgress, [0, 1], ["20%", "-10%"]);

    return (
        <section
            ref={sectionRef}
        >
            <motion.div
                style={{ x: xTop }}
                className="flex gap-4 whitespace-nowrap"
            >
                {tagsTop.map((tag, index) => (
                    <div key={index} className="px-6 py-2 rounded-full border-2 border-[#7a7a7a] text-[#7a7a7a] text-sm">
                        {tag}
                    </div>
                ))}
            </motion.div>

            <motion.div
                style={{ x: xBottom }}
                className="flex gap-4 whitespace-nowrap"
            >
                {tagsBottom.map((tag, index) => (
                    <div key={index} className="px-6 py-2 rounded-full border-2 border-[#7a7a7a] text-[#7a7a7a] text-sm">
                        {tag}
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
