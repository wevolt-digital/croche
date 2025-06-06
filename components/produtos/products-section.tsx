"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/lib/data";
import SectionTitle from "@/components/ui/section-title";

// Agrupamento dos produtos por categoria
const groupedProducts = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category].push(product);
  return acc;
}, {} as Record<string, typeof products>);

const ProductsSection = () => {
  const [carouselIndexes, setCarouselIndexes] = useState<{ [id: string]: number }>({});
  const [directions, setDirections] = useState<{ [id: string]: number }>({}); // -1 para esquerda, 1 para direita

  const handlePrev = (productId: string, imagesLength: number) => {
    setCarouselDirections(productId, -1);
    setCarouselIndexes((prev) => ({
      ...prev,
      [productId]:
        prev[productId] === undefined
          ? imagesLength - 1
          : (prev[productId] - 1 + imagesLength) % imagesLength,
    }));
  };

  const handleNext = (productId: string, imagesLength: number) => {
    setCarouselDirections(productId, 1);
    setCarouselIndexes((prev) => ({
      ...prev,
      [productId]:
        prev[productId] === undefined
          ? 1 % imagesLength
          : (prev[productId] + 1) % imagesLength,
    }));
  };

  // Helper para direção do slide animado
  const setCarouselDirections = (productId: string, direction: number) => {
    setDirections((prev) => ({
      ...prev,
      [productId]: direction,
    }));
  };

  const categories = Object.keys(groupedProducts);

  // Slide variants com ambas imagens renderizadas
  function slideVariants(direction: number) {
    return {
      initial: { x: direction > 0 ? 300 : -300, opacity: 1, zIndex: 1 },
      animate: { x: 0, opacity: 1, zIndex: 2 },
      exit: { x: direction > 0 ? -300 : 300, opacity: 1, zIndex: 1 },
    };
  }

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
              <h3 className="text-3xl md:text-4xl font-semibold text-brown border-b-2 border-gold/40 pb-2 mb-8">
                {category}
              </h3>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {groupedProducts[category].map((product, productIndex) => {
                const images = product.images ?? [product.image];
                const currentIdx = carouselIndexes[product.id] ?? 0;
                const direction = directions[product.id] ?? 1; // Direita padrão

                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: (productIndex % 4) * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
                  >
                    {/* IMAGEM COM SLIDE SOBREPOSTO */}
                    <div className="relative overflow-hidden group h-[240px]">
                      <AnimatePresence custom={direction} initial={false} mode="sync">
                        <motion.img
                          key={images[currentIdx]}
                          src={images[currentIdx]}
                          alt={product.name}
                          className="w-full h-full object-cover absolute left-0 top-0"
                          variants={slideVariants(direction)}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          transition={{
                            x: { type: "tween", ease: "easeInOut", duration: 0.5 },
                          }}
                          style={{ position: "absolute" }}
                        />
                      </AnimatePresence>
                      {images.length > 1 && (
                        <>
                          {/* Botão à esquerda */}
                          <button
                            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white/40 hover:bg-gold/70 rounded-r-full transition-all flex items-center justify-center opacity-80 hover:opacity-100 z-10"
                            style={{ height: "44px" }}
                            onClick={() => handlePrev(product.id, images.length)}
                            tabIndex={0}
                          >
                            <ChevronLeft className="h-6 w-6 text-brown drop-shadow" />
                          </button>
                          {/* Botão à direita */}
                          <button
                            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white/40 hover:bg-gold/70 rounded-l-full transition-all flex items-center justify-center opacity-80 hover:opacity-100 z-10"
                            style={{ height: "44px" }}
                            onClick={() => handleNext(product.id, images.length)}
                            tabIndex={0}
                          >
                            <ChevronRight className="h-6 w-6 text-brown drop-shadow" />
                          </button>
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                            {images.map((_, i) => (
                              <span
                                key={i}
                                className={`inline-block w-2 h-2 rounded-full ${
                                  i === currentIdx ? "bg-gold" : "bg-brown/30"
                                }`}
                              ></span>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                    <div className="p-4">
                      <h4 className="text-2xl font-medium text-brown mb-2">
                        {product.name}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-4">
                        {product.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="mt-24" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-sage/10 rounded-lg py-12 px-6 md:px-12 mt-0 text-center"
        >
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-xl text-brown font-semibold">
              Temos diversos outros crochês disponíveis para encomenda. Entre em nosso Instagram para ver!
            </p>
          </div>

          <div className="mb-12">
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
