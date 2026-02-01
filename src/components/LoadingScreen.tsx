import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const greetings = [
    "पांजबराव वऱ्हाडी धाब्यावर आपले स्वागत आहे", // Marathi
    "पांजबराव वऱ्हाडी धाबा में आपका स्वागत है",   // Hindi
    "Welcome to Panjabrao Varhadi Dhaba" // English
];

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
    // Determine target percentage for smooth filling
    // We'll animate this value from 0 to 100
    const [progress, setProgress] = useState(0);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        // Cycle text every 1200ms
        const textInterval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % greetings.length);
        }, 1200);

        return () => clearInterval(textInterval);
    }, []);

    useEffect(() => {
        // Start the progress animation
        const timer = setTimeout(() => {
            setProgress(100);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (progress === 100) {
            // Wait for animation to finish (approx 3s) plus a small buffer
            const completeTimer = setTimeout(() => {
                onComplete();
            }, 3500); // 3s duration + 0.5s buffer
            return () => clearTimeout(completeTimer);
        }
    }, [progress, onComplete]);

    const getLoadingText = () => {
        // Since we don't have real-time access to the exact animated value in JS state without layout shifts,
        // we can estimate or just keep the text static/pulsing. 
        // However, for visual consistency with the bar, we can use the time.
        // Or simpler: just cycle the text independently which is what we are likely doing.
        return "Preparing Authentic Experience...";
    };

    return (
        <motion.div
            className="fixed inset-0 z-[10000] flex flex-col items-center justify-center text-white overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/80 z-10" />
                <img
                    src="/images/gallery/gallery-7.webp"
                    alt="Loading Background"
                    className="w-full h-full object-cover scale-105 animate-pulse-slow"
                />
            </div>

            <div className="relative z-20 mb-16 flex flex-col items-center max-w-4xl px-6 text-center">
                <motion.div
                    key={textIndex}
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="font-display font-bold text-dhaba-orange drop-shadow-2xl h-16 flex items-center justify-center"
                >
                    <span className="block text-xl md:text-5xl uppercase tracking-widest leading-relaxed">
                        {greetings[textIndex]}
                    </span>
                </motion.div>
                <div className="h-0.5 w-24 bg-dhaba-orange/50 mt-8 rounded-full" />
            </div>

            {/* Minimal Progress Bar */}
            <div className="relative z-20 w-64 md:w-96 mt-8">
                {/* Text Indicators - Fade in active stage with delays to match bar animation */}
                <div className="flex justify-between w-full mb-3 px-1">
                    <IndicatorText label="Tables" delay={0.5} />
                    <IndicatorText label="Glasses" delay={1.5} />
                    <IndicatorText label="Food" delay={2.5} />
                </div>

                {/* Track */}
                <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden relative">
                    <motion.div
                        className="h-full bg-gradient-to-r from-transparent via-dhaba-orange to-dhaba-amber shadow-[0_0_20px_rgba(255,165,0,0.8)] relative"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3, ease: "linear" }}
                    >
                        {/* Glowing Head */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-dhaba-orange rounded-full blur-[4px] shadow-[0_0_15px_#ff9f1c]" />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full" />
                    </motion.div>
                </div>
            </div>

            <motion.p
                className="relative z-20 mt-12 font-display tracking-widest text-sm text-white/80 uppercase"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                Serving Authentic Varhadi Taste...
            </motion.p>
        </motion.div>
    );
};

const IndicatorText = ({ label, delay }: { label: string, delay: number }) => {
    return (
        <motion.span
            initial={{ color: "rgba(255,255,255,0.2)", textShadow: "none" }}
            animate={{
                color: "rgb(255, 165, 0)",
                textShadow: "0 0 8px rgba(255, 165, 0, 0.8)",
                fontWeight: "bold"
            }}
            transition={{ delay: delay, duration: 0.5 }}
            className="text-[10px] uppercase tracking-widest"
        >
            {label}
        </motion.span>
    )
}

export default LoadingScreen;
