import ProductsHero from '@/components/produtos/hero';
import ProductsSection from '@/components/produtos/products-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Produtos | Pri Campos Crochê',
  description: 'Conheça nossos produtos de crochê artesanais, feitos com amor e carinho para você e sua família.',
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductsSection />
    </>
  );
}