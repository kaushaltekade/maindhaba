import type { Metadata } from "next";
import { ClientProviders } from "@/components/ClientProviders";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL('https://panjabraopatildhaba.in'),
    title: {
        default: "Punjabrao Patil Varhadi Dhaba - Authentic Maharashtrian Cuisine",
        template: "%s | Punjabrao Patil Varhadi Dhaba",
    },
    description: "Experience authentic Varhadi cuisine at Punjabrao Patil Dhaba in Paratwada & Amravati. Traditional Maharashtrian dhaba serving spicy curries, bhakri, and regional specialties since establishment.",
    keywords: [
        "Punjabrao Patil Dhaba",
        "Varhadi cuisine Paratwada",
        "Maharashtrian food Amravati",
        "best dhaba near me",
        "traditional Indian restaurant",
        "family restaurant Paratwada",
        "authentic dhaba Maharashtra",
        "Varhadi thali",
        "bhakri restaurant"
    ],
    authors: [{ name: "Punjabrao Patil Varhadi Dhaba" }],
    creator: "Punjabrao Patil Varhadi Dhaba",
    publisher: "Punjabrao Patil Varhadi Dhaba",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: 'https://panjabraopatildhaba.in',
    },
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://panjabraopatildhaba.in",
        title: "Punjabrao Patil Varhadi Dhaba - Authentic Maharashtrian Cuisine",
        description: "Experience authentic Varhadi cuisine at Punjabrao Patil Dhaba. Traditional Maharashtrian dhaba serving spicy curries, bhakri, and regional specialties.",
        siteName: "Punjabrao Patil Varhadi Dhaba",
        images: [
            {
                url: "/images/gallery/hero-dhaba.webp",
                width: 1200,
                height: 630,
                alt: "Punjabrao Patil Varhadi Dhaba - Authentic Maharashtrian Restaurant",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Punjabrao Patil Varhadi Dhaba - Authentic Maharashtrian Cuisine",
        description: "Experience authentic Varhadi cuisine at Punjabrao Patil Dhaba. Traditional Maharashtrian dhaba serving spicy curries, bhakri, and regional specialties.",
        images: ["/images/gallery/hero-dhaba.webp"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
    },
    manifest: '/site.webmanifest',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
            </head>
            <body>
                <ClientProviders>
                    {children}
                </ClientProviders>
            </body>
        </html>
    );
}
