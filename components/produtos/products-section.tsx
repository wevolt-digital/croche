"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { products } from '@/lib/data';
import SectionTitle from '@/components/ui/section-title';

// Group products by category
const groupedProducts = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category].push(product);
  return acc;
}, {} as Record<string, typeof products>);

const ProductsSection = () => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const categories = Object.keys(groupedProducts);

  return (
    <section id="products-section" className="section-spacing">
      <div className="container-custom">
        {categories.map((category, categoryIndex) => (
          <div key={category} className="mb-16 last:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="heading-md text-brown border-b-2 border-gold/40 pb-2 mb-8">
                {category}
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {groupedProducts[category].map((product, productIndex) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (productIndex % 4) * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-[240px] object-cover transition-transform duration-500 ease-in-out"
                      style={{
                        transform: hoveredProduct === product.id ? 'scale(1.1)' : 'scale(1)'
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-medium text-brown mb-2">{product.name}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Espaço maior antes do bloco instagram */}
        <div className="mt-24" />

        {/* Texto antes do grid Insta */}
        <div className="max-w-2xl mx-auto text-center mb-8">
          <p className="text-xl text-brown font-semibold">
            Temos diversos outros crochês disponíveis para encomenda. Entre em nosso Instagram para ver!
          </p>
        </div>

        {/* Grid Instagram 4x2 */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1465101178521-c1a9136a854b?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1526178613658-3c7029a7e8a8?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=400&q=80",
            ].map((img, i) => (
              <a
                href="https://www.instagram.com/pricampos.croche/"
                key={i}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-lg shadow hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={img}
                  alt={`Inspiração em Crochê ${i + 1}`}
                  className="w-full h-48 object-cover group-hover:opacity-80 transition"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-sage/10 rounded-lg p-8"
        >
          <a 
            href="https://www.instagram.com/pricampos.croche/" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center"
          >
            Ver Instagram
            <Instagram className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
