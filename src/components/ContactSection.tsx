import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Info, Instagram, Facebook, Mail } from "lucide-react";

const ContactSection = () => {
    return (
        <section id="contact" className="py-24 bg-dhaba-dark relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-dhaba-orange font-semibold uppercase tracking-widest">Visit Us</span>
                    <h2 className="font-display text-4xl md:text-5xl text-white mt-2">Find Our Presence</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Main Branch - Partwada */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 flex flex-col h-full"
                    >
                        <div className="h-64 w-full bg-neutral-800 relative">
                            <iframe
                                title="Map of Main Branch Location"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3716.523214153574!2d77.4974672!3d21.329848!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6f44faf71c261%3A0x9cf6ca234b75992b!2sPanjabrao%20Patil%20Varhadi%20Dhaba%20Partwada!5e0!3m2!1sen!2sin!4v1766639585358!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="opacity-90 hover:opacity-100 transition-opacity"
                            ></iframe>
                        </div>
                        <div className="p-8 flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="font-display text-2xl text-dhaba-orange mb-1">Primary Location</h3>
                                <h4 className="text-xl text-white mb-6">Main Branch</h4>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 text-white/80">
                                        <MapPin className="text-dhaba-amber shrink-0 mt-1" />
                                        <div>
                                            <p className="font-medium text-white">Address</p>
                                            <p>Dharni Road, Gaurkheda, Maharashtra – 444806, India</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 text-white/80">
                                        <Info className="text-dhaba-amber shrink-0 mt-1" />
                                        <div>
                                            <p className="font-medium text-white">Area</p>
                                            <p>Paratwada / Gaurkheda Region</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 text-white/80">
                                        <Clock className="text-dhaba-amber shrink-0 mt-1" />
                                        <div>
                                            <p className="font-medium text-white">Type</p>
                                            <p>Highway-style dining</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <div className="flex items-center gap-4 text-white/80">
                                    <Phone className="text-dhaba-amber shrink-0" />
                                    <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-dhaba-orange to-dhaba-amber">09823863577</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* City Branch - Amravati */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 flex flex-col h-full"
                    >
                        <div className="h-64 w-full bg-neutral-800 relative">
                            <iframe
                                title="Map of City Branch Location"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3727.644095978142!2d77.7458309!3d20.8863908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6bb2250cac11d%3A0x555b0e9c16e76ad9!2sPanjabrao%20Patil%20Varhadi%20Dhaba%20Amravati!5e0!3m2!1sen!2sin!4v1766639773285!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="opacity-90 hover:opacity-100 transition-opacity"
                            ></iframe>
                        </div>
                        <div className="p-8 flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="font-display text-2xl text-dhaba-orange mb-1">Amravati</h3>
                                <h4 className="text-xl text-white mb-6">City Branch</h4>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 text-white/80">
                                        <MapPin className="text-dhaba-amber shrink-0 mt-1" />
                                        <div>
                                            <p className="font-medium text-white">Address</p>
                                            <p>Badnera Road, Shashi Nagar, Guruchhaya Colony, Sai Nagar, Amravati, Maharashtra – 444607, India</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 text-white/80">
                                        <Info className="text-dhaba-amber shrink-0 mt-1" />
                                        <div>
                                            <p className="font-medium text-white">Area</p>
                                            <p>Amravati City</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 text-white/80">
                                        <Clock className="text-dhaba-amber shrink-0 mt-1" />
                                        <div>
                                            <p className="font-medium text-white">Type</p>
                                            <p>City Branch</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <div className="flex items-center gap-4 text-white/80">
                                    <Phone className="text-dhaba-amber shrink-0" />
                                    <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-dhaba-orange to-dhaba-amber">8788365960</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Akola Branch */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 flex flex-col h-full"
                    >
                        <div className="h-64 w-full bg-neutral-800 relative">
                            <iframe
                                title="Map of Akola Branch Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.627379817378!2d77.0242747749675!3d20.68473329950627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd72d00298b81d5%3A0xfd8e803cae2d394!2sPanjabrao%20Patil%20Varhadi%20Dhaba%20Akola!5e0!3m2!1sen!2sin!4v1769954835469!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="opacity-90 hover:opacity-100 transition-opacity"
                            ></iframe>
                        </div>
                        <div className="p-8 flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="font-display text-2xl text-dhaba-orange mb-1">Akola</h3>
                                <h4 className="text-xl text-white mb-6">Akola Branch</h4>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 text-white/80">
                                        <MapPin className="text-dhaba-amber shrink-0 mt-1" />
                                        <div>
                                            <p className="font-medium text-white">Address</p>
                                            <p>Sant Tukaram Chowk, Old RTO Rd, Sahakar Nagar, Akola, Maharashtra 444004, India</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 text-white/80">
                                        <Info className="text-dhaba-amber shrink-0 mt-1" />
                                        <div>
                                            <p className="font-medium text-white">Area</p>
                                            <p>Akola City</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 text-white/80">
                                        <Clock className="text-dhaba-amber shrink-0 mt-1" />
                                        <div>
                                            <p className="font-medium text-white">Type</p>
                                            <p>City Branch</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <div className="flex items-center gap-4 text-white/80">
                                    <Phone className="text-dhaba-amber shrink-0" />
                                    <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-dhaba-orange to-dhaba-amber">09021222329</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Warud Branch */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 flex flex-col h-full"
                    >
                        <div className="h-64 w-full bg-neutral-800 relative">
                            <iframe
                                title="Map of Warud Branch Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.5348534304835!2d78.2663973!3d21.486760399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd5cb004c866c59%3A0x9dee63f532ef51a6!2sPunjabrao%20Patil%20Warhadi%20Dhaba!5e0!3m2!1sen!2sin!4v1769954758386!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="opacity-90 hover:opacity-100 transition-opacity"
                            ></iframe>
                        </div>
                        <div className="p-8 flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="font-display text-2xl text-dhaba-orange mb-1">Warud</h3>
                                <h4 className="text-xl text-white mb-6">Warud Branch</h4>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 text-white/80">
                                        <MapPin className="text-dhaba-amber shrink-0 mt-1" />
                                        <div>
                                            <p className="font-medium text-white">Address</p>
                                            <p>Multai Rd, near Sharma petrol pump, Warud, Maharashtra 444906</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 text-white/80">
                                        <Info className="text-dhaba-amber shrink-0 mt-1" />
                                        <div>
                                            <p className="font-medium text-white">Area</p>
                                            <p>Warud</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 text-white/80">
                                        <Clock className="text-dhaba-amber shrink-0 mt-1" />
                                        <div>
                                            <p className="font-medium text-white">Type</p>
                                            <p>City Branch</p>
                                        </div>
                                    </div>
                                    {/* Phone number pending */}

                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <div className="flex items-center gap-4 text-white/80">
                                    <Phone className="text-dhaba-amber shrink-0" />
                                    <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-dhaba-orange to-dhaba-amber">0000000000</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Social Media Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h3 className="font-display text-2xl text-white mb-8">Connect With Us</h3>
                    <div className="flex justify-center gap-8">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/5 p-4 rounded-full text-dhaba-orange hover:bg-dhaba-orange hover:text-white transition-all duration-300 hover:-translate-y-1 group"
                            aria-label="Instagram"
                        >
                            <Instagram size={28} />
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/5 p-4 rounded-full text-dhaba-orange hover:bg-dhaba-orange hover:text-white transition-all duration-300 hover:-translate-y-1 group"
                            aria-label="Facebook"
                        >
                            <Facebook size={28} />
                        </a>
                        <a
                            href="mailto:koushaltekade89@gmail.com"
                            className="bg-white/5 p-4 rounded-full text-dhaba-orange hover:bg-dhaba-orange hover:text-white transition-all duration-300 hover:-translate-y-1 group"
                            aria-label="Email Us"
                        >
                            <Mail size={28} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
