'use client';

import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Clock, Info, Instagram, Facebook, Mail, Youtube, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { branches } from "../constants/branches";


const ContactSection = () => {
    const [activeTab, setActiveTab] = useState(branches[0].id);
    const currentIndex = branches.findIndex(b => b.id === activeTab);
    const currentBranch = branches[currentIndex];

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % branches.length;
        setActiveTab(branches[nextIndex].id);
    };

    const handlePrev = () => {
        const prevIndex = (currentIndex - 1 + branches.length) % branches.length;
        setActiveTab(branches[prevIndex].id);
    };

    return (
        <section id="contact" className="py-16 bg-dhaba-dark relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <span className="text-dhaba-orange font-semibold uppercase tracking-widest text-sm">Visit Us</span>
                    <h2 className="font-display text-3xl md:text-4xl text-white mt-1">Find Our Presence</h2>
                </motion.div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {branches.map((branch) => (
                        <button
                            key={branch.id}
                            onClick={() => setActiveTab(branch.id)}
                            className={`px-5 py-2 rounded-full border transition-all duration-300 text-sm font-medium tracking-wide ${activeTab === branch.id
                                ? "bg-dhaba-orange text-white border-dhaba-orange shadow-md scale-105"
                                : "bg-transparent text-white/70 border-white/20 hover:border-dhaba-orange/50 hover:text-white"
                                }`}
                        >
                            {branch.label}
                        </button>
                    ))}
                </div>

                <div className="max-w-6xl mx-auto relative flex items-center justify-center gap-4 md:gap-8">
                    {/* Left Arrow */}
                    <button
                        onClick={handlePrev}
                        className="p-3 rounded-full bg-white/5 border border-white/10 text-dhaba-orange hover:bg-dhaba-orange hover:text-white hover:scale-110 transition-all duration-300 hidden md:flex shrink-0 z-10"
                        aria-label="Previous Location"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <div className="w-full max-w-4xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentBranch.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white/5 rounded-xl overflow-hidden border border-white/10 flex flex-col md:flex-row shadow-2xl"
                            >
                                {/* Map Section */}
                                <div className="h-52 md:h-auto w-full md:w-5/12 bg-neutral-800 relative group">
                                    <iframe
                                        title={`Map of ${currentBranch.name}`}
                                        src={currentBranch.mapSrc}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="absolute inset-0 w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                                    ></iframe>

                                    {/* Mobile Navigation Arrows (Overlay on Map) */}
                                    <div className="flex md:hidden absolute top-1/2 -translate-y-1/2 w-full justify-between items-center px-2 pointer-events-none z-10">
                                        <button
                                            onClick={handlePrev}
                                            className="p-2 rounded-full bg-black/50 border border-white/10 text-dhaba-orange hover:bg-black/70 pointer-events-auto backdrop-blur-sm transition-transform active:scale-95"
                                            aria-label="Previous Location"
                                        >
                                            <ChevronLeft size={20} />
                                        </button>
                                        <button
                                            onClick={handleNext}
                                            className="p-2 rounded-full bg-black/50 border border-white/10 text-dhaba-orange hover:bg-black/70 pointer-events-auto backdrop-blur-sm transition-transform active:scale-95"
                                            aria-label="Next Location"
                                        >
                                            <ChevronRight size={20} />
                                        </button>
                                    </div>
                                </div>

                                {/* Details Section */}
                                <div className="p-5 md:p-8 w-full md:w-7/12 flex flex-col justify-center">
                                    <div>
                                        <div className="mb-4 md:mb-6">
                                            <h3 className="font-display text-xl md:text-2xl text-dhaba-orange mb-1">{currentBranch.videoTitle}</h3>
                                            <h4 className="text-base md:text-lg text-white opacity-80">{currentBranch.name}</h4>
                                        </div>

                                        <div className="space-y-3 md:space-y-4 mb-5 md:mb-6">
                                            <div className="flex items-start gap-3 text-white/80">
                                                <MapPin className="text-dhaba-amber shrink-0 mt-1 w-4 h-4 md:w-5 md:h-5" />
                                                <div>
                                                    <p className="font-medium text-white text-xs md:text-sm">Address</p>
                                                    <p className="leading-relaxed text-white/70 text-xs md:text-sm">{currentBranch.address}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 text-white/80">
                                                <Info className="text-dhaba-amber shrink-0 mt-1 w-4 h-4 md:w-5 md:h-5" />
                                                <div>
                                                    <p className="font-medium text-white text-xs md:text-sm">Area</p>
                                                    <p className="text-white/70 text-xs md:text-sm">{currentBranch.area}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 text-white/80">
                                                <Clock className="text-dhaba-amber shrink-0 mt-1 w-4 h-4 md:w-5 md:h-5" />
                                                <div>
                                                    <p className="font-medium text-white text-xs md:text-sm">Type</p>
                                                    <p className="text-white/70 text-xs md:text-sm">{currentBranch.type}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2 md:mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                        <div className="flex items-center gap-3 text-white/80">
                                            <Phone className="text-dhaba-amber shrink-0 w-4 h-4 md:w-5 md:h-5" />
                                            <p className="text-base md:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-dhaba-orange to-dhaba-amber font-display tracking-widest">
                                                {currentBranch.phone}
                                            </p>
                                        </div>

                                        {/* Integrated Social Links */}
                                        <div className="flex gap-3">
                                            <a
                                                href="https://www.instagram.com/panjabrao_patil_varadhi_dhaba/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white/5 p-2 rounded-full text-dhaba-orange hover:bg-dhaba-orange hover:text-white transition-all duration-300 hover:-translate-y-1 group border border-white/5 hover:border-dhaba-orange"
                                                aria-label="Instagram"
                                            >
                                                <Instagram size={18} className="md:w-5 md:h-5" />
                                            </a>
                                            <a
                                                href="https://www.facebook.com/people/Panjabrao-Patil-Varadhi-Dhaba/61566435520533/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white/5 p-2 rounded-full text-dhaba-orange hover:bg-dhaba-orange hover:text-white transition-all duration-300 hover:-translate-y-1 group border border-white/5 hover:border-dhaba-orange"
                                                aria-label="Facebook"
                                            >
                                                <Facebook size={18} className="md:w-5 md:h-5" />
                                            </a>
                                            <a
                                                href="mailto:adityapatil121h@gmail.com"
                                                className="bg-white/5 p-2 rounded-full text-dhaba-orange hover:bg-dhaba-orange hover:text-white transition-all duration-300 hover:-translate-y-1 group border border-white/5 hover:border-dhaba-orange"
                                                aria-label="Email Us"
                                            >
                                                <Mail size={18} className="md:w-5 md:h-5" />
                                            </a>
                                            <a
                                                href="https://www.youtube.com/@panjabraopatildhaba/videos"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white/5 p-2 rounded-full text-dhaba-orange hover:bg-dhaba-orange hover:text-white transition-all duration-300 hover:-translate-y-1 group border border-white/5 hover:border-dhaba-orange"
                                                aria-label="YouTube"
                                            >
                                                <Youtube size={18} className="md:w-5 md:h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        className="p-3 rounded-full bg-white/5 border border-white/10 text-dhaba-orange hover:bg-dhaba-orange hover:text-white hover:scale-110 transition-all duration-300 hidden md:flex shrink-0 z-10"
                        aria-label="Next Location"
                    >
                        <ChevronRight size={32} />
                    </button>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
