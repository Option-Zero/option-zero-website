import React from 'react';
import styled from '@emotion/styled';
import { SectionBackground, SectionContent } from './Section.js';
import { TransparentButton } from './Button.js';
import { BREAKPOINTS } from '../Styles/Styles.js';

const AboutUsSectionContent = styled(SectionContent)`
    padding: 0 25px;
    justify-content: space-around;
    gap: 100px;
    @media screen and (max-width: ${BREAKPOINTS.md}) {
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const AboutUsText = styled.div`
    @media screen and (max-width: ${BREAKPOINTS.md}) {
        justify-content: center;
        min-width: 300px;
        max-width: 450px;
        width: auto;
    }
`;

const JnJPortrait = styled.div`
    display: block;
    background-image: url('/2023_1_19_JasonandjamieportraitVegas-7.jpg');
    background-position: 0 0;
    background-size: cover;
    background-attachment: scroll;
    width: auto;
    min-width: 200px;
    max-width: 600px;
    height: auto;
    min-height: 200px;
    max-height: 400px;
    &:hover {
        background-image: url('/2023_1_19_JasonandjamieportraitVegas-11.jpg');
    }
`;

const AboutUsSection = () => {
    return (
        <SectionBackground padding style={{ backgroundColor: '#f0f1f2' }}>
            <AboutUsSectionContent>
                <JnJPortrait />
                <AboutUsText>
                    <h3> About Us </h3>
                    <p>
                        We are Jason and Jaime Curtis, a husband and wife team. We've built on our
                        combined 20+ years of experience in software and climate solutions to launch
                        Option Zero, the software consultancy for climate companies & initiatives.
                    </p>
                    <p>If your mission is climate resilience, your mission is our mission.</p>
                    <TransparentButton> [ Work With Us ]</TransparentButton>
                </AboutUsText>
            </AboutUsSectionContent>
        </SectionBackground>
    );
};

export default AboutUsSection;
