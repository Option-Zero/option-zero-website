import React from 'react';

import styled from '@emotion/styled';
import { AnchorButton } from './SharedComponents.js';

const ServiceCardDescription = styled.p`
    font-size: 15px;
    font-weight: 300;
    line-height: 26px;
    color: var(--medium-grey);
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

const StyledServiceCard = styled(ServiceCard)`
    width: 275px;
    height: 325px;
    min-height: 0;
    min-width: 0;
    @media (max-width: 750px) {
        width: auto;
        height: auto;
    }
    border: 1px solid rgba(100, 111, 121, 0.12);
    border-radius: 12px;
    margin: 10px;
    padding: 20px;
`;

const ServiceCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 40px;
`;

const ServicesSectionDescription = styled.p`
    text-align: center;
    max-width: 700px;
    font-weight: 400;
`;

const StyledServicesSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 100px 0px;
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
        <StyledServicesSection>
            <h2> What We Do </h2>
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
            <AnchorButton> [ Work With Us ] </AnchorButton>
        </StyledServicesSection>
    );
};

export default ServicesSection;
