import React from 'react';

import styled from '@emotion/styled';
import { AnchorButton } from './SharedComponents.js';

const StyledContactUsSection = styled.div`
    display: block;
    background-color: #062f40;
    background-image: radial-gradient(
        circle farthest-corner at 0% 0%,
        rgba(39, 211, 116, 0.3),
        var(--dark-blue) 24%
    );
    filter: blur();
    margin-top: 40px;
    padding: 100px 40px 40px;
    line-height: 24px;
    box-sizing: border-box;
    background-size: auto, cover;
`;

const StyledTextContainer = styled.div`
    min-width: 600px;
    margin-bottom: 40px;
`;

const StyledTitle = styled.div`
    font-family: Rubik, sans-serif;
    font-size: 50px;
    font-weight: 500;
    line-height: 62px;
`;

const GreenTitle = styled(StyledTitle)`
    color: var(--logo-green);
`;

const WhiteTitle = styled(StyledTitle)`
    color: var(--white);
`;

const WhiteSubtitle = styled.div`
    color: var(--white);
    margin-top: 20px;
    font-weight: 300;
`;
const ContactUsSection = () => {
    return (
        <>
            <StyledContactUsSection>
                <StyledTextContainer>
                    <GreenTitle> Have a project? </GreenTitle>
                    <WhiteTitle> Let's work together! </WhiteTitle>
                    <WhiteSubtitle> We would love to hear from you! </WhiteSubtitle>
                </StyledTextContainer>
                <AnchorButton> [ Submit ]</AnchorButton>
            </StyledContactUsSection>
        </>
    );
};

export default ContactUsSection;
