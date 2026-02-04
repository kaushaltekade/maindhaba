'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import SmoothScroll from "@/components/SmoothScroll";

const queryClient = new QueryClient();

export function ClientProviders({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster />
                <AnimatePresence mode="wait">
                    {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
                </AnimatePresence>
                {!isLoading && (
                    <SmoothScroll>
                        {children}
                    </SmoothScroll>
                )}
            </TooltipProvider>
        </QueryClientProvider>
    );
}
