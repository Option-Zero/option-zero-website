import React from 'react';

import styled from '@emotion/styled';
import { AnchorButton, SectionBackground, SectionContent } from './SharedComponents.js';
import { Dark_blue, Logo_green } from '../Styles/Colors.js';
import { PAGE_WIDTH } from '../Styles/Styles.js';

const SectionBackgroundGradient = styled(SectionBackground)`
    background-color: ${Dark_blue};
    background-image: radial-gradient(
        circle farthest-corner at 0% 0%,
        rgba(39, 211, 116, 0.3),
        ${Dark_blue} 24%
    );
    filter: blur();
    background-size: auto, cover;
`;

const StyledSectionContent = styled(SectionContent)`
    align-items: flex-start;
    max-width: ${PAGE_WIDTH * 0.5};
`;

const WhiteSubtitle = styled.p`
    color: white;
    margin-top: 20px;
    font-size: 17px;
`;
const ContactUsSection = () => {
    return (
        <>
            <SectionBackgroundGradient padding>
                <StyledSectionContent column>
                    <h2 style={{ color: Logo_green }}> Have a project? </h2>
                    <h2 style={{ color: 'white' }}> Let's work together! </h2>
                    <WhiteSubtitle> We would love to hear from you! </WhiteSubtitle>
                    <AnchorButton style={{ marginTop: '40px' }}> [ Submit ] </AnchorButton>
                </StyledSectionContent>
            </SectionBackgroundGradient>
        </>
    );
};

export default ContactUsSection;
