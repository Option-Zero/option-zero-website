import React from 'react';
import styled from '@emotion/styled';

const StyledSectionWrapper = styled.div`
    background-color: var(--cream);
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
`;

const AboutUsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 30px;
    max-width: var(--page-width);
    @media screen and (max-width: 800px) {
        flex-wrap: wrap;
    }
`;

const ColoredButton = styled.button`
    background-color: transparent;
    color: var(--logo-green);
    padding: 0;
    &:hover {
        color: var(--dark-grey);
        background-color: var(--cream);
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
    margin-bottom: 40px;
    &:hover {
        background-image: url('/2023_1_19_JasonandjamieportraitVegas-11.jpg');
    }
`;

const AboutUsSection = () => {
    return (
        <StyledSectionWrapper>
            <AboutUsContainer>
                <JnJPortrait></JnJPortrait>
                <div>
                    <h2> About Us </h2>
                    <p>
                        We are Jason and Jaime Curtis, a husband and wife team. We've built on our
                        combined 20+ years of experience in software and climate solutions to launch
                        Option Zero, the software consultancy for climate companies & initiatives.
                    </p>
                    <p>If your mission is climate resilience, your mission is our mission.</p>
                    <ColoredButton> [ Work With Us ]</ColoredButton>
                </div>
            </AboutUsContainer>
        </StyledSectionWrapper>
    );
};

export default AboutUsSection;
