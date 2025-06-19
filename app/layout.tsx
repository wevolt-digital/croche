import './globals.css';
import type { Metadata } from 'next';
import { Caveat, Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import WhatsAppButton from '@/components/layout/whatsapp-button';
import Script from 'next/script'; // 👈 Importa o Script do Next

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
  description: 'Produtos e receitas de crochê exclusivos feitos com amor e dedicação. Explore nossos produtos, aprenda com nossas receitas e encomende peças únicas.',
  icons: {
    icon: '/croche-icon.svg', // favicon principal
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZQP7B15RK5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZQP7B15RK5', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
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
