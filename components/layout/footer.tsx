"use client";

import Link from 'next/link';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-brown text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <img
              src="/logo-pri-cream.svg"
              alt="Pri Campos Crochê"
              className="h-20 w-auto max-w-[240px] mb-4"
              style={{ display: "block" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end"
          >
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://www.instagram.com/pricampos.croche/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/80 hover:text-gold transition-colors duration-200 flex items-center"
                aria-label="Instagram"
              >
                <img
                  src="/instagram.svg"
                  alt="Instagram"
                  className="h-6 w-6"
                  style={{ display: "inline-block" }}
                />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href="https://www.youtube.com/@Pricampos.croche" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/80 hover:text-gold transition-colors duration-200 flex items-center"
                aria-label="YouTube"
              >
                <img
                  src="/youtube.svg"
                  alt="YouTube"
                  className="h-6 w-6"
                  style={{ display: "inline-block" }}
                />
                <span className="sr-only">YouTube</span>
              </a>
              <a 
                href="http://tiktok.com/@pricampos.croche1" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/80 hover:text-gold transition-colors duration-200 flex items-center"
                aria-label="TikTok"
              >
                <img
                  src="/tiktok.svg"
                  alt="TikTok"
                  className="h-6 w-6"
                  style={{ display: "inline-block" }}
                />
                <span className="sr-only">TikTok</span>
              </a>
            </div>
            <a 
              href="mailto:pricampos.croche@gmail.com"
              className="text-cream/80 hover:text-gold transition-colors duration-200 flex items-center"
            >
              <Mail size={16} className="mr-2" />
              pricampos.croche@gmail.com
            </a>
          </motion.div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream/20 text-center">
          <p className="text-cream/60 text-sm">
            © {new Date().getFullYear()} Pri Campos Crochê. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
