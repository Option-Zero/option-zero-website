import React from 'react';

import styled from '@emotion/styled';

import { GreenButton } from './Button.js';
import ResponsiveAppBar from './AppBar.js';
import { SectionBackground, SectionContent } from './Section.js';

const Banner = styled(SectionBackground)`
    background-image: url('/HeaderBackground.png');
    background-position: 50% 80%;
    background-clip: border-box;
    background-size: cover;
`;

const HeaderContainer = styled(SectionContent)`
    justify-content: flex-start;
    align-items: flex-start;
`;

const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 695px;
    width: 100%;
    min-width: 0;
    color: white;
`;

const HeaderSection = () => {
    return (
        <Banner padding>
            <HeaderContainer column>
                <ResponsiveAppBar />
                <HeaderContent>
                    <h1>Modern software for climate tech</h1>
                    <p>
                        We provide personalized, end-to-end software solutions and on-demand
                        consulting to power the next generation of climate tech
                    </p>
                    <GreenButton> [Get Started] </GreenButton>
                </HeaderContent>
            </HeaderContainer>
        </Banner>
    );
};

export default HeaderSection;
