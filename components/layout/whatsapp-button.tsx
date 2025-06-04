"use client";

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const whatsappNumber = "5519982485676";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre seus produtos de crochê.";

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      className="whatsapp-btn"
      aria-label="Contato via WhatsApp"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        rotate: [0, -10, 10, -10, 10, 0], // vibração
      }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{ position: 'fixed', right: 24, bottom: 24, zIndex: 50 }} // ajuste conforme necessário ou remova se já está no CSS
    >
      <MessageCircle size={28} />
    </motion.button>
  );
};

export default WhatsAppButton;
