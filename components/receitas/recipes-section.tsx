"use client";

import { motion } from 'framer-motion';
import { ExternalLink, ShoppingCart } from 'lucide-react';
import SectionTitle from '@/components/ui/section-title';
import { recipes } from '@/lib/data';

const RecipesSection = () => {
  // Split recipes into paid and free
  const paidRecipes = recipes.filter(recipe => recipe.isPaid);
  const freeRecipes = recipes.filter(recipe => !recipe.isPaid);

  return (
    <section id="recipes-section" className="section-spacing">
      <div className="container-custom">
        {/* Exclusive Recipes */}
        <div className="mb-20">
          {/* Se o seu SectionTitle aceitar prop de tamanho, envie: className="text-4xl md:text-5xl font-semibold" */}
          <SectionTitle 
            title="Receitas Exclusivas" 
            subtitle="Adquira receitas detalhadas e exclusivas para criar peças incríveis."
            centered
            // className="text-4xl md:text-5xl font-semibold" // use se o componente aceitar essa prop
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {paidRecipes.slice(0, 3).map((recipe, index) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
              >
                <div className="relative aspect-w-1 aspect-h-1">
                  <img 
                    src={recipe.image} 
                    alt={recipe.name} 
                    className="w-full h-[220px] object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-2xl font-medium text-brown mb-2">{recipe.name}</h4>
                  <p className="text-muted-foreground mb-4">{recipe.description}</p>
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
                      className="inline-flex items-center bg-brown text-white hover:bg-gold/90 px-4 py-2 rounded-md transition-colors duration-200"
                    >
                      Comprar
                      <ShoppingCart className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Free Recipes */}
        <div>
          <SectionTitle 
            title="Receitas Gratuitas" 
            subtitle="Aprenda com nossas receitas gratuitas e comece sua jornada no crochê."
            centered
            // className="text-4xl md:text-5xl font-semibold" // use se o componente aceitar essa prop
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {freeRecipes.slice(0, 3).map((recipe, index) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
              >
                <div className="relative aspect-w-1 aspect-h-1">
                  <img 
                    src={recipe.image} 
                    alt={recipe.name} 
                    className="w-full h-[220px] object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-2xl font-medium text-brown mb-2">{recipe.name}</h4>
                  <p className="text-muted-foreground mb-4">{recipe.description}</p>
                  <div className="flex justify-end">
                    <a 
                      href={recipe.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-sage text-white hover:bg-sage/90 px-4 py-2 rounded-md transition-colors duration-200"
                    >
                      Acessar
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipesSection;
