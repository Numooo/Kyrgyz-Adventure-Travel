"use client"
import { Menu, MoveRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className="absolute top-10 left-0 right-0 z-50">
                <div className="max-w-[1400px] mx-auto flex items-center justify-between bg-white/20 backdrop-blur-md py-4 px-20 rounded-full">
                    <div className="flex items-center gap-2">
                        <img src="/logo.svg" className={"w-20"} alt=""/>
                    </div>

                    <nav className="hidden lg:flex items-center gap-8 text-white/80 text-sm">
                        <a href="#" className="hover:text-white transition-colors">О проекте</a>
                        <a href="#" className="hover:text-white transition-colors">Путешествия</a>
                        <a href="#" className="hover:text-white transition-colors">Календарь</a>
                        <a href="#" className="hover:text-white transition-colors">Услуги</a>
                        <a href="#" className="hover:text-white transition-colors">Индивидуальные программы</a>
                        <a href="#" className="hover:text-white transition-colors">Сотрудничество</a>
                    </nav>

                    <button className="lg:hidden text-white">
                        <Menu size={24} />
                    </button>

                    <div className="hidden lg:flex items-center gap-4">
                        <button className="text-white/80 hover:text-white flex font-bold items-center gap-2 transition-colors">
                            СВЯЗАТЬСЯ <MoveRight className="w-4"/>
                        </button>
                    </div>
                </div>
            </header>

            {/* Fixed header that appears on scroll */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white shadow-lg transition-transform duration-300 ${
                    isScrolled ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src="/logo.svg" className={"w-20 grayscale brightness-0"} alt=""/>
                    </div>

                    <nav className="hidden lg:flex items-center gap-8 text-black/70 text-sm">
                        <a href="#" className="hover:text-black transition-colors">О проекте</a>
                        <a href="#" className="hover:text-black transition-colors">Путешествия</a>
                        <a href="#" className="hover:text-black transition-colors">Календарь</a>
                        <a href="#" className="hover:text-black transition-colors">Услуги</a>
                        <a href="#" className="hover:text-black transition-colors">Индивидуальные программы</a>
                        <a href="#" className="hover:text-black transition-colors">Сотрудничество</a>
                    </nav>

                    <button className="lg:hidden text-black">
                        <Menu size={24} />
                    </button>

                    <div className="hidden lg:flex items-center gap-4">
                        <button className="text-black/80 hover:text-black flex font-bold items-center gap-2 transition-colors">
                            СВЯЗАТЬСЯ <MoveRight className="w-4"/>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}