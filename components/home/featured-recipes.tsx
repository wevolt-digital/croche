"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { recipes } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useRef, useEffect, useState } from 'react';

const FeaturedRecipes = () => {
  const featuredRecipes = recipes.filter(recipe => recipe.isPaid).slice(0, 5);

  // DUPLICANDO OS CARDS para sempre ter movimento, mesmo em telas grandes:
  const visibleItems = featuredRecipes.length >= 5
    ? featuredRecipes.concat(featuredRecipes)
    : [...featuredRecipes, ...featuredRecipes, ...featuredRecipes]; // triplica caso tenha poucos cards

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Largura total de um card + gap (ajuste conforme sua classe space-x-6)
  const cardWidth = 300 + 24; // 300px card + 24px espaço entre eles

  useEffect(() => {
    let frame: number;

    function autoScroll() {
      if (scrollRef.current && !isPaused) {
        const scroll = scrollRef.current;
        const maxScroll =
          (cardWidth * featuredRecipes.length); // volta ao início no meio do array duplicado

        const speed = 0.8;
        if (scroll.scrollLeft >= maxScroll) {
          // Scroll instantâneo de volta ao início sem "pular" visualmente
          scroll.scrollLeft = 0;
        } else {
          scroll.scrollLeft += speed;
        }
      }
      frame = requestAnimationFrame(autoScroll);
    }

    frame = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(frame);
  }, [isPaused, cardWidth, featuredRecipes.length]);

  return (
    <section id="recipes" className="section-spacing bg-cream">
      <div className="container-custom">
        <h3 className="mb-6 text-3xl md:text-5xl font-semibold text-center">
          Receitas em Crochê
        </h3>
        <p className="mb-12 text-center text-lg">
          Aprenda a criar suas próprias peças com nossas receitas detalhadas e fáceis de seguir.
        </p>

        {/* Carrossel */}
        <div className="relative overflow-hidden mt-12">
          <div
            className="flex overflow-x-auto pb-6 space-x-6 snap-x scrollbar-hide select-none"
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ scrollBehavior: "auto", cursor: "grab" }}
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
