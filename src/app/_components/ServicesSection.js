import React from 'react';

import styled from '@emotion/styled';
import { SectionContent } from './Section.js';
import { GreenButton } from './Button.js';
import { MAX_CONTENT_WIDTH } from '../Styles/Styles.js';
import { Medium_grey } from '../Styles/Colors.js';

const ServiceCardDescription = styled.p`
    color: ${Medium_grey};
    margin-bottom: 10px;
`;

const ServiceCard = ({ className, title, description, icon }) => {
    return (
        <div className={className}>
            <img src={icon} alt={icon} />
            <h4>{title}</h4>
            <ServiceCardDescription>{description}</ServiceCardDescription>
        </div>
    );
};

// thinking about adding a middle breakpoint to either fit 4 across or switch to 2x2 early
// it looks weird with 3 and 1
const StyledServiceCard = styled(ServiceCard)`
    width: 275px;
    height: 325px;
    min-height: 0;
    min-width: 0;
    @media (max-width: 750px) {
        width: auto;
        height: auto;
    }
    box-sizing: border-box;
    border: 1px solid rgba(100, 111, 121, 0.12);
    border-radius: 12px;
    margin: 10px;
    padding: 20px;
`;

const ServiceCardContainer = styled(SectionContent)`
    flex-wrap: wrap;
    margin-top: 20px;
    margin-bottom: 40px;
`;

const ServicesSectionDescription = styled.p`
    text-align: center;
    max-width: ${MAX_CONTENT_WIDTH * 0.5}px;
    font-weight: 400;
`;

const SERVICES = [
    {
        title: 'Software Strategy',
        icon: 'icons/FourCircles_Icon.svg',
        description:
            "You have a vision for your business. Now you need the software to bring it to life. We'll help you define your software needs and create a roadmap for long-term impact.",
    },
    {
        title: 'Full-stack Implementation',
        icon: 'icons/FolderCheck_Icon.svg',
        description:
            "Focus on what your business does best; let us handle the programming. We'll build your first prototype, tackle that side project, and create a scalable codebase for future development.",
    },
    {
        title: 'Data Foundations',
        icon: 'icons/Data_Icon.svg',
        description:
            "Your data is a competitive advantage, but only if you know how to put it to work. We'll architect data pipelines to collect and process your data and use it to accelerate your growth.",
    },
    {
        title: 'Team Building',
        icon: 'icons/Triangle_Icon.svg',
        description:
            "Turn your in-house software team into an engine for growth, or keep it lean with on-demand resources. We'll help you build a recruitment pipeline, develop a strategy-driven culture, and position your team for success.",
    },
];

const ServicesSection = () => {
    return (
        <SectionContent column padding>
            <h3> What We Do </h3>
            <ServicesSectionDescription>
                We do software strategy, implementation, data foundations, and team-building for
                companies making a difference on climate change
            </ServicesSectionDescription>
            <ServiceCardContainer>
                {SERVICES.map((service, index) => (
                    <StyledServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                    ></StyledServiceCard>
                ))}
            </ServiceCardContainer>
            <GreenButton as="a" href="#contact-section">
                [ Work With Us ]
            </GreenButton>
        </SectionContent>
    );
};

export default ServicesSection;
