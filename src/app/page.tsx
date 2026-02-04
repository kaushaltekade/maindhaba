import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AmbienceSection from "@/components/AmbienceSection";
import FeaturedMenu from "@/components/FeaturedMenu";
import InteractiveGallery from "@/components/InteractiveGallery";
import ContactSection from "@/components/ContactSection";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
    title: "Panjabrao Patil Dhaba | Authentic Varhadi Cuisine in Paratwada & Amravati",
    description: "Experience authentic Varhadi cuisine at Panjabrao Patil Dhaba. The best family restaurant in Paratwada and Amravati offering traditional Maharashtrian dishes, local flavors, and a unique dining experience.",
};

export default function HomePage() {
    return (
        <main className="min-h-screen bg-dhaba-dark text-white selection:bg-dhaba-orange selection:text-white">
            <StructuredData />
            <Navbar />
            <HeroSection />
            <AmbienceSection />
            <FeaturedMenu />
            <InteractiveGallery />
            <ContactSection />

            {/* Footer */}
            <footer className="bg-black py-8 border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-display text-2xl mb-4 text-white/80">Panjabrao Patil Varhadi Dhaba</h2>
                    <p className="text-white/30 text-xs">© 2024 Panjabrao Patil Varhadi Dhaba. All rights reserved.</p>
                </div>
            </footer>
        </main>
    );
}
