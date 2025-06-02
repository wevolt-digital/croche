"use client";

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  // Replace with your actual WhatsApp number
  const whatsappNumber = "5511999999999";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre seus produtos de crochê.";
  
  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      className="whatsapp-btn animate-vibrate"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.button>
  );
};

export default WhatsAppButton;