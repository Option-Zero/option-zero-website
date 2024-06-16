import React from 'react';

import styled from '@emotion/styled';

import { Medium_grey } from '../Styles/Colors';
import { ReviewCard } from './ReviewCard';
import { SectionContent } from './Section';
import { Header4 } from '../Styles/Typography';

const REVIEWS = [
    {
        name: 'Nick Reavill',
        position: 'CTO, Commons',
        portrait: ['reviewers/NickReavill.jpeg'],
        quote: '"We hired Option Zero to clean up our python data pipeline. They delivered exactly what I wanted - the codebase is less terrifying now! They required minimal oversight, operated as an independent unit, and communicated their work clearly and concisely."',
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
];

const StyledTitle = styled(Header4)`
    color: ${Medium_grey};
    text-transform: uppercase;
    padding-bottom: 30px;
`;

const ReviewsSection = () => {
    return (
        <SectionContent id="reviews-section" padding column>
            <StyledTitle>our clients say</StyledTitle>
            {/* <StyledCarousel data={REVIEWS} /> */}
            <SectionContent style={{ alignItems: 'flex-start', flexWrap: 'wrap' }}>
                {REVIEWS.map((item, index) => {
                    return <ReviewCard key={index} info={item}></ReviewCard>;
                })}
            </SectionContent>
        </SectionContent>
    );
};

export default ReviewsSection;
