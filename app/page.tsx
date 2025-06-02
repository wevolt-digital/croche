import Hero from '@/components/home/hero';
import About from '@/components/home/about';
import FeaturedRecipes from '@/components/home/featured-recipes';
import FeaturedProducts from '@/components/home/featured-products';
import Testimonials from '@/components/home/testimonials';
import ContactForm from '@/components/home/contact-form';

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