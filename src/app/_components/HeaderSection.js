import React from 'react';

import styled from '@emotion/styled';
import { AnchorButton, SectionBackground, SectionContent } from './SharedComponents.js';
import { PAGE_WIDTH } from '../Styles/Styles.js';

const Banner = styled(SectionBackground)`
    align-items: flex-start;
    justify-content: flex-start;
    @media screen and (max-width: ${PAGE_WIDTH}px) {
        align-items: center;
    }
    min-height: 0px;
    width: 100%;
    background-image: url('/HeaderBackground.png');
    background-position: 50% 80%;
    background-clip: border-box;
    background-size: cover;
`;

const HeaderContainer = styled(SectionContent)`
    justify-content: flex-start;
    align-items: flex-start;
    min-width: 0;
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
            <HeaderContainer>
                {/* <NavBar></NavBar> */}
                <HeaderContent>
                    <h1>Modern software for climate tech</h1>
                    <p>
                        We provide personalized, end-to-end software solutions and on-demand
                        consulting to power the next generation of climate tech
                    </p>
                    <AnchorButton> [Get Started] </AnchorButton>
                </HeaderContent>
            </HeaderContainer>
        </Banner>
    );
};

export default HeaderSection;
