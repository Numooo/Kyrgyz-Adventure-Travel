export function Footer() {
    return (
        <footer className="bg-black py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <div className="text-white text-2xl font-bold">Nesin</div>
                        <div className="text-white/60 text-sm">Travel</div>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-8 text-white/60 text-sm">
                        <a href="#" className="hover:text-white transition-colors">Программы</a>
                        <a href="#" className="hover:text-white transition-colors">О нас</a>
                        <a href="#" className="hover:text-white transition-colors">Контакты</a>
                        <a href="#" className="hover:text-white transition-colors">Блог</a>
                        <a href="#" className="hover:text-white transition-colors">Отзывы</a>
                    </nav>

                    <button className="bg-[#FFD84D] hover:bg-[#FFCC00] text-black px-8 py-3 rounded-full font-medium transition-colors">
                        Оставить заявку
                    </button>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-4 text-white/40 text-sm">
                    <p>© 2026 Nesin Travel. Все права защищены.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
                        <a href="#" className="hover:text-white transition-colors">Условия использования</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
