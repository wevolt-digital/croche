"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_ngegjnp';
const TEMPLATE_ID = 'template_8vwpnrg';
const PUBLIC_KEY = 'MePU-igNvkHVxcbFP';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      alert('Ocorreu um erro ao enviar sua mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-spacing bg-cream">
      <div className="container-custom max-w-5xl">
        <h3 className="mb-6 text-3xl md:text-5xl font-semibold text-center">
          Entre em contato
        </h3>
        <p className="mb-12 text-center text-lg">
          Tem alguma dúvida ou deseja fazer uma encomenda? Preencha o formulário abaixo e entraremos em contato em breve.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg p-8 mt-8"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <h4 className="text-xl font-medium text-brown mb-2">Mensagem enviada!</h4>
              <p className="text-muted-foreground">
                Obrigado pelo seu contato. Responderemos o mais breve possível.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-muted-foreground">
                  Telefone/WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-gold resize-none"
                  placeholder="Escreva sua mensagem aqui..."
                />
              </div>

              <div className="text-center mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center rounded-md px-5 py-2 text-white font-semibold transition-colors duration-200 bg-[#79805F] hover:bg-[#919972] focus:bg-[#919972]"
                >
                  {isSubmitting ? 'Enviando...' : (
                    <>
                      Enviar mensagem
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
