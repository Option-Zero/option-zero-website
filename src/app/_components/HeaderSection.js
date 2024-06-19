import React from 'react';

import styled from '@emotion/styled';

import { GreenButton } from './Button.js';
import { Header1, Paragraph } from '../Styles/Typography.js';
import ResponsiveAppBar from './AppBar.js';
import { SectionBackground, SectionContent } from './Section.js';
import { MAX_CONTENT_WIDTH } from '../Styles/Styles.js';
import Link from 'next/link.js';

const Banner = styled(SectionBackground)`
    background-image: url('/HeaderBackground.jpg');
    background-position: 50% 80%;
    background-clip: border-box;
    background-size: cover;
`;

const Header = styled(SectionContent)`
    justify-content: flex-start;
    align-items: flex-start;
    color: white;
    max-width: ${MAX_CONTENT_WIDTH * 0.5}px;
    margin: 0;
    align-self: flex-start;
`;

const HeaderSection = () => {
    return (
        <Banner>
            <SectionContent column>
                <ResponsiveAppBar />
                <Header column padding>
                    <Header1>Modern software for climate tech</Header1>
                    <Paragraph>
                        We provide personalized, end-to-end software solutions and on-demand
                        consulting to power the next generation of climate tech
                    </Paragraph>
                    <Link href="#contact-section">
                        <GreenButton>[Get Started]</GreenButton>
                    </Link>
                </Header>
            </SectionContent>
        </Banner>
    );
};

export default HeaderSection;
