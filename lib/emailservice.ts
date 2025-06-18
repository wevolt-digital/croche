// lib/emailService.ts
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_ngegjnp';
const TEMPLATE_ID = 'template_8vwpnrg';
const PUBLIC_KEY = 'MePU-igNvkHVxcbFP';

export const sendEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  const templateParams = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    message: formData.message,
  };

  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    return response;
  } catch (error) {
    console.error('Erro ao enviar o email:', error);
    throw error;
  }
};
