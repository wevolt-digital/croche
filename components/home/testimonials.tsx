"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="section-spacing bg-sage/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-3xl md:text-5xl font-semibold text-center lg:text-left">
              O que dizem nossos clientes
            </h3>
            <p className="mb-12 text-center text-lg lg:text-left">
              Descubra por que nossos clientes amam nossas criações em crochê e compartilham suas experiências.
            </p>
            <p className="text-muted-foreground mb-6">
              Cada peça é criada com cuidado e atenção aos detalhes, pensando em proporcionar alegria
              e conforto para quem a recebe.
            </p>
            <Link href="#contact" legacyBehavior>
              <a className="btn-primary inline-flex items-center">
                Faça seu pedido
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Link>
          </motion.div>

          {/* Right content - Testimonial cards */}
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`bg-white p-6 rounded-lg shadow-md transition-all duration-500 relative ${
                  index === activeIndex 
                    ? 'z-20 opacity-100 scale-100' 
                    : 'absolute top-0 opacity-60 scale-90 cursor-pointer'
                }`}
                style={{
                  left: index === activeIndex ? '0' : `${10 + (index * 5)}%`,
                  right: index === activeIndex ? '0' : `${10 + (index * 5)}%`,
                }}
                onClick={() => setActiveIndex(index)}
                whileHover={index !== activeIndex ? { scale: 0.95 } : {}}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: index === activeIndex ? 1 : 0.6, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                
                <div>
                  <p className="font-semibold text-rust">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">Cliente Pri Campos Crochê</p>
                </div>
              </motion.div>
            ))}
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-gold' : 'bg-gray-300'
                  }`}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
