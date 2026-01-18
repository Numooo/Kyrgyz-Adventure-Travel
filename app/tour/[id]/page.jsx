"use client"
import { motion } from 'framer-motion';
import {useParams} from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import { StatsSection } from '@/app/main/StatsSection';

const tourData = {
  '1': {
    title: 'Карелия, Зима',
    location: 'Карелия',
    duration: '7 дней',
    price: 52500,
    image: 'https://images.unsplash.com/photo-1705087916321-d052a60ab10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBmb3Jlc3QlMjBmaW5sYW5kfGVufDF8fHx8MTc2ODcyNDcwMXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Это зимнее путешествие по Карелии — возможность погрузиться в магию заснеженных лесов, покататься на собачьих упряжках, посетить уникальные природные достопримечательности и насладиться зимними забавами в самом сердце русского севера.',
    reasonsToVisit: [
      {
        title: 'Зимний лес',
        image: 'https://images.unsplash.com/photo-1705087916321-d052a60ab10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBmb3Jlc3QlMjBmaW5sYW5kfGVufDF8fHx8MTc2ODcyNDcwMXww&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'Прогулки с хаски',
        image: 'https://images.unsplash.com/photo-1652972601829-83d833e58be1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodXNreSUyMGRvZyUyMHNsZWRkaW5nfGVufDF8fHx8MTc2ODY0ODY2MXww&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'Красивые виды на горы',
        image: 'https://images.unsplash.com/photo-1645102136899-0b6728bfe2b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHNjZW5pYyUyMHZpZXd8ZW58MXx8fHwxNzY4NzI0NzAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
    route: [
      {
        day: 'День 1',
        title: 'Погружение в зимнюю сказку на просторах Финляндии',
        description:
          'Встреча группы в аэропорту Хельсинки. Трансфер в отель в исторической части города. После размещения — знакомство с городом, прогулка по вечернему Хельсинки. Первый ужин в атмосферном финском ресторане с дегустацией традиционной кухни. Вечером — знакомство с группой и презентация маршрута.',
        photos: [
          'https://images.unsplash.com/photo-1583528187857-27f818f12caf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBob3RlbHxlbnwxfHx8fDE3Njg3MjQ3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
          'https://images.unsplash.com/photo-1602334389457-ec010b3087a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGZpcmVwbGFjZXxlbnwxfHx8fDE3Njg3MjQ3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
          'https://images.unsplash.com/photo-1645102136899-0b6728bfe2b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHNjZW5pYyUyMHZpZXd8ZW58MXx8fHwxNzY4NzI0NzAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        ],
        subItems: [
          'Трансфер в отель',
          'Ночь в хостеле',
          'Встреча с группой',
        ],
      },
      {
        day: 'День 2',
        title: 'Современный взгляд в озера Рускеала',
        description:
          'Ранний выезд в сторону Карелии. Посещение мраморного каньона Рускеала — одной из самых красивых природных достопримечательностей. Катание на тюбингах, прогулка по зимнему парку. Размещение в уютном гостевом доме с видом на заснеженные леса.',
        photos: [
          'https://images.unsplash.com/photo-1705087916321-d052a60ab10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBmb3Jlc3QlMjBmaW5sYW5kfGVufDF8fHx8MTc2ODcyNDcwMXww&ixlib=rb-4.1.0&q=80&w=1080',
          'https://images.unsplash.com/photo-1652972601829-83d833e58be1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodXNreSUyMGRvZyUyMHNsZWRkaW5nfGVufDF8fHx8MTc2ODY0ODY2MXww&ixlib=rb-4.1.0&q=80&w=1080',
          'https://images.unsplash.com/photo-1645102136899-0b6728bfe2b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHNjZW5pYyUyMHZpZXd8ZW58MXx8fHwxNzY4NzI0NzAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        ],
        subItems: [
          'Каньон Рускеала',
          'Ночь в хостеле',
          'Катание на снегоходах',
        ],
      },
      {
        day: 'День 3',
        title: 'Самостоятельное и далёкое возвращение',
        description:
          'День катания на собачьих упряжках с хаски. Мастер-класс по управлению упряжкой, прогулка по заснеженному лесу. После обеда — посещение местной сауны и купание в проруби. Вечером — традиционный карельский ужин с калитками и рыбным пирогом.',
        photos: [
          'https://images.unsplash.com/photo-1652972601829-83d833e58be1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodXNreSUyMGRvZyUyMHNsZWRkaW5nfGVufDF8fHx8MTc2ODY0ODY2MXww&ixlib=rb-4.1.0&q=80&w=1080',
          'https://images.unsplash.com/photo-1766699623017-1d591a2855af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBhY3Rpdml0aWVzJTIwc25vd21vYmlsZXxlbnwxfHx8fDE3Njg3MjQ3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
          'https://images.unsplash.com/photo-1602334389457-ec010b3087a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGZpcmVwbGFjZXxlbnwxfHx8fDE3Njg3MjQ3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        ],
        subItems: [
          'Катание с хаски',
          'Сауна и прорубь',
          'Карельская кухня',
        ],
      },
    ],
    priceIncludes: [
      'Проживание в гостиницах 3-4* (двухместные номера)',
      'Питание: завтраки, обеды в ресторанах, ужины с дегустацией национальной кухни',
      'Все трансферы по программе на комфортабельном транспорте',
      'Услуги русскоговорящего гида на протяжении всего путешествия',
      'Все входные билеты в музеи и достопримечательности по программе',
      'Катание на собачьих упряжках, снегоходах и тюбингах',
      'Мастер-класс по приготовлению карельских калиток',
      'Страховка путешественника',
    ],
    notIncluded: [
      'Авиабилеты до Хельсинки и обратно',
      'Личные расходы (сувениры, дополнительные напитки и т.д.)',
      'Дополнительные экскурсии и развлечения вне программы',
    ],
    faq: [
      {
        question: 'О питании',
        answer:
          'В стоимость тура включены завтраки в отелях, обеды в местных ресторанах и традиционные ужины с дегустацией карельской кухни. Мы учитываем все пищевые предпочтения и аллергии, о которых вы сообщите заранее.',
        images: [
          'https://images.unsplash.com/photo-1602334389457-ec010b3087a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGZpcmVwbGFjZXxlbnwxfHx8fDE3Njg3MjQ3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
          'https://images.unsplash.com/photo-1583528187857-27f818f12caf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBob3RlbHxlbnwxfHx8fDE3Njg3MjQ3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
          'https://images.unsplash.com/photo-1705087916321-d052a60ab10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBmb3Jlc3QlMjBmaW5sYW5kfGVufDF8fHx8MTc2ODcyNDcwMXww&ixlib=rb-4.1.0&q=80&w=1080',
        ],
      },
      {
        question: 'О размещении',
        answer:
          'Проживание в комфортабельных гостиницах 3-4* и уютных гостевых домах с видом на заснеженные леса. Все номера двухместные с удобствами. Возможно доплата за одноместное размещение.',
        images: [
          'https://images.unsplash.com/photo-1583528187857-27f818f12caf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBob3RlbHxlbnwxfHx8fDE3Njg3MjQ3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
          'https://images.unsplash.com/photo-1602334389457-ec010b3087a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGZpcmVwbGFjZXxlbnwxfHx8fDE3Njg3MjQ3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
          'https://images.unsplash.com/photo-1645102136899-0b6728bfe2b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHNjZW5pYyUyMHZpZXd8ZW58MXx8fHwxNzY4NzI0NzAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        ],
      },
      {
        question: 'Вам для общения',
        answer:
          'На протяжении всего путешествия с вами будет русскоговорящий гид-профессионал, который поможет с любыми вопросами. Также мы предоставим всю необходимую информацию перед поездкой.',
        images: [
          'https://images.unsplash.com/photo-1652972601829-83d833e58be1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodXNreSUyMGRvZyUyMHNsZWRkaW5nfGVufDF8fHx8MTc2ODY0ODY2MXww&ixlib=rb-4.1.0&q=80&w=1080',
          'https://images.unsplash.com/photo-1766699623017-1d591a2855af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBhY3Rpdml0aWVzJTIwc25vd21vYmlsZXxlbnwxfHx8fDE3Njg3MjQ3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
          'https://images.unsplash.com/photo-1705087916321-d052a60ab10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBmb3Jlc3QlMjBmaW5sYW5kfGVufDF8fHx8MTc2ODcyNDcwMXww&ixlib=rb-4.1.0&q=80&w=1080',
        ],
      },
    ],
    relatedTours: [
      {
        title: 'Карачаево',
        image: 'https://images.unsplash.com/photo-1645102136899-0b6728bfe2b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHNjZW5pYyUyMHZpZXd8ZW58MXx8fHwxNzY4NzI0NzAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'Весенние в Дагестане',
        image: 'https://images.unsplash.com/photo-1652972601829-83d833e58be1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodXNreSUyMGRvZyUyMHNsZWRkaW5nfGVufDF8fHx8MTc2ODY0ODY2MXww&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'Дагестан',
        image: 'https://images.unsplash.com/photo-1766699623017-1d591a2855af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBhY3Rpdml0aWVzJTIwc25vd21vYmlsZXxlbnwxfHx8fDE3Njg3MjQ3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
  },
};

export default function TourDetailPage() {
  const {id} = useParams()
  const [currentReasonIndex, setCurrentReasonIndex] = useState(0);

  const tour = id ? tourData[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Тур не найден</h1>
          <Link
            href="/"
            className="bg-[#FFD84D] text-black px-6 py-3 rounded-full font-medium hover:bg-[#FFD84D]/90 transition-colors"
          >
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }

  const nextReason = () => {
    setCurrentReasonIndex((prev) => (prev + 1) % tour.reasonsToVisit.length);
  };

  const prevReason = () => {
    setCurrentReasonIndex(
      (prev) => (prev - 1 + tour.reasonsToVisit.length) % tour.reasonsToVisit.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[#1a1a1a]">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-8 left-8 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Назад
        </button>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 px-8 py-12 max-w-7xl mx-auto">
          <motion.h1
            className="text-white text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {tour.title}
          </motion.h1>
          <motion.p
            className="text-white/90 text-lg max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {tour.description}
          </motion.p>
          <div className="flex gap-4 mt-6">
            <motion.button
              className="bg-[#FFD84D] text-black px-8 py-3 rounded-full font-medium hover:bg-[#FFD84D]/90 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              ЗАБРОНИРОВАТЬ СЕЙЧАС
            </motion.button>
            <motion.button
              className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Download className="w-5 h-5" />
              СКАЧАТЬ ПРОГРАММУ
            </motion.button>
          </div>
        </div>
      </section>

      {/* Reasons to Visit Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Ради чего стоит поехать</h2>
            <div className="flex gap-2">
              <button
                onClick={prevReason}
                className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
                ‹
              </button>
              <button
                onClick={nextReason}
                className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
                ›
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tour.reasonsToVisit.map((reason, index) => (
              <motion.div
                key={index}
                className="relative h-80 rounded-3xl overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-xl font-bold">{reason.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Route Section */}
      <section className="py-16 px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-white text-3xl lg:text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Маршрут
          </motion.h2>

          <div className="space-y-4">
            {tour.route.map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  value={`day-${index}`}
                  className="bg-white rounded-2xl overflow-hidden border-none"
                >
                  <div className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                      <span className="bg-[#FFD84D] text-black px-4 py-1 rounded-full text-sm font-medium">
                        {day.day}
                      </span>
                      <span className="font-bold text-lg">{day.title}</span>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 mb-6">{day.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      {day.photos.map((photo, photoIndex) => (
                        <div
                          key={photoIndex}
                          className="h-48 rounded-xl overflow-hidden"
                        >
                          <img
                            src={photo}
                            alt={`${day.day} фото ${photoIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <ul className="space-y-2">
                      {day.subItems.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <span className="w-1.5 h-1.5 bg-[#FFD84D] rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm text-gray-600">от</span>
                  <span className="text-5xl font-bold">{tour.price}</span>
                  <span className="text-2xl">₽</span>
                </div>
                <p className="text-gray-600">за человека при двухместном размещении</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4">Что входит в стоимость</h3>
                <ul className="space-y-3">
                  {tour.priceIncludes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right Column */}
            <div>
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4">
                  Что ещё необходимо оплатить самостоятельно
                </h3>
                <ul className="space-y-3">
                  {tour.notIncluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.button
                className="w-full bg-[#FFD84D] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FFD84D]/90 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                ЗАБРОНИРОВАТЬ
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            {tour.faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  value={`faq-${index}`}
                  className="bg-white rounded-2xl overflow-hidden border-none"
                >
                  <div className="px-6 py-4 hover:no-underline">
                    <span className="font-bold text-lg text-left">{item.question}</span>
                  </div>
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 mb-6">{item.answer}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {item.images.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          className="h-48 rounded-xl overflow-hidden"
                        >
                          <img
                            src={image}
                            alt={`${item.question} фото ${imageIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Tours Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Архивы путешествий
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {tour.relatedTours.map((relatedTour, index) => (
              <motion.div
                key={index}
                className="relative h-80 rounded-3xl overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={relatedTour.image}
                  alt={relatedTour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-xl font-bold">{relatedTour.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <button className="border-2 border-black text-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-colors">
              СМОТРЕТЬ ВСЁ В INSTAGRAM
            </button>
          </motion.div>
        </div>
      </section>
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Сомневаетесь, что подобает вам формат?
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Подпишитесь на рассылку, чтобы получать информацию о новых турах и специальных
            предложениях
          </motion.p>
          <motion.button
            className="bg-[#FFD84D] text-black px-8 py-4 rounded-full font-bold hover:bg-[#FFD84D]/90 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ПОДПИСАТЬСЯ
          </motion.button>
        </div>
      </section>
      
    <StatsSection/>

      <section className="py-16 px-6 bg-[#1a1a1a] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1705087916321-d052a60ab10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBmb3Jlc3QlMjBmaW5sYW5kfGVufDF8fHx8MTc2ODcyNDcwMXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            className="text-white text-3xl lg:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Как всё устроено
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '👥',
                title: 'Небольшие группы',
                description:
                  'Мы формируем небольшие группы до 15 человек для комфортного путешествия и возможности узнать каждого участника',
              },
              {
                icon: '🎯',
                title: 'Профессиональные гиды',
                description:
                  'С вами всегда будет опытный гид-профессионал, который знает все тонкости маршрута и поможет с любым вопросом',
              },
              {
                icon: '✨',
                title: 'Уникальные впечатления',
                description:
                  'Мы не просто показываем достопримечательности - мы создаем незабываемые эмоции и впечатления на всю жизнь',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-white text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white text-3xl lg:text-4xl font-bold">
              Впечатления участников
            </h2>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors text-white">
                ‹
              </button>
              <button className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors text-white">
                ›
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'Анна Иванова',
                text: 'Незабываемое путешествие! Организация на высшем уровне, гид очень профессиональный и внимательный. Катание на собачьих упряжках — это что-то невероятное! Обязательно поеду с Nesin Travel снова.',
                photo: 'https://images.unsplash.com/photo-1766818979586-fdde010a5525?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBncm91cCUyMGhhcHB5JTIwcGVvcGxlfGVufDF8fHx8MTc2ODcyNDg4MXww&ixlib=rb-4.1.0&q=80&w=1080',
              },
              {
                name: 'Дмитрий',
                text: 'Прекрасная программа! Каждый день был насыщен интересными активностями. Особенно понравилась сауна и купание в проруби — это надо пережить! Спасибо команде за заботу и отличное настроение.',
                photo: 'https://images.unsplash.com/photo-1705087916321-d052a60ab10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBmb3Jlc3QlMjBmaW5sYW5kfGVufDF8fHx8MTc2ODcyNDcwMXww&ixlib=rb-4.1.0&q=80&w=1080',
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD84D] to-[#FF6B6B] flex items-center justify-center text-white font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#FFD84D]">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">{review.text}</p>
                <div className="h-48 rounded-xl overflow-hidden">
                  <img
                    src={review.photo}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="mt-4 text-sm text-gray-600 hover:text-black transition-colors">
                  Читать подробнее →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}