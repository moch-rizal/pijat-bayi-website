import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Info from '../components/Info';
import CTA from '../components/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <Gallery />
      <Info />
      <CTA />
    </>
  );
}