"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { products } from '@/lib/data';

const FeaturedProducts = () => {
  // Pega até 6 produtos em destaque
  const featuredProducts = products.slice(0, 6);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="products" className="section-spacing bg-sage/5">
      <div className="container-custom">
        <h3 className="mb-6 text-3xl md:text-5xl font-semibold text-center">
          Nossos Produtos
        </h3>
        <p className="mb-12 text-center text-lg">
          Conheça nossas criações únicas e exclusivas, feitas com carinho e atenção aos detalhes.
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg shadow-md"
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="aspect-w-1 aspect-h-1 w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[300px] object-cover transition-transform duration-500 ease-in-out"
                  style={{
                    transform: hoveredCard === product.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
              </div>

              {/* Overlay que aparece no hover */}
              <div
                className="absolute inset-0 bg-brown/70 flex flex-col items-center justify-center p-4 transition-opacity duration-300"
                style={{
                  opacity: hoveredCard === product.id ? 1 : 0,
                  pointerEvents: hoveredCard === product.id ? 'auto' : 'none'
                }}
              >
                <h4 className="text-2xl font-serif font-medium text-white mb-2">{product.name}</h4>
                <p className="text-white/80 text-center mb-4 line-clamp-2">{product.description}</p>
                <Link href="/produtos" legacyBehavior>
                  <a className="bg-cream text-brown hover:bg-gold hover:text-white px-4 py-2 rounded-md transition-colors duration-200">
                    Ver detalhes
                  </a>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/produtos" legacyBehavior>
              <a
                className="inline-flex items-center rounded-md px-5 py-2 text-white font-semibold transition-colors duration-200 bg-[#79805F] hover:bg-[#919972] focus:bg-[#919972]"
              >
                Ver todos os produtos
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
