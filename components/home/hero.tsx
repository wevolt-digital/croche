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
            <h1 className="heading-xl text-brown mb-4">
              Crochê feito com <span className="text-gold">amor</span> e dedicação
            </h1>
            <p className="text-lg mb-8 text-muted-foreground max-w-lg">
              Peças artesanais exclusivas que trazem conforto, 
              beleza e carinho para sua casa e para presentear 
              pessoas especiais.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/produtos" legacyBehavior>
                <a className="btn-primary flex items-center">
                  Ver produtos
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </Link>
              <button 
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-outline flex items-center"
              >
                Fale conosco
              </button>
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
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/6957832/pexels-photo-6957832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Trabalho em crochê" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="h-full col-span-1 rounded-lg overflow-hidden shadow-lg mb-4"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/6957781/pexels-photo-6957781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Trabalho em crochê" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="h-full col-span-1 rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/8490082/pexels-photo-8490082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
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