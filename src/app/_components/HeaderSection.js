import React from 'react';

import styled from '@emotion/styled';

const Banner = styled.div`
    display: block;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 30px 20px 80px;
    min-height: 0px;
    box-sizing: border-box;
    background-image: url("/HeaderBackground.png");
    background-position: 50% 80%;
    background-clip: border-box;
    background-size: auto, cover;
    }
`;

const HeaderContainer = styled.div`
    display: flex;
    max-width: var(--page-width);
    box-sizing: border-box;
    justify-content: center;
    margin-top: 60px;
    margin: auto;
    //     @media screen and (min-width: 800px) {
    //         max-width: 60%;
    //     }
    //
`;

const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 0;
`;

const Title = styled.h1`
    padding-top: 20px;
    padding-bottom: 25px;
    color: var(--white);
    letter-spacing: -2px;
    font-family: Rubik, sans-serif;
    font-size: 78px;
    font-weight: 400;
    line-height: 80px;
    display: flex;
    box-sizing: border-box;
    text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
`;

const Subtitle = styled.p`
    color: var(--white);
`;

const HeaderSection = () => {
    return (
        <Banner>
            <HeaderContainer>
                {/* <NavBar></NavBar> */}
                <HeaderContent>
                    <Title>Modern software for climate tech</Title>
                    <Subtitle>
                        We provide personalized, end-to-end software solutions and on-demand
                        consulting to power the next generation of climate tech
                    </Subtitle>
                    <button> [Get Started] </button>
                </HeaderContent>
            </HeaderContainer>
        </Banner>
    );
};

export default HeaderSection;
