'use client';
import React from 'react';
import Divider from '@mui/material/Divider';

import ServicesSection from './_components/ServicesSection.js';
import AboutUsSection from './_components/AboutUsSection.js';
import HeaderSection from './_components/HeaderSection.js';
import ReviewsSection from './_components/ReviewsSection.js';
import LogosSection from './_components/LogosSection.js';
import ContactUsSection from './_components/ContactUsSection.js';

export default function Home() {
    return (
        <>
            <HeaderSection />
            <ServicesSection />
            <AboutUsSection />
            <ReviewsSection />
            <Divider />
            <LogosSection />
            <ContactUsSection />
        </>
    );
}
