import './globals.css';
import type { Metadata } from 'next';
import { Caveat, Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import WhatsAppButton from '@/components/layout/whatsapp-button';

const caveat = Caveat({ 
  subsets: ['latin'],
  weight: ['600'],
  display: 'swap',
  variable: '--font-caveat',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Pri Campos Crochê | Criações Artesanais em Crochê',
  description: 'Produtos e receitas de crochê exclusivos feitos com amor e dedicação por Pri Campos. Explore nossos produtos, aprenda com nossas receitas e encomende peças únicas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={cn(
        caveat.variable, 
        montserrat.variable,
        'min-h-screen bg-cream font-sans relative'
      )}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}