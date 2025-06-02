"use client";

import Link from 'next/link';
import { Instagram, Youtube, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-brown text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h2 className="text-2xl font-serif font-medium text-cream mb-4">
              Pri Campos <span className="text-gold">Crochê</span>
            </h2>
            <p className="text-cream/80 text-center md:text-left mb-4">
              Criações artesanais em crochê feitas com amor e dedicação.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h3 className="text-xl font-serif font-medium text-cream mb-4">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" legacyBehavior>
                <a className="text-cream/80 hover:text-gold transition-colors duration-200">
                  Início
                </a>
              </Link>
              <Link href="/#about" legacyBehavior>
                <a className="text-cream/80 hover:text-gold transition-colors duration-200">
                  Sobre
                </a>
              </Link>
              <Link href="/produtos" legacyBehavior>
                <a className="text-cream/80 hover:text-gold transition-colors duration-200">
                  Produtos
                </a>
              </Link>
              <Link href="/receitas" legacyBehavior>
                <a className="text-cream/80 hover:text-gold transition-colors duration-200">
                  Receitas
                </a>
              </Link>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end"
          >
            <h3 className="text-xl font-serif font-medium text-cream mb-4">Contato</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://www.instagram.com/pricampos.croche/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/80 hover:text-gold transition-colors duration-200"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href="https://www.youtube.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/80 hover:text-gold transition-colors duration-200"
              >
                <Youtube size={24} />
                <span className="sr-only">YouTube</span>
              </a>
              <a 
                href="https://www.tiktok.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/80 hover:text-gold transition-colors duration-200"
              >
                <ExternalLink size={24} />
                <span className="sr-only">TikTok</span>
              </a>
            </div>
            <a 
              href="mailto:contato@pricamposcroche.com"
              className="text-cream/80 hover:text-gold transition-colors duration-200 flex items-center"
            >
              <Mail size={16} className="mr-2" />
              contato@pricamposcroche.com
            </a>
          </motion.div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream/20 text-center">
          <p className="text-cream/60 text-sm">
            &copy; {new Date().getFullYear()} Pri Campos Crochê. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;