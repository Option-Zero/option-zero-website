import React, { useState } from 'react';

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

import styled from '@emotion/styled';

import { Medium_grey } from '../Styles/Colors';
import { BREAKPOINTS } from '../Styles/Styles';
import { ReviewCard } from './ReviewCard';
import { SectionContent } from './Section';

const REVIEWS = [
    {
        name: 'Nick Reavill',
        position: 'CTO, Commons',
        portrait: ['reviewers/NickReavill.jpeg'],
        quote: '"We hired Option Zero to clean up our python data pipeline. They delivered exactly what I wanted - the codebase is less terrifying now! They required minimal oversight, operated as an independent unit, and communicated their work clearly and concisely."',
    },
    {
        name: 'Shannon Bloemker',
        position: 'CEO, Energy Raven',
        portrait: ['reviewers/ShannonBloemker.jpeg'],
        quote: '"Option Zero didn’t just fulfill our immediate software needs; they equipped us to thrive independently. I highly recommend them to anyone in the climate space looking for a reliable, mission aligned, and adaptable technical partner. Their contribution was a key factor in our success, and I’m so glad we found them."',
    },
    {
        name: 'Sam & Claire',
        position: 'Co-Founders, Carbon Yield',
        portrait: ['reviewers/Claire-headshot.png', 'reviewers/Sam-headshot.png'],
        quote: '"Jaime and Jason are astute, efficient, thorough, and incredibly gracious. \
        They jumped into our complex data challenges but did not make them complicated, \
        rather they helped us create a road map for future development that give us as \
        founders confidence that we can navigate the growth and further development of our platform."',
    },
    {
        name: 'James Regulinski',
        position: 'CTO, Carbon Collective',
        portrait: ['reviewers/JamesRegulinski.jpeg'],
        quote: '"Jaime and Jason are a stellar team. They were instrumental in building and running our highly collaborative team and kept us laser-focused on our top strategic priorities. If you want a team to help you figure out where you need to go and get you there fast, you want Jaime and Jason."',
    },
    {
        name: 'Tom Abeles',
        position: 'CEO, Uprope',
        portrait: ['reviewers/TomAbeles.jpeg'],
        quote: '"Jason is...perhaps the strongest developer I have worked with."',
    },
];

const StyledTitle = styled.h4`
    color: ${Medium_grey};
    text-transform: uppercase;
    padding-bottom: 30px;
`;

const ArrowStyles = `
    position: absolute;
    filter: drop-shadow(0px 0px 5px #555);
    color: white;
    width: 2rem; 
    height: 2rem; 
    @media (max-width: ${BREAKPOINTS.sm}){
        width: 1.5rem;
        height: 1.5rem;
    }
    &:hover{
        cursor: pointer;
    }`;

const LeftArrow = styled(BsArrowLeftCircleFill)`
    ${ArrowStyles}
    left: 1rem;
`;

const RightArrow = styled(BsArrowRightCircleFill)`
    ${ArrowStyles}
    right: 1rem;
`;

const Indicators = styled.div`
    display: flex;
    position: absolute;
    bottom: 1rem;
`;
const Indicator = styled.button`
    background-color: white;
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 100%;
    outline: none;
    border: none;
    padding: 0;
    box-shadow: 0px 0px 5px #555;
    margin: 0 0.2rem;
    cursor: pointer;
`;

const Carousel = ({ data, className }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    return (
        <div className={className}>
            <LeftArrow onClick={prevSlide} />
            {data.map((item, idx) => {
                return (
                    <ReviewCard
                        info={item}
                        key={idx}
                        hidden={slide === idx ? {} : { display: 'none' }} //i dont like this but i'll fix it later
                    ></ReviewCard>
                );
            })}
            <RightArrow onClick={nextSlide} />
            <Indicators>
                {data.map((_, idx) => {
                    return (
                        <Indicator
                            key={idx}
                            style={slide === idx ? {} : { backgroundColor: 'grey' }}
                            onClick={() => setSlide(idx)}
                        ></Indicator>
                    );
                })}
            </Indicators>
        </div>
    );
};

const StyledCarousel = styled(Carousel)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
    max-height: fit-content;
    width: 550px;
    max-width: 80%;
    padding: 10px 10% 50px;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 7px #666;
`;

const ReviewsSection = () => {
    return (
        <SectionContent padding column>
            <StyledTitle>our clients say</StyledTitle>
            <StyledCarousel data={REVIEWS} />
        </SectionContent>
    );
};

export default ReviewsSection;
