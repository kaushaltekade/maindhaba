import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AmbienceSection from "@/components/AmbienceSection";
import FeaturedMenu from "@/components/FeaturedMenu";
import InteractiveGallery from "@/components/InteractiveGallery";
import ContactSection from "@/components/ContactSection";
import { Toaster } from "@/components/ui/toaster";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <main className="min-h-screen bg-dhaba-dark text-white selection:bg-dhaba-orange selection:text-white">
      <SEO
        title="Home"
        description="Experience authentic Varhadi cuisine at Punjabrao Patil Dhaba. Best family restaurant in Paratwada and Amravati offering traditional Maharashtrian dishes."
      />
      <Navbar />
      <HeroSection />
      <AmbienceSection />
      <FeaturedMenu />
      <InteractiveGallery />
      <ContactSection />

      {/* Footer Simple */}
      <footer className="bg-black py-8 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-2xl mb-4 text-white/80">Panjabrao Patil Varhadi Dhaba</h2>
          <p className="text-white/30 text-xs">© 2024 Panjabrao Patil Varhadi Dhaba. All rights reserved.</p>
        </div>
      </footer>
      <Toaster />
    </main>
  );
};

export default Index;
