'use client';

import Script from 'next/script';
import { generateRestaurantSchemas } from '@/app/metadata';

export default function StructuredData() {
    const schemas = generateRestaurantSchemas();

    return (
        <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
    );
}
