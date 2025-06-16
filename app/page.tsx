import type { Metadata } from 'next';

import Hero from '@/components/home/hero';
import About from '@/components/home/about';
import FeaturedRecipes from '@/components/home/featured-recipes';
import FeaturedProducts from '@/components/home/featured-products';
import Testimonials from '@/components/home/testimonials';
import ContactForm from '@/components/home/contact-form';

export const metadata: Metadata = {
  title: 'Pri Campos Crochê | Produtos Artesanais e Receitas Exclusivas',
  description: 'Conheça os produtos de crochê feitos à mão por Pri Campos e acesse receitas exclusivas para criar suas próprias peças. Encomende com amor e criatividade!',
  keywords: ['crochê artesanal', 'produtos de crochê', 'receitas de crochê', 'amigurumi', 'amigurumi personalizado', 'receitas de amigurumi'],

  openGraph: {
    title: 'Pri Campos Crochê | Produtos Artesanais e Receitas Exclusivas',
    description: 'Peças de crochê feitas com carinho por Pri Campos e receitas para inspirar sua criação.',
    url: 'https://croche-alpha.vercel.app/',
    siteName: 'Pri Campos Crochê',
    images: [
      {
        url: '/thumb-home.webp',
        width: 1200,
        height: 630,
        alt: 'Pri Campos Crochê - Peças artesanais',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

  alternates: {
    canonical: 'https://croche-alpha.vercel.app/',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedRecipes />
      <FeaturedProducts />
      <Testimonials />
      <ContactForm />
    </>
  );
}
