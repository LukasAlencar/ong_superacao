import { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const yOffset = -50; 
            const y =
                element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { label: 'Início', sectionId: 'hero' },
        { label: 'Quem Somos', sectionId: 'about' },
        { label: 'Histórias', sectionId: 'stories' },
        { label: 'O Que Fazemos', sectionId: 'what-we-do' },
        { label: 'Contato', sectionId: 'contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white shadow-lg py-3'
                    : 'bg-white/95 backdrop-blur-sm py-4'
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
                        <img
                            src="/logo.png"
                            alt="ONG Superação"
                            className="h-12 w-12 object-contain"
                        />
                        <span className="font-bold text-xl text-gray-800">ONG Superação</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.sectionId}
                                onClick={() => scrollToSection(link.sectionId)}
                                className="text-gray-700 cursor-pointer hover:text-purple-600 font-medium transition-colors"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Social Links & CTA */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <a
                            href="https://wa.me/5521988172366"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-green-600 transition-colors"
                            aria-label="WhatsApp"
                            title='WhatsApp'
                        >
                            <MessageCircle className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.instagram.com/institutohumanosuperacao/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-pink-600 transition-colors"
                            aria-label="Instagram"
                            title="Instagram"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.facebook.com/institutohumanosuperacao"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                            aria-label="Facebook"
                            title='Facebook'
                        >
                            <Facebook className="w-5 h-5" />
                        </a>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="bg-gradient-to-r cursor-pointer from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all shadow-md hover:shadow-lg"
                        >
                            💙 Doar Agora
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-gray-700 hover:text-purple-600 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 space-y-3">
                        {navLinks.map((link) => (
                            <button
                                key={link.sectionId}
                                onClick={() => scrollToSection(link.sectionId)}
                                className="block w-full text-left text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors"
                            >
                                {link.label}
                            </button>
                        ))}
                        <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                            <a
                                href="https://wa.me/5521988172366"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-green-600 transition-colors"
                                aria-label="WhatsApp"
                            >
                                <MessageCircle className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.instagram.com/institutohumanosuperacao/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-pink-600 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.facebook.com/institutohumanosuperacao"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-6 h-6" />
                            </a>
                        </div>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all shadow-md"
                        >
                            💙 Doar Agora
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
