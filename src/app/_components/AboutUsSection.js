import React from 'react';

import styled from '@emotion/styled';
import { Header3, Paragraph } from '../Styles/Typography.js';
import { BREAKPOINTS } from '../Styles/Styles.js';
import { TransparentButton } from './Button.js';
import { SectionBackground, SectionContent } from './Section.js';
import Link from 'next/link.js';

const AboutUsSectionContent = styled(SectionContent)`
    justify-content: space-around;
    gap: 10%;
    @media screen and (max-width: ${BREAKPOINTS.lg}) {
        flex-wrap: wrap;
        justify-content: center;
        max-width: 80%;
    }
`;

const AboutUsText = styled.div`
    max-width: 50%;
    @media screen and (max-width: ${BREAKPOINTS.lg}) {
        justify-content: center;
        max-width: 100%;
    }
`;

const JnJPortrait = styled.img`
    content: url('JnJ-portrait.jpg');
    position: relative;
    width: 360px;
    height: auto;
    max-width: 100%;
    margin-bottom: 20px;
    @media (hover: hover) {
        &:hover {
            content: url('JnJ-portrait-jumping.jpg');
        }
    }
    @media (min-width: ${BREAKPOINTS.lg}) {
        width: 450px;
    }
`;

const AboutUsSection = () => {
    return (
        <SectionBackground id="about-section" padding style={{ backgroundColor: '#f0f1f2' }}>
            <AboutUsSectionContent>
                <JnJPortrait alt="Jaime and Jason" />
                <AboutUsText>
                    <Header3> About Us </Header3>
                    <Paragraph>
                        We are Jason and Jaime Curtis, a husband and wife team. We've built on our
                        combined 20+ years of experience in software and climate solutions to launch
                        Option Zero, the software consultancy for climate companies & initiatives.
                    </Paragraph>
                    <Paragraph>
                        If your mission is climate resilience, your mission is our mission.
                    </Paragraph>
                    <Link href="#contact-section">
                        <TransparentButton>[ Work With Us ]</TransparentButton>
                    </Link>
                </AboutUsText>
            </AboutUsSectionContent>
        </SectionBackground>
    );
};

export default AboutUsSection;
