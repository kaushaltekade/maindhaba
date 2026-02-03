# Product Requirement Document (PRD)
## Project Name: Panjabrao Patil Varhadi Dhaba Website (v2)

## 1. Executive Summary
The goal of this project is to develop a premium, high-performance website for **Panjabrao Patil Varhadi Dhaba**. The website serves as the digital storefront for the restaurant, showcasing its authentic "Varhadi" cuisine, ambience, and multiple branch locations. The design focuses on a "wow" factor with dark-themed aesthetics, rich visuals, and smooth interactive elements to attract and engage customers.

## 2. Project Goals & Objectives
- **Brand Elevation**: Establish a premium online presence that reflects the quality and authenticity of the dining experience.
- **Customer Engagement**: Use interactive elements (animations, galleries) to keep users engaged.
- **Information Accessibility**: Make it effortless for users to find menu items, branch locations, and contact details.
- **Performance**: Ensure lightning-fast load times and smooth navigation using modern web technologies.

## 3. Target Audience
- Food enthusiasts looking for authentic Maharashtrian/Varhadi cuisine.
- Families and groups looking for a dining destination with good ambience.
- Travelers on highways looking for a quality stop (Highway-style dining).
- Local residents in Paratwada, Amravati, Akola, and Warud areas.

## 4. Key Features & Functional Requirements

### 4.1. Core Navigation & Layout
- **Responsive Navigation Bar**:
  - Sticky/Fixed positioning for easy access.
  - Links to: Home, Ambience, Menu, Gallery, Contact.
  - "Book a Table" call-to-action (CTA).
- **Smooth Scrolling**:
  - Integrated smooth scrolling behavior for a polished feel (`lenis` or custom implementation).

### 4.2. Landing Page (Home)
- **Hero Section**:
  - High-impact visual (video or high-res image) representing the food/ambience.
  - Strong value proposition/headline.
  - Primary CTA buttons (e.g., "View Menu", "Visit Us").

### 4.3. Ambience Showcase
- **Ambience Section**:
  - Visual storytelling of the dining space (indoor/outdoor).
  - Reveal animations to highlight atmosphere.

### 4.4. Menu Highlights
- **Featured Menu Section**:
  - Curated list of signature dishes.
  - High-quality food photography.
  - Descriptions and potentially pricing (or link to full menu).

### 4.5. Gallery
- **Interactive Gallery**:
  - Grid or carousel layout for photos.
  - Lightbox or modal view for enlarged images.
  - Categories: Food, Interior, Events.

### 4.6. Multi-Branch Contact & Location
- **Advanced Contact Section**:
  - **Branch Switcher**: Tabs/Buttons to toggle between branches:
    - Main Branch (Paratwada)
    - City Branch (Amravati)
    - Akola Branch
    - Warud Branch
  - **Dynamic Information**: Updating address, phone, and embedded Google Map based on selected branch.
  - **Integrated Social Links**: Direct links to Instagram, Facebook, YouTube, Email within the contact card.

### 4.7. Mobile Experience
- **Responsiveness**: Fully optimized for mobile devices (touch-friendly sliders, readable text, accessible buttons).
- **Mobile Navigation**: Hamburger menu or simplified mobile nav.

## 5. Technical Stack & Requirements
- **Frontend Framework**: React 18 (via Vite).
- **Language**: TypeScript.
- **Styling**: Tailwind CSS (Custom palette: `dhaba-dark`, `dhaba-orange`, etc.).
- **UI Components**: Shadcn UI (Radix UI based).
- **Animations**: Framer Motion (for reveal effects, transitions).
- **Routing**: React Router DOM.
- **Icons**: Lucide React.
- **Development Tools**: ESLint, PostCSS.

## 6. Design System & Aesthetics
- **Theme**: Dark Luxury (`bg-dhaba-dark`).
- **Primary Accent**: Dhaba Orange (`text-dhaba-orange`).
- **Typography**: Display fonts for headings, clean sans-serif for body text.
- **Interactions**: Magnetic buttons, hover effects, reveal-on-scroll.

## 7. Future Considerations (Post-MVP)
- **Online Ordering System**: Integration with Zomato/Swiggy or direct ordering.
- **Table Reservation System**: Digital booking form with calendar integration.
- **Admin Dashboard**: easy CMS for owner to update menu prices and gallery photos.
- **Customer Reviews**: Integration with Google Reviews API.

## 8. Success Metrics
- Page Load Speed (< 2s).
- Mobile Usability Score.
- Increased click-through rate on "Call Now" or "Get Directions".
