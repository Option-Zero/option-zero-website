import React from 'react';
import styled from '@emotion/styled';

const Banner = styled.div`
    alt: "Green mountain range";
    position: relative;
    display: block;
    background-image: url("/HeaderBackground.png");
    background-position: 50% 80%;
    background-repeat: repeat, no-repeat;
    background-size: auto, cover;
    background-attachment: scroll, scroll;
    background-clip: border-box;
    padding: 20px 80px 20px 30px;
    min-height: 0px;
    }
`;

const HeaderContainer = styled.div`
    display: block;
    max-width: 1200px;
    aspect-ratio: auto;
`;

const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 50px;
    max-width: 50%;
`;

const Title = styled.h1`
    padding-top: 20px;
    padding-bottom: 25px;
    min-width: 620px;
    color: var(--white);
    letter-spacing: -2px;
    font-family: Rubik, sans-serif;
    font-size: 78px;
    font-weight: 400;
    line-height: 80px;
    display: flex;
`;

const Subtitle = styled.p`
    color: var(--white);
`;

const HeaderSection = () => {
    return (
        <>
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
        </>
    );
};

export default HeaderSection;
