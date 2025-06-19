import RecipesHero from '@/components/receitas/hero';
import RecipesSection from '@/components/receitas/recipes-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Receitas | Pri Campos Crochê',
  description: 'Aprenda a criar suas próprias peças com nossas receitas de crochê detalhadas, tanto pagas quanto gratuitas.',
  metadataBase: new URL('https://pricamposcroche.com.br'),
  alternates: {
    canonical: '/receitas',
  },
  openGraph: {
    title: 'Receitas | Pri Campos Crochê',
    description: 'Explore receitas de crochê exclusivas — passo a passo para criar suas próprias peças!',
    url: 'https://croche-alpha.vercel.app/receitas',
    siteName: 'Pri Campos Crochê',
    images: [
      {
        url: '/receitas.webp',
        width: 1200,
        height: 630,
        alt: 'Receitas exclusivas da Pri Campos',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RecipesPage() {
  return (
    <>
      <RecipesHero />
      <RecipesSection />
    </>
  );
}
