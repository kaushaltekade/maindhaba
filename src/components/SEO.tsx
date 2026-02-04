import { Helmet } from 'react-helmet-async';
import { branches } from '../constants/branches';

interface SEOProps {
    title: string;
    description?: string;
    canonical?: string;
    image?: string;
    type?: 'website' | 'article' | 'restaurant';
}

const SEO = ({
    title,
    description = "Authentic Varhadi cuisine at Punjabrao Patil Dhaba. Traditional Maharashtrian dhaba-style dining with spicy curries, bhakri, and more.",
    canonical = "https://panjabraopatildhaba.in/",
    image = "https://panjabraopatildhaba.in/images/gallery/hero-dhaba.webp",
    type = 'website'
}: SEOProps) => {

    const siteTitle = "Punjabrao Patil Varhadi Dhaba";
    const fullTitle = `${title} | ${siteTitle}`;

    // Generate Schema for ALL locations
    const schemaData = branches.map(branch => ({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": `Punjabrao Patil Varhadi Dhaba - ${branch.label}`,
        "image": image,
        "url": canonical,
        "telephone": branch.phone,
        "priceRange": "₹₹",
        "servesCuisine": "Maharashtrian, Varhadi",
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
        }
    }));

    // Organization Schema
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": siteTitle,
        "url": "https://panjabraopatildhaba.in",
        "logo": "https://panjabraopatildhaba.in/images/gallery/logo.webp",
        "sameAs": [
            "https://www.instagram.com/panjabrao_patil_varadhi_dhaba/",
            "https://www.facebook.com/people/Panjabrao-Patil-Varadhi-Dhaba/61566435520533/",
            "https://www.youtube.com/@panjabraopatildhaba/videos"
        ]
    };

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={canonical} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Structured Data (JSON-LD) */}
            <script type="application/ld+json">
                {JSON.stringify([orgSchema, ...schemaData])}
            </script>
        </Helmet>
    );
};

export default SEO;
