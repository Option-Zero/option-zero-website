import React from 'react';

import styled from '@emotion/styled';
import { Header2 } from '../Styles/Typography.js';
import { SectionBackground, SectionContent } from './Section.js';
import { Dark_blue, Logo_green } from '../Styles/Colors.js';
import { GreenButton } from './Button.js';
import { OptionZeroLogo } from './Logo.js';

const SectionBackgroundGradient = styled(SectionBackground)`
    background-color: ${Dark_blue};
    background-image: radial-gradient(
        circle farthest-corner at 0% 0%,
        rgba(39, 211, 116, 0.3),
        ${Dark_blue} 24%
    );
    // rgba color above is Logo_Green
    filter: blur();
    background-size: auto, cover;
`;

const StyledSectionContent = styled(SectionContent)`
    align-items: flex-start;
    justify-content: flex-start;
`;

const WhiteSubtitle = styled.p`
    color: white;
    margin-top: 20px;
    font-size: 17px;
`;
const ContactUsSection = () => {
    return (
        <SectionBackgroundGradient column id="contact-section">
            <SectionBackground padding>
                <StyledSectionContent column>
                    <Header2 style={{ color: Logo_green }}> Have a project? </Header2>
                    <Header2 style={{ color: 'white' }}> Let's work together! </Header2>
                    <WhiteSubtitle> We would love to hear from you! </WhiteSubtitle>
                    <GreenButton style={{ marginTop: '30px' }}> [ Submit ] </GreenButton>
                </StyledSectionContent>
                <StyledSectionContent style={{ marginTop: '80px' }}>
                    <OptionZeroLogo />
                </StyledSectionContent>
            </SectionBackground>
        </SectionBackgroundGradient>
    );
};

export default ContactUsSection;
