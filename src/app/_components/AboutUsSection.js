import React from 'react';
import styled from '@emotion/styled';

const AboutUsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 80px 30px;
    background-color: var(--cream);
    position: relative;
    box-sizing: border-box;
    border: 0;
    justify-content: space-between;
    gap: 15px;
`;

const ColoredButton = styled.button`
    background-color: var(--cream);
    color: var(--logo-green);
    padding: 0;
    &:hover {
        color: #32343a;
        background-color: var(--cream);
    }
`;

// i regret my button refactoring choices
const JnJPortrait = styled.button`
    position: relative;
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
    margin: auto;
    &:hover {
        background-image: url('/2023_1_19_JasonandjamieportraitVegas-11.jpg');
    }
`;

const AboutUsTextContainer = styled.div`
    max-width: 50%;
`;

const AboutUsSection = () => {
    return (
        <AboutUsContainer>
            <JnJPortrait></JnJPortrait>
            <AboutUsTextContainer>
                <h2> About Us </h2>
                <p>
                    {' '}
                    We are Jason and Jaime Curtis, a husband and wife team. We've built on our
                    combined 20+ years of experience in software and climate solutions to launch
                    Option Zero, the software consultancy for climate companies & initiatives.
                </p>
                <p>If your mission is climate resilience, your mission is our mission.</p>
                <ColoredButton> [ Work With Us ]</ColoredButton>
            </AboutUsTextContainer>
        </AboutUsContainer>
    );
};

export default AboutUsSection;
