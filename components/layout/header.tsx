"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const path = usePathname();

  const inHeroMode =
    path.startsWith('/produtos') || path.startsWith('/receitas');

  useEffect(() => {
    if (!inHeroMode) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [inHeroMode]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const logoFilter =
    inHeroMode && !isScrolled
      ? 'brightness(0) invert(1)'
      : 'none';

  const navClass =
    inHeroMode && !isScrolled
      ? 'text-[#F4F1E8] hover:text-gold transition-colors duration-200 font-medium'
      : 'text-brown hover:text-gold transition-colors duration-200 font-medium';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || !inHeroMode
          ? 'bg-cream/95 backdrop-blur-sm shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link href="/" legacyBehavior>
          <a className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/logo-pri.svg"
                alt="Pri Campos Crochê"
                className="h-24 w-auto max-w-[240px]"
                style={{ display: 'block', filter: logoFilter }}
              />
            </motion.div>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center space-x-8"
          >
            <Link href="/" legacyBehavior>
              <a className={navClass}>Início</a>
            </Link>
            <button 
              onClick={() => scrollToSection('about')}
              className={navClass}
            >
              Sobre
            </button>
            <Link href="/produtos" legacyBehavior>
              <a className={navClass}>Produtos</a>
            </Link>
            <Link href="/receitas" legacyBehavior>
              <a className={navClass}>Receitas</a>
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden z-20 p-2 ${
            inHeroMode && !isScrolled ? 'text-[#F4F1E8]' : 'text-brown'
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <motion.div
          className={cn(
            'fixed inset-0 bg-cream/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center md:hidden',
            mobileMenuOpen ? 'block' : 'hidden'
          )}
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : '100%' }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center space-y-8">
            <Link href="/" legacyBehavior>
              <a 
                className="text-2xl text-brown hover:text-gold transition-colors duration-200 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Início
              </a>
            </Link>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-2xl text-brown hover:text-gold transition-colors duration-200 font-medium"
            >
              Sobre
            </button>
            <Link href="/produtos" legacyBehavior>
              <a 
                className="text-2xl text-brown hover:text-gold transition-colors duration-200 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Produtos
              </a>
            </Link>
            <Link href="/receitas" legacyBehavior>
              <a 
                className="text-2xl text-brown hover:text-gold transition-colors duration-200 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Receitas
              </a>
            </Link>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
