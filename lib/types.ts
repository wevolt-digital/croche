export interface Product {
  id: string;
  name: string;
  description: string;
  images?: string[]; // Novo campo, opcional
  image?: string;    // Agora opcional
  category: 'Bebê' | 'Amigurumi' | 'Decoração' | 'Presentes' | 'Datas comemorativas' | 'Personalizados';
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: number;
  isPaid: boolean;
  link: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  image?: string;
}
