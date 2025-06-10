"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

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
              src="/pri.webp" 
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
            <h3 className="mb-6 text-3xl md:text-5xl font-semibold">Quem sou eu?</h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Meu nome é Priscila, mas pode me chamar de Pri. Sou
formada em Fotografia e Design Gráfico. Desde
pequena, sempre fui apaixonada por trabalhos manuais.
Ainda criança, já vendia tapetes de crochê na escola –
acredite se quiser!
              </p>

              <p>
Em 2019, decidi transformar essa paixão em um
empreendimento. Desde então, dedico meus dias a criar
peças de crochê que encantam e inspiram.
              </p>
            </div>
            
<Link href="#contact" legacyBehavior>
  <a
    className="mt-8 inline-flex items-center rounded-md px-5 py-2 text-white font-semibold transition-colors duration-200 bg-[#79805F] hover:bg-[#919972] focus:bg-[#919972]"
  >
    Entre em contato
    <ChevronRight className="ml-1 h-4 w-4" />
  </a>
</Link>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;