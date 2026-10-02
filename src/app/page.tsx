import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Services />
      <Reviews />
      <Footer />
    </div>
  );
}
