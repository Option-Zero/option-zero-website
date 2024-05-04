'use client';
import React from 'react';
import styled from '@emotion/styled';

import ServicesSection from './_components/ServicesSection.js';
import AboutUsSection from './_components/AboutUsSection.js';
import HeaderSection from './_components/HeaderSection.js';
import ReviewsSection from './_components/ReviewsSection.js';
import LogosSection from './_components/LogosSection.js';
import ContactUsSection from './_components/ContactUsSection.js';

const StyledMain = styled.button`
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
        color: white;
    }
`;

export default function Home() {
    return (
        <StyledMain>
            <HeaderSection />
            <ServicesSection />
            <AboutUsSection />
            <ReviewsSection />
            <LogosSection />
            <ContactUsSection />
        </StyledMain>
    );
}
