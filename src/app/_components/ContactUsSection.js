import React from 'react';

import styled from '@emotion/styled';
import { Header2, Header5 } from '../Styles/Typography.js';
import { SectionBackground, SectionContent, SectionGap } from './Section.js';
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

const ContactUsSection = () => {
    return (
        <SectionBackgroundGradient column id="contact-section">
            <SectionBackground padding>
                <SectionContent column leftAlign>
                    <Header2 style={{ color: Logo_green }}> Have a project? </Header2>
                    <Header2 style={{ color: 'white' }}> Let's work together! </Header2>
                    <Header5 style={{ color: 'white', marginTop: '20px' }}>
                        We would love to hear from you!
                    </Header5>
                    <GreenButton> [ Submit ] </GreenButton>
                    <SectionGap height="80px" />
                    <OptionZeroLogo />
                </SectionContent>
            </SectionBackground>
        </SectionBackgroundGradient>
    );
};

export default ContactUsSection;
