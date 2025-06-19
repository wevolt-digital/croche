import ProductsHero from '@/components/produtos/hero';
import ProductsSection from '@/components/produtos/products-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Produtos | Pri Campos Crochê',
  description: 'Conheça nossos produtos de crochê artesanais, feitos com amor e carinho para você e sua família.',
  metadataBase: new URL('https://pricamposcroche.com.br'),
  alternates: {
    canonical: '/produtos',
  },
  openGraph: {
    title: 'Produtos | Pri Campos Crochê',
    description: 'Conheça nossos produtos de crochê artesanais, feitos com amor e carinho para você e sua família.',
    url: 'https://pricamposcroche.com.br/produtos',
    siteName: 'Pri Campos Crochê',
    images: [
      {
        url: '/produtos.webp',
        width: 1200,
        height: 630,
        alt: 'Produtos de Crochê da Pri Campos',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductsSection />
    </>
  );
}
