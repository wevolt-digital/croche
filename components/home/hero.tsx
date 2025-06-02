"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20" id="home">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-brown mb-4 text-5xl md:text-7xl font-bold">
  Receitas e peças de crochê <span className="text-gold">exclusivas</span>
</h1>

            <p className="text-lg mb-8 text-muted-foreground max-w-lg">
              Produtos personalizados e receitas únicas para você ou para para encantar a sua casa ou presentear quem você ama.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact" legacyBehavior>
  <a
    className="flex items-center px-6 py-3 font-semibold rounded transition-colors"
    style={{ backgroundColor: "#79805F", color: "#fff" }}
  >
    Fale comigo
    <ChevronRight className="ml-1 h-4 w-4" />
  </a>
</Link>
            </div>
          </motion.div>

          {/* Right content - Image mosaic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative grid grid-cols-2 gap-4 h-[400px] md:h-[500px]"
          >
            <motion.div 
              className="h-full col-span-1 row-span-2 rounded-lg overflow-hidden shadow-lg"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            >
              <img 
                src="https://images.pexels.com/photos/6957832/pexels-photo-6957832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Trabalho em crochê" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="h-full col-span-1 rounded-lg overflow-hidden shadow-lg mb-4"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            >
              <img 
                src="https://images.pexels.com/photos/6957832/pexels-photo-6957832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Trabalho em crochê" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="h-full col-span-1 rounded-lg overflow-hidden shadow-lg"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 2 }}
            >
              <img 
                src="https://images.pexels.com/photos/6957832/pexels-photo-6957832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Trabalho em crochê" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
