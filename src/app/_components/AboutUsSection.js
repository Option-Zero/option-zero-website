import React from 'react';
import styled from '@emotion/styled';
import { AnchorButton, SectionBackground } from './SharedComponents.js';
import { Cream, Dark_grey, Logo_green } from '../Styles/Colors.js';
import { Container } from '@mui/material';

const AboutUsContainer = styled(Container)`
    display: flex;
    align-items: flex-start; /*not sure how i feel about this*/
    justify-content: space-between;
    gap: 40px;
    @media screen and (max-width: 800px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const StyledAnchorButton = styled(AnchorButton)`
    background-color: transparent;
    color: ${Logo_green};
    padding: 0;
    &:hover {
        color: ${Dark_grey};
        background-color: ${Cream};
    }
`;

const JnJPortrait = styled.div`
    display: block;
    background-image: url('/2023_1_19_JasonandjamieportraitVegas-7.jpg');
    background-position: 0 0;
    background-size: cover;
    background-attachment: scroll;
    width: auto;
    min-width: 450px;
    max-width: 600px;
    height: auto;
    min-height: 300px;
    max-height: 400px;
    &:hover {
        background-image: url('/2023_1_19_JasonandjamieportraitVegas-11.jpg');
    }
`;

const AboutUsSection = () => {
    return (
        <SectionBackground padding style={{ backgroundColor: '#f0f1f2' }}>
            <AboutUsContainer>
                <JnJPortrait></JnJPortrait>
                <div>
                    <h3> About Us </h3>
                    <p>
                        We are Jason and Jaime Curtis, a husband and wife team. We've built on our
                        combined 20+ years of experience in software and climate solutions to launch
                        Option Zero, the software consultancy for climate companies & initiatives.
                    </p>
                    <p>If your mission is climate resilience, your mission is our mission.</p>
                    <StyledAnchorButton> [ Work With Us ]</StyledAnchorButton>
                </div>
            </AboutUsContainer>
        </SectionBackground>
    );
};

export default AboutUsSection;
