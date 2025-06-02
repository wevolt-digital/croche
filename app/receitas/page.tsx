import RecipesHero from '@/components/receitas/hero';
import RecipesSection from '@/components/receitas/recipes-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Receitas | Pri Campos Crochê',
  description: 'Aprenda a criar suas próprias peças com nossas receitas de crochê detalhadas, tanto pagas quanto gratuitas.',
};

export default function RecipesPage() {
  return (
    <>
      <RecipesHero />
      <RecipesSection />
    </>
  );
}