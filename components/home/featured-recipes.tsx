"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { recipes } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useRef, useEffect, useState } from 'react';

const FeaturedRecipes = () => {
  const featuredRecipes = recipes.filter(recipe => recipe.isPaid).slice(0, 5);

  // Marquee effect: duplicar os cards para não dar "vazio"
  const visibleItems = [...featuredRecipes, ...featuredRecipes];

  const innerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [offset, setOffset] = useState(0);

  // Card width + gap
  const cardWidth = 300 + 24; // ajuste caso mude paddings/gaps

  useEffect(() => {
    if (!innerRef.current) return;
    let animation: number;

    function animate() {
      if (!isPaused) {
        setOffset((prev) => {
          // Rebobina quando chegou na metade (evita pulo/lag)
          if (prev >= cardWidth * featuredRecipes.length) {
            return 0;
          }
          return prev + 0.8; // velocidade do movimento
        });
      }
      animation = requestAnimationFrame(animate);
    }
    animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
    // eslint-disable-next-line
  }, [isPaused, featuredRecipes.length, cardWidth]);

  return (
    <section id="recipes" className="section-spacing bg-cream">
      <div className="container-custom">
        <h3 className="mb-6 text-3xl md:text-5xl font-semibold text-center">
          Receitas em Crochê
        </h3>
        <p className="mb-12 text-center text-lg">
          Aprenda a criar suas próprias peças com nossas receitas detalhadas e fáceis de seguir.
        </p>

        {/* Carrossel tipo Marquee */}
        <div className="relative overflow-hidden mt-12" style={{ height: 350 }}>
          <div
            ref={innerRef}
            className="flex pb-6 space-x-6 absolute left-0 top-0"
            style={{
              willChange: "transform",
              transform: `translateX(-${offset}px)`,
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {visibleItems.map((recipe, index) => (
              <motion.div
                key={recipe.id + "_carousel_" + index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                viewport={{ once: true }}
                className={cn(
                  "flex-shrink-0 w-[280px] md:w-[300px] snap-start"
                )}
                style={{ pointerEvents: isPaused ? "auto" : "auto" }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full card-hover">
                  <div className="aspect-w-1 aspect-h-1 w-full">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-serif font-medium text-brown mb-2">{recipe.name}</h4>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{recipe.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gold font-medium">
                        {recipe.price?.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                        })}
                      </span>
                      <a
                        href={recipe.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brown hover:text-gold transition-colors duration-200"
                      >
                        Comprar
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/receitas" legacyBehavior>
              <a className="btn-outline inline-flex items-center">
                Ver todas as receitas
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;
