"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import SectionTitle from '@/components/ui/section-title';
import { recipes } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useRef, useEffect, useState } from 'react';

const FeaturedRecipes = () => {
  // Get only paid recipes for the carousel
  const featuredRecipes = recipes.filter(recipe => recipe.isPaid).slice(0, 5);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll logic for carousel (contínuo suave + pausa no hover)
  useEffect(() => {
    let animationFrame: number;

    function smoothScroll() {
      if (carouselRef.current && !isPaused) {
        const scroll = carouselRef.current;
        const speed = 0.5; // Ajuste para mais rápido ou devagar
        let next = scroll.scrollLeft + speed;

        // Quando chegar ao fim, volta pro início
        if (next + scroll.offsetWidth >= scroll.scrollWidth) {
          next = 0;
        }
        scroll.scrollLeft = next;
      }
      animationFrame = requestAnimationFrame(smoothScroll);
    }

    animationFrame = requestAnimationFrame(smoothScroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <section id="recipes" className="section-spacing bg-cream">
      <div className="container-custom">
        <h3 className="mb-6 text-3xl md:text-5xl font-semibold text-center">
          Receitas em Crochê
        </h3>
        <p className="mb-12 text-center text-lg">
          Aprenda a criar suas próprias peças com nossas receitas detalhadas e fáceis de seguir.
        </p>

        {/* Recipe Carousel */}
        <div
          className="relative overflow-hidden mt-12"
          ref={carouselRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex overflow-x-auto pb-6 space-x-6 snap-x scrollbar-hide">
            {featuredRecipes.map((recipe, index) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "flex-shrink-0 w-[280px] snap-start",
                  "md:w-[300px]"
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
