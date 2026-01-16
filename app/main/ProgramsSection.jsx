"use client"
import { motion } from 'framer-motion';
import Line from "@/utils/Line";

const programs = [
    {
        id: 1,
        title: 'Архипелаг Лофотен',
        subtitle: 'Норвегия',
        description: 'Архипелаг, расположенный за полярным кругом в Норвежском море. Туристы приезжают сюда, чтобы насладиться великолепными пейзажами, увидеть северное сияние и полуночное солнце.',
        image: 'https://images.unsplash.com/photo-1676981405728-e5ec4e112a67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBtb3VudGFpbnMlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzY4NDgwNTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        badge: '14 дней',
        preview: ["https://kappa.lol/hCN8rY", "https://www.kg-tour.com/assets/%D1%81%D0%B5%D0%B3%D0%B8%D0%B7.jpg"],
        price: 'от 150 000 ₽',
    },
    {
        id: 2,
        title: 'Тихо Байкальский',
        subtitle: 'Россия',
        description: 'Самое глубокое озеро в мире и самый большой резервуар пресной воды. Туристы стремятся увидеть уникальную природу, попробовать местную кухню и познакомиться с культурой.',
        image: 'https://images.unsplash.com/photo-1617610839501-af0079ef225d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGtheWFraW5nfGVufDF8fHx8MTc2ODQ4MDUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        badge: '10 дней',
        preview: ["https://www.kg-tour.com/assets/%D0%B1%D0%B5%D1%88.jpg", "https://www.kg-tour.com/assets/%D0%BE%D0%BD%D0%B1%D0%B5%D1%88.jpg"],
        price: 'от 89 000 ₽',
    },
    {
        id: 3,
        title: 'Алжирская тропа Средиземноморья',
        subtitle: 'Турция',
        description: 'Ликийская тропа — длинный пешеходный маршрут в Турции. Протяженностью около 540 км, проходящий вдоль средиземноморского побережья страны.',
        image: 'https://images.unsplash.com/photo-1627545987039-1a9ab41214d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGhpa2luZyUyMGJhY2twYWNrfGVufDF8fHx8MTc2ODQ4MDUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        badge: '8 дней',
        preview: ["https://www.kg-tour.com/assets/%D0%B6%D0%B5%D1%82%D0%B8.jpg", "https://www.kg-tour.com/assets/%D0%BE%D0%BD%D1%8D%D0%BA%D0%B8.jpg"],
        price: 'от 78 000 ₽',
    },
    {
        id: 4,
        title: 'Тропические Филиппины',
        subtitle: 'Филиппины',
        description: 'Филиппины — это более 7000 островов с белоснежными пляжами, коралловыми рифами и дождевыми лесами. Идеальное место для дайвинга и снорклинга.',
        image: 'https://images.unsplash.com/photo-1602455891364-31034e19a826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzY4NDM3NjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        badge: '12 дней',
        preview: ["https://www.kg-tour.com/assets/%D1%82%D0%BE%D0%B3%D1%83%D0%B7.jpg", "https://www.kg-tour.com/assets/%D0%BE%D0%BD.jpg"],
        price: 'от 120 000 ₽',
    },
    {
        id: 5,
        title: 'Зимняя сказка Скандинавии',
        subtitle: 'Финляндия',
        description: 'Зимний тур по Лапландии с катанием на хаски, снегоходах, посещением ледяного отеля и встречей с Санта-Клаусом в его официальной резиденции.',
        image: 'https://images.unsplash.com/photo-1669399201888-ceaa45b683ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm93eSUyMGZvcmVzdCUyMHdpbnRlcnxlbnwxfHx8fDE3Njg0ODA1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        badge: '7 дней',
        preview: ["https://www.kg-tour.com/assets/%D0%BE%D0%BD%D1%83%D1%87.jpeg", "https://www.kg-tour.com/assets/%D0%BE%D0%BD%D0%B6%D0%B5%D1%82%D0%B8.jpg"],
        price: 'от 95 000 ₽',
    },
    {
        id: 6,
        title: 'Краски японского Дзен',
        subtitle: 'Япония',
        description: 'Путешествие по древним храмам Киото, традиционным садам, посещение горы Фудзи и знакомство с культурой самураев и гейш.',
        image: 'https://images.unsplash.com/photo-1638360451215-92c1aef6cde0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMG1hcGxlJTIwYXV0dW1ufGVufDF8fHx8MTc2ODQ4MDUzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        badge: '14 дней',
        preview: ["https://www.kg-tour.com/assets/%D0%B1%D0%B8%D1%80.jpg", "https://www.kg-tour.com/assets/%D0%BE%D0%BD%D1%82%D0%BE%D1%80%D1%82.jpg"],
        price: 'от 180 000 ₽',
    },
];

export function ProgramsSection() {
    return (
        <section className="bg-[#1a1a1a] py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="flex items-center gap-4 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
          <span className="bg-[#f15d34] text-white text-xs px-10 py-3 rounded-full -rotate-4 uppercase font-semibold">
            Афиша путешествий
          </span>
                </motion.div>
                <motion.h2
                    className="text-white text-4xl lg:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Каждая программа —
                </motion.h2>
                <motion.h2
                    className="text-white text-4xl flex gap-5 lg:text-5xl font-bold mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    новая <div className={"w-fit inline-block"}>история <Line/></div>
                </motion.h2>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.id}
                            className="bg-white rounded-3xl overflow-hidden hover:transform hover:scale-[1.02] transition-transform duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="relative h-64">
                                <div className="relative w-full h-full overflow-hidden group">
                                    <img
                                        src={program.preview[0]}
                                        alt={program.title}
                                        className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                                    />
                                    <img
                                        src={program.preview[1]}
                                        alt={program.title}
                                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                    />
                                </div>
                                <div className="absolute top-4 left-4">
                  <span className="bg-[#FFD84D] text-black text-sm px-4 py-1.5 rounded-full font-medium">
                    {program.badge}
                  </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-1">{program.title}</h3>
                                <p className="text-gray-500 text-sm mb-4">{program.subtitle}</p>
                                <p className="text-gray-700 text-sm mb-6 line-clamp-4">
                                    {program.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xl font-bold">{program.price}</span>
                                    <button className="text-sm font-medium hover:underline flex items-center gap-2">
                                        Подробнее →
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-medium transition-colors">
                        Смотреть все путешествия
                    </button>
                    <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-medium transition-colors">
                        Календарь туров
                    </button>
                </motion.div>
            </div>
        </section>
    );
}