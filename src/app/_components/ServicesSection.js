import React from 'react';
import styled from '@emotion/styled';

const ServiceCard = ({ className, title, description, iconurl }) => {
    return (
        <div className={className}>
            <div>{title}</div>
            <div>{description}</div>
            <div>{iconurl}</div>
        </div>
    );
};

const StyledServiceCard = styled(ServiceCard)`
    color: hotpink;
`;

const SERVICES = [
    {
        title: 'Software Strategy',
        icon: 'tbd',
        description:
            "You have a vision for your business. Now you need the software to bring it to life. We'll help you define your software needs and create a roadmap for long-term impact.",
    },
    {
        title: 'Full-stack Implementation',
        icon: 'tbd',
        description:
            "Focus on what your business does best; let us handle the programming. We'll build your first prototype, tackle that side project, and create a scalable codebase for future development.",
    },
    {
        title: 'Data Foundations',
        icon: 'tbd',
        description:
            "Your data is a competitive advantage, but only if you know how to put it to work. We'll architect data pipelines to collect and process your data and use it to accelerate your growth.",
    },
    {
        title: 'Team Building',
        icon: 'tbd',
        description:
            "Turn your in-house software team into an engine for growth, or keep it lean with on-demand resources. We'll help you build a recruitment pipeline, develop a strategy-driven culture, and position your team for success.",
    },
];

const ServicesSection = () => {
    return (
        <>
            <div> What We Do </div>
            <div>
                {' '}
                We do software strategy, implementation, data foundations, and team-building for
                companies making a difference on climate change
            </div>

            {SERVICES.map((service, index) => (
                <StyledServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                ></StyledServiceCard>
            ))}
            <hr />
        </>
    );
};

export default ServicesSection;
