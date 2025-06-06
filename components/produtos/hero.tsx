"use client";

import { motion } from 'framer-motion';

const ProductsHero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brown/20"></div>
        <img 
          src="/banner-produtos.webp" 
          alt="Produtos de crochê" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-white mb-4"
          >
            Nossos Produtos
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90 text-lg mb-8"
          >
            Cada peça é feita à mão com materiais selecionados e muito carinho, 
            garantindo produtos únicos e de alta qualidade. Faça sua encomenda!
          </motion.p>
          
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;