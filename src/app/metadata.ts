import type { Metadata } from "next";
import { branches } from "../constants/branches";

const siteUrl = "https://panjabraopatildhaba.in";
const siteName = "Punjabrao Patil Varhadi Dhaba";
const defaultDescription = "Authentic Varhadi cuisine at Punjabrao Patil Dhaba. Traditional Maharashtrian dhaba-style dining with spicy curries, bhakri, and more.";
const defaultImage = `${siteUrl}/images/gallery/hero-dhaba.webp`;

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: `Home | ${siteName}`,
        template: `%s | ${siteName}`,
    },
    description: defaultDescription,
    keywords: [
        "Punjabrao Patil Dhaba",
        "Varhadi cuisine",
        "Maharashtrian food",
        "Paratwada restaurant",
        "Amravati dhaba",
        "traditional Indian food",
        "family restaurant",
        "authentic dhaba"
    ],
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: siteUrl,
        title: siteName,
        description: defaultDescription,
        siteName: siteName,
        images: [
            {
                url: defaultImage,
                width: 1200,
                height: 630,
                alt: siteName,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteName,
        description: defaultDescription,
        images: [defaultImage],
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

// Generate JSON-LD structured data
export function generateRestaurantSchemas() {
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": siteName,
        "url": siteUrl,
        "logo": `${siteUrl}/images/gallery/logo.webp`,
        "description": defaultDescription,
        "sameAs": [
            "https://www.instagram.com/panjabrao_patil_varadhi_dhaba/",
            "https://www.facebook.com/people/Panjabrao-Patil-Varadhi-Dhaba/61566435520533/",
            "https://www.youtube.com/@panjabraopatildhaba/videos"
        ]
    };

    const restaurantSchemas = branches.map(branch => ({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": `${siteName} - ${branch.label}`,
        "image": [
            defaultImage,
            `${siteUrl}/images/gallery/interior.webp`,
            `${siteUrl}/images/gallery/food.webp`
        ],
        "url": siteUrl,
        "telephone": branch.phone,
        "priceRange": "₹₹",
        "servesCuisine": ["Maharashtrian", "Varhadi", "Indian"],
        "acceptsReservations": "False",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": branch.address,
            "addressLocality": branch.area,
            "addressRegion": "Maharashtra",
            "postalCode": branch.address.match(/\d{6}/)?.[0] || "",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": branch.geo.lat,
            "longitude": branch.geo.lng
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "11:00",
                "closes": "23:00"
            }
        ],
        "menu": `${siteUrl}#menu`,
        "hasMenu": {
            "@type": "Menu",
            "hasMenuSection": [
                {
                    "@type": "MenuSection",
                    "name": "Traditional Varhadi Specialties",
                    "description": "Authentic regional dishes"
                },
                {
                    "@type": "MenuSection",
                    "name": "Maharashtrian Thalis",
                    "description": "Complete meal combinations"
                }
            ]
        }
    }));

    // Breadcrumb schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
            }
        ]
    };

    return [orgSchema, ...restaurantSchemas, breadcrumbSchema];
}
