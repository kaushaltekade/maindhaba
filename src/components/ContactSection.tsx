import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Clock, Info, Instagram, Facebook, Mail, Youtube, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const branches = [
    {
        id: "partwada",
        videoTitle: "Primary Location",
        name: "Main Branch",
        label: "Paratwada",
        address: "Dharni Road, Gaurkheda, Maharashtra – 444806, India",
        area: "Paratwada / Gaurkheda Region",
        type: "Highway-style dining",
        phone: "09823863577",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3716.523214153574!2d77.4974672!3d21.329848!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6f44faf71c261%3A0x9cf6ca234b75992b!2sPanjabrao%20Patil%20Varhadi%20Dhaba%20Partwada!5e0!3m2!1sen!2sin!4v1766639585358!5m2!1sen!2sin"
    },
    {
        id: "amravati",
        videoTitle: "Amravati",
        name: "City Branch",
        label: "Amravati",
        address: "Badnera Road, Shashi Nagar, Guruchhaya Colony, Sai Nagar, Amravati, Maharashtra – 444607, India",
        area: "Amravati City",
        type: "City Branch",
        phone: "8788365960",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3727.644095978142!2d77.7458309!3d20.8863908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6bb2250cac11d%3A0x555b0e9c16e76ad9!2sPanjabrao%20Patil%20Varhadi%20Dhaba%20Amravati!5e0!3m2!1sen!2sin!4v1766639773285!5m2!1sen!2sin"
    },
    {
        id: "akola",
        videoTitle: "Akola",
        name: "Akola Branch",
        label: "Akola",
        address: "Sant Tukaram Chowk, Old RTO Rd, Sahakar Nagar, Akola, Maharashtra 444004, India",
        area: "Akola City",
        type: "City Branch",
        phone: "09021222329",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.627379817378!2d77.0242747749675!3d20.68473329950627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd72d00298b81d5%3A0xfd8e803cae2d394!2sPanjabrao%20Patil%20Varhadi%20Dhaba%20Akola!5e0!3m2!1sen!2sin!4v1769954835469!5m2!1sen!2sin"
    },
    {
        id: "warud",
        videoTitle: "Warud",
        name: "Warud Branch",
        label: "Warud",
        address: "Multai Rd, near Sharma petrol pump, Warud, Maharashtra 444906",
        area: "Warud",
        type: "City Branch",
        phone: "0000000000",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.5348534304835!2d78.2663973!3d21.486760399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd5cb004c866c59%3A0x9dee63f532ef51a6!2sPunjabrao%20Patil%20Warhadi%20Dhaba!5e0!3m2!1sen!2sin!4v1769954758386!5m2!1sen!2sin"
    }
];

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
                                <div className="h-64 md:h-auto w-full md:w-5/12 bg-neutral-800 relative">
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
                                </div>

                                {/* Details Section */}
                                <div className="p-6 md:p-8 w-full md:w-7/12 flex flex-col justify-center">
                                    <div>
                                        <div className="mb-6">
                                            <h3 className="font-display text-2xl text-dhaba-orange mb-1">{currentBranch.videoTitle}</h3>
                                            <h4 className="text-lg text-white opacity-80">{currentBranch.name}</h4>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex items-start gap-3 text-white/80">
                                                <MapPin className="text-dhaba-amber shrink-0 mt-1 w-5 h-5" />
                                                <div>
                                                    <p className="font-medium text-white text-sm">Address</p>
                                                    <p className="leading-relaxed text-white/70 text-sm">{currentBranch.address}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 text-white/80">
                                                <Info className="text-dhaba-amber shrink-0 mt-1 w-5 h-5" />
                                                <div>
                                                    <p className="font-medium text-white text-sm">Area</p>
                                                    <p className="text-white/70 text-sm">{currentBranch.area}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 text-white/80">
                                                <Clock className="text-dhaba-amber shrink-0 mt-1 w-5 h-5" />
                                                <div>
                                                    <p className="font-medium text-white text-sm">Type</p>
                                                    <p className="text-white/70 text-sm">{currentBranch.type}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                        <div className="flex items-center gap-3 text-white/80">
                                            <Phone className="text-dhaba-amber shrink-0 w-5 h-5" />
                                            <p className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-dhaba-orange to-dhaba-amber font-display tracking-widest">
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
                                                <Instagram size={20} />
                                            </a>
                                            <a
                                                href="https://www.facebook.com/people/Panjabrao-Patil-Varadhi-Dhaba/61566435520533/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white/5 p-2 rounded-full text-dhaba-orange hover:bg-dhaba-orange hover:text-white transition-all duration-300 hover:-translate-y-1 group border border-white/5 hover:border-dhaba-orange"
                                                aria-label="Facebook"
                                            >
                                                <Facebook size={20} />
                                            </a>
                                            <a
                                                href="mailto:koushaltekade89@gmail.com"
                                                className="bg-white/5 p-2 rounded-full text-dhaba-orange hover:bg-dhaba-orange hover:text-white transition-all duration-300 hover:-translate-y-1 group border border-white/5 hover:border-dhaba-orange"
                                                aria-label="Email Us"
                                            >
                                                <Mail size={20} />
                                            </a>
                                            <a
                                                href="https://www.youtube.com/@panjabraopatildhaba/videos"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white/5 p-2 rounded-full text-dhaba-orange hover:bg-dhaba-orange hover:text-white transition-all duration-300 hover:-translate-y-1 group border border-white/5 hover:border-dhaba-orange"
                                                aria-label="YouTube"
                                            >
                                                <Youtube size={20} />
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

                    {/* Mobile Navigation Arrows (Visible only on small screens) */}
                    <div className="flex md:hidden absolute top-1/2 -translate-y-1/2 w-full justify-between items-center px-2 pointer-events-none">
                        <button
                            onClick={handlePrev}
                            className="p-2 rounded-full bg-black/50 border border-white/10 text-dhaba-orange hover:bg-black/70 pointer-events-auto backdrop-blur-sm"
                            aria-label="Previous Location"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="p-2 rounded-full bg-black/50 border border-white/10 text-dhaba-orange hover:bg-black/70 pointer-events-auto backdrop-blur-sm"
                            aria-label="Next Location"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
