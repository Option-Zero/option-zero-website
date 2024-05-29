import React from 'react';

import styled from '@emotion/styled';
import { SectionBackground, SectionContent } from './Section.js';
import { Dark_blue, Logo_green } from '../Styles/Colors.js';
import { MAX_CONTENT_WIDTH } from '../Styles/Styles.js';
import { GreenButton } from './Button.js';

const SectionBackgroundGradient = styled(SectionBackground)`
    background-color: ${Dark_blue};
    background-image: radial-gradient(
        circle farthest-corner at 0% 0%,
        rgba(39, 211, 116, 0.3),
        // ^ Logo_Green
        ${Dark_blue} 24%
    );
    filter: blur();
    background-size: auto, cover;
`;

const StyledSectionContent = styled(SectionContent)`
    align-items: flex-start;
    max-width: ${MAX_CONTENT_WIDTH * 0.5};
`;

const WhiteSubtitle = styled.p`
    color: white;
    margin-top: 20px;
    font-size: 17px;
`;
const ContactUsSection = () => {
    return (
        <>
            <SectionBackgroundGradient padding id="contact-section">
                <StyledSectionContent column>
                    <h2 style={{ color: Logo_green }}> Have a project? </h2>
                    <h2 style={{ color: 'white' }}> Let's work together! </h2>
                    <WhiteSubtitle> We would love to hear from you! </WhiteSubtitle>
                    <GreenButton style={{ marginTop: '40px' }}> [ Submit ] </GreenButton>
                </StyledSectionContent>
            </SectionBackgroundGradient>
        </>
    );
};

export default ContactUsSection;
