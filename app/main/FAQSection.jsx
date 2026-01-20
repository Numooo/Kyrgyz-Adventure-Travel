"use client"
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import Line from "@/utils/Line";
import Rotate from "@/utils/Rotate";

const faqs = [
    {
        question: 'Нужна ли виза для путешествий с Nesin Travel?',
        answer: 'Зависит от направления. Мы помогаем с оформлением виз и предоставляем полную информацию по визовым требованиям для каждой страны.',
    },
    {
        question: 'Какой уровень подготовки нужен для активных туров?',
        answer: 'Для большинства наших туров не требуется специальная физическая подготовка. Мы указываем уровень сложности в описании каждой программы.',
    },
    {
        question: 'Возможна ли отмена или изменение брони?',
        answer: 'Да, но условия зависят от тура и времени до начала путешествия. Подробности в наших правилах бронирования.',
    },
    {
        question: 'Могу ли я присоединиться к туру один/одна?',
        answer: 'Конечно! Многие наши путешественники путешествуют в одиночку и находят новых друзей в поездке.',
    },
    {
        question: 'Что включено в стоимость тура?',
        answer: 'Обычно проживание, большинство приемов пищи, трансферы и экскурсии. Детальная информация указана в программе каждого тура.',
    },
    {
        question: 'Как обеспечивается безопасность?',
        answer: 'Все наши туры застрахованы, маршруты тщательно проверены, а с группой всегда путешествует опытный гид.',
    },
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="bg-[#1a1a1a] py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="flex items-center gap-4 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Rotate>FAQ</Rotate>
                </motion.div>
                <motion.h2
                    className="text-white text-4xl lg:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Знаем, что вас <div className={"inline-block w-fit"}>волнует <Line/></div>
                </motion.h2>

                <div className="mt-12 space-y-1 grid grid-cols-2 gap-x-10 gap-y-4 items-start">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-medium text-lg pr-4">{faq.question}</span>
                                <Plus
                                    className={`flex-shrink-0 bg-[#FFD84D] hover:bg-[#f15d34] hover:text-white rounded-full transition-transform duration-300 ${
                                        openIndex === index ? '-rotate-45' : ''
                                    }`}
                                    strokeWidth={1}
                                    size={40}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? 'max-h-48' : 'max-h-0'
                                }`}
                            >
                                <div className="px-6 pb-5 text-gray-600">
                                    {faq.answer}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}