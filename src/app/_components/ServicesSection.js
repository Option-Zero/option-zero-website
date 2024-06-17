import React from 'react';

import styled from '@emotion/styled';
import { Header3, Header4, Paragraph } from '../Styles/Typography.js';
import { SectionContent, SectionGap } from './Section.js';
import { GreenButton } from './Button.js';
import { BREAKPOINTS, MAX_CONTENT_WIDTH } from '../Styles/Styles.js';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

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

const ServiceCard = ({ className, title, description, icon }) => {
    return (
        <div className={className}>
            <img src={icon} alt={icon} />
            <Header4>{title}</Header4>
            <Paragraph style={{ marginBottom: '10px' }}>{description}</Paragraph>
        </div>
    );
};

const StyledServiceCard = styled(ServiceCard)`
    min-width: 280px;
    margin: 10px;
    height: 325px;
    box-sizing: border-box;
    border: 1px solid rgba(100, 111, 121, 0.12);
    border-radius: 12px;
    padding: 20px;
    @media (max-width: ${BREAKPOINTS.xl}) {
        max-width: 400px;
    }
`;

const ServicesSectionDescription = styled(Paragraph)`
    text-align: center;
    max-width: ${MAX_CONTENT_WIDTH * 0.5}px;
    font-weight: 400;
`;

const ServicesSection = () => {
    return (
        <SectionContent id="services-section" column padding>
            <Header3> What We Do </Header3>
            <ServicesSectionDescription>
                We do software strategy, implementation, data foundations, and team-building for
                companies making a difference on climate change
            </ServicesSectionDescription>
            <Grid container columnSpacing={10} rowSpacing={5} columns={8}>
                {SERVICES.map((service, index) => (
                    <Grid item key={index} xs={8} sm={4} lg={2} justifyContent="center">
                        <Box display="flex" justifyContent="center">
                            <StyledServiceCard
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                            ></StyledServiceCard>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <SectionGap height="80px" />
            <GreenButton as="a" href="#contact-section">
                [ Work With Us ]
            </GreenButton>
        </SectionContent>
    );
};

export default ServicesSection;
