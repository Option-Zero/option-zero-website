import React from 'react';

import styled from '@emotion/styled';

import { BREAKPOINTS } from '../Styles/Styles.js';
import { TransparentButton } from './Button.js';
import { SectionBackground, SectionContent } from './Section.js';

const AboutUsSectionContent = styled(SectionContent)`
    justify-content: space-around;
    gap: 10%;
    @media screen and (max-width: ${BREAKPOINTS.md}) {
        flex-wrap: wrap;
        justify-content: center;
        max-width: 80%;
    }
`;

const AboutUsText = styled.div`
    max-width: 50%;
    @media screen and (max-width: ${BREAKPOINTS.md}) {
        justify-content: center;
        max-width: 100%;
    }
`;

const JnJPortrait = styled.img`
    content: url('jnj-portrait.jpg');
    position: relative;
    width: 360px;
    height: auto;
    max-width: 100%;
    margin-bottom: 20px;
    &:hover {
        content: url('jnj-portrait-jumping.jpg');
    }
    @media (min-width: ${BREAKPOINTS.md}) {
        width: 450px;
    }
`;

const AboutUsSection = () => {
    return (
        <SectionBackground id="about-section" padding style={{ backgroundColor: '#f0f1f2' }}>
            <AboutUsSectionContent>
                <JnJPortrait alt="Jaime and Jason"></JnJPortrait>
                <AboutUsText>
                    <h3> About Us </h3>
                    <p>
                        We are Jason and Jaime Curtis, a husband and wife team. We've built on our
                        combined 20+ years of experience in software and climate solutions to launch
                        Option Zero, the software consultancy for climate companies & initiatives.
                    </p>
                    <p>If your mission is climate resilience, your mission is our mission.</p>
                    <TransparentButton as="a" href="#contact-section">
                        [ Work With Us ]
                    </TransparentButton>
                </AboutUsText>
            </AboutUsSectionContent>
        </SectionBackground>
    );
};

export default AboutUsSection;
