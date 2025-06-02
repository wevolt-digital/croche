"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-spacing bg-sage/10 py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-lg overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.pexels.com/photos/6957816/pexels-photo-6957816.jpeg" 
              alt="Pri Campos trabalhando com crochê" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown/40 to-transparent"></div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-md mb-6">Sobre a Pri Campos Crochê</h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Olá! Sou Pri Campos, artesã e apaixonada por crochê há mais de 10 anos. 
                O que começou como um hobby se transformou em uma marca dedicada a criar 
                peças únicas e cheias de personalidade.
              </p>
              
              <p>
                Cada trabalho que faço carrega um pouco da minha história e dedicação. 
                Utilizo materiais de qualidade e técnicas aprimoradas ao longo dos anos 
                para entregar produtos que combinam beleza, durabilidade e significado.
              </p>
              
              <p>
                Além de criar peças sob encomenda, compartilho meu conhecimento através 
                de receitas detalhadas para quem também deseja aprender a arte do crochê.
              </p>
            </div>
            
            <Link href="#contact" legacyBehavior>
              <a className="btn-secondary mt-8 inline-flex items-center">
                Entre em contato
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;