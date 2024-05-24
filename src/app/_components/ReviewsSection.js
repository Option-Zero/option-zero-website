import React from 'react';
// import PropTypes from 'prop-types';

import Slider from 'react-slick';
import styled from '@emotion/styled';

//required for Slider component to function properly
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SectionBackground, SectionContent } from './SharedComponents';

const REVIEWS = [
    {
        name: 'Nick Reavill',
        position: 'CTO, Commons',
        portrait: ['reviewers/NickReavill.jpeg'],
        review: '"We hired Option Zero to clean up our python data pipeline. They delivered exactly what I wanted - the codebase is less terrifying now! They required minimal oversight, operated as an independent unit, and communicated their work clearly and concisely."',
    },
    {
        name: 'Shannon Bloemker',
        position: 'CEO, Energy Raven',
        portrait: ['reviewers/ShannonBloemker.jpeg'],
        review: '"Option Zero didn’t just fulfill our immediate software needs; they equipped us to thrive independently. I highly recommend them to anyone in the climate space looking for a reliable, mission aligned, and adaptable technical partner. Their contribution was a key factor in our success, and I’m so glad we found them."',
    },
    {
        name: 'Sam & Claire',
        position: 'Co-Founders, Carbon Yield',
        portrait: ['reviewers/Claire-headshot.png', 'reviewers/Sam-headshot.png'],
        review: '"Jaime and Jason are astute, efficient, thorough, and incredibly gracious. \
        They jumped into our complex data challenges but did not make them complicated, \
        rather they helped us create a road map for future development that give us as \
        founders confidence that we can navigate the growth and further development of our platform."',
    },
    {
        name: 'James Regulinski',
        position: 'CTO, Carbon Collective',
        portrait: ['reviewers/JamesRegulinski.jpeg'],
        review: 'Jaime and Jason are a stellar team. They were instrumental in building and running our highly collaborative team and kept us laser-focused on our top strategic priorities. If you want a team to help you figure out where you need to go and get you there fast, you want Jaime and Jason.',
    },
    {
        name: 'Tom Abeles',
        position: 'CEO, Uprope',
        portrait: ['reviewers/TomAbeles.jpeg'],
        review: '"Jason is...perhaps the strongest developer I have worked with."',
    },
];

const reviewCardStyles = {
    width: 350,
    padding: 20,
};
const cardCount = 2;
const arrowsOffset = 50;
const sliderWidth =
    (reviewCardStyles.width + reviewCardStyles.padding * 2) * cardCount + arrowsOffset * 2;

const Portrait = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 30px;
`;

const ReviewerNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 10px;
    padding: 0;
`;

const ReviewerInfoContainer = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-end;
    height: auto;
    width: ${reviewCardStyles.width}px;
    gap: 10px;
    justify-content: flex-start;
`;

const ReviewCard = styled.div`
    max-width: ${reviewCardStyles.width}px;
    padding: ${reviewCardStyles.padding}px;
    border-width: 8px;
    border-color: black;
`;

const StyledSlider = styled(Slider)`
    width: ${sliderWidth}px;
    margin: 0;
    padding: 0 ${arrowsOffset}px;
`;

function SliderArrow(props) {
    const { className, onClick, src, alt } = props;
    return (
        <div onClick={onClick} className={`arrow ${className}`}>
            {/**I do not understand how this works */}
            <img src={src} alt={alt} />
        </div>
    );
}

// still need to figure out breakpoints for this
// kinda have a setup with cardNumber
const ReviewsSection = () => {
    const sliderSettings = {
        speed: 1000,
        adaptiveHeight: false,
        infinite: true,
        variableWidth: true,
        nextArrow: <SliderArrow src="icons/icons8-right-48.png" alt="right arrow" />,
        prevArrow: <SliderArrow src="icons/icons8-left-48.png" alt="left arrow" />,
    };

    return (
        <SectionBackground padding>
            <SectionContent column>
                <h3> Reviews </h3>
                <StyledSlider {...sliderSettings}>
                    {REVIEWS.map((review, i) => {
                        return (
                            <ReviewCard key={i}>
                                <p
                                    style={{
                                        padding: '0 20px',
                                        fontStyle: 'italic',
                                        alignSelf: 'flex-start',
                                    }}
                                >
                                    {review.review}
                                </p>
                                <ReviewerInfoContainer>
                                    {review.portrait.map((image, j) => {
                                        return (
                                            <Portrait
                                                key={j}
                                                src={image}
                                                alt={review.name}
                                            ></Portrait>
                                        );
                                    })}
                                    <ReviewerNameContainer>
                                        <h3 style={{ margin: 0 }}>{review.name}</h3>
                                        <p style={{ margin: 0 }}>{review.position}</p>
                                    </ReviewerNameContainer>
                                </ReviewerInfoContainer>
                            </ReviewCard>
                        );
                    })}
                </StyledSlider>
            </SectionContent>
        </SectionBackground>
    );
};

export default ReviewsSection;
