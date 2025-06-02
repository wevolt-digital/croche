"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-cream/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
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
              <h1 className="text-2xl md:text-3xl font-serif font-medium text-brown">
                Pri Campos <span className="text-gold">Crochê</span>
              </h1>
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
              <a className="text-brown hover:text-gold transition-colors duration-200 font-medium">Início</a>
            </Link>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-brown hover:text-gold transition-colors duration-200 font-medium"
            >
              Sobre
            </button>
            <Link href="/produtos" legacyBehavior>
              <a className="text-brown hover:text-gold transition-colors duration-200 font-medium">Produtos</a>
            </Link>
            <Link href="/receitas" legacyBehavior>
              <a className="text-brown hover:text-gold transition-colors duration-200 font-medium">Receitas</a>
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-20 text-brown p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <motion.div
          className={cn(
            'fixed inset-0 bg-cream/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center space-y-8 md:hidden',
            mobileMenuOpen ? 'block' : 'hidden'
          )}
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : '100%' }}
          transition={{ duration: 0.3 }}
        >
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
        </motion.div>
      </div>
    </header>
  );
};

export default Header;