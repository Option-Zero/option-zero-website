'use client';
import React from 'react';
import styled from '@emotion/styled';

import ServicesSection from './_components/ServicesSection.js';

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
            <ServicesSection />
            {/* <AboutUsSection /> */}
            {/* <ReviewsSection /> */}
        </StyledMain>
    );
}
