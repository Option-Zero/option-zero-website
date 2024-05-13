import React from 'react';
// import PropTypes from 'prop-types';

import Carousel from 'react-material-ui-carousel';

import styled from '@emotion/styled';
import { Card } from '@mui/material';

const REVIEWS = [
    {
        name: 'James Regulinski',
        position: 'CTO, Carbon Collective',
        portrait: ['reviewers/JamesRegulinski.jpeg'],
        review: 'Jaime and Jason are a stellar team. They were instrumental in building and running our highly collaborative team and kept us laser-focused on our top strategic priorities. If you want a team to help you figure out where you need to go and get you there fast, you want Jaime and Jason.',
    },
    {
        name: 'Nick Reavill',
        position: 'CTO, Commons',
        portrait: ['reviewers/NickReavill.jpeg'],
        review: 'We hired Option Zero to clean up our python data pipeline. They delivered exactly what I wanted - the codebase is less terrifying now! They required minimal oversight, operated as an independent unit, and communicated their work clearly and concisely.',
    },
    {
        name: 'Shannon Bloemker',
        position: 'CEO, Energy Raven',
        portrait: ['reviewers/ShannonBloemker.jpeg'],
        review: '"Option Zero didn’t just fulfill our immediate software needs; they equipped us to thrive independently. I highly recommend them to anyone in the climate space looking for a reliable, mission aligned, and adaptable technical partner. Their contribution was a key factor in our success, and I’m so glad we found them."',
    },
    {
        name: 'Tom Abeles',
        position: 'CEO, Uprope',
        portrait: ['reviewers/TomAbeles.jpeg'],
        review: 'Jason is...perhaps the strongest developer I have worked with.',
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
];

const Portrait = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 30px;
`;

const ReviewCard = styled(Card)(() => ({
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 60px',
    padding: '30px',
}));

const ReviewerInfoContainer = styled.div`
    display: flex;
    align-items: center;
    min-height: 100%;
`;

const ReviewerNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 100%;
    margin: 0 10px;
    padding: 0;
`;

const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 600px;
`;

const StyledCarousel = styled(Carousel)(() => ({
    alignItems: 'center',
    width: '500px',
}));

//I would love to know how to move the Carousel props to another const but 80/20
const ReviewsSection = () => {
    return (
        <CarouselContainer>
            <StyledCarousel
                autoPlay={false}
                animation="slide"
                navButtonsProps={{
                    style: {
                        padding: '10px', // 1
                        color: 'blue', // 3
                        opacity: '0.2',
                    },
                }}
            >
                {REVIEWS.map((review, i) => (
                    <ReviewCard key={i}>
                        <p>{review.review}</p>
                        <ReviewerInfoContainer>
                            {review.portrait.map((image, j) => (
                                <Portrait key={j} src={image} alt={review.name}></Portrait>
                            ))}
                            <ReviewerNameContainer>
                                <h2>{review.name}</h2>
                                <p style={{ margin: 0 }}>{review.position}</p>
                            </ReviewerNameContainer>
                        </ReviewerInfoContainer>
                    </ReviewCard>
                ))}
            </StyledCarousel>
        </CarouselContainer>
    );
};

export default ReviewsSection;
