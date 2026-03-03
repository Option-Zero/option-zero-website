'use client';

import React from 'react';

import styled from '@emotion/styled';
import { Box, Grid, Tooltip } from '@mui/material';
import { Dark_blue, Logo_green, Medium_grey } from '../Styles/Colors';
import { SectionBackground, SectionContent } from './Section';
import { Header4 } from '../Styles/Typography';

const CLIENTLOGOS = [
    {
        filename: 'logos/COMMONS-logo.png',
        alt: 'Commons logo',
        name: 'Commons',
        href: 'https://www.thecommons.earth/',
        description:
            'We cleaned up their Python data pipeline, delivering a less terrifying codebase with minimal oversight.',
    },
    {
        filename: 'logos/doterra-logo.svg',
        alt: 'Terra.do logo',
        name: 'Terra.do',
        href: 'https://www.terra.do/',
        description:
            'A climate education platform on a mission to get 100 million people working on climate by 2030.',
    },
    {
        filename: 'logos/Energy_Raven_Logo.jpg',
        alt: 'Energy Raven logo',
        name: 'Energy Raven',
        href: 'https://energyraven.com/',
        description:
            'We built their software foundation, equipping them to thrive independently as an AI-powered home energy analysis service.',
    },
    {
        filename: 'logos/Freight+Farms+Logo_Web-01.png',
        alt: 'Freight Farms logo',
        name: 'Freight Farms',
        href: 'https://www.freightfarms.com/',
        description:
            'A pioneer in container farming, manufacturing hydroponic systems inside freight containers for year-round local food production.',
    },
    {
        filename: 'logos/NYState-logo.png',
        alt: 'New York State logo',
        name: 'NYSERDA',
        href: 'https://www.nyserda.ny.gov/',
        description:
            "New York State's energy research authority, driving clean energy innovation and reducing fossil fuel reliance.",
    },
    {
        filename: 'logos/CYLogo.png',
        alt: 'Carbon Yield logo',
        name: 'Carbon Yield',
        href: 'https://carbon-yield.com/',
        description:
            'We tackled their complex data challenges and created a roadmap for platform growth in agricultural carbon markets.',
    },
    {
        filename: 'logos/INI-logo.png',
        alt: 'Important, Not Important logo',
        name: 'Important, Not Important',
        href: 'https://www.importantnotimportant.com/',
        description:
            'A newsletter and podcast covering the science news impacting humanity — from climate to health to AI ethics.',
    },
    // { filename: 'logos/LevelTenEnergy-logo.png', alt: 'LevelTen Energy logo' }, // They're not actually our client unfortunately
    {
        filename: 'logos/hitag-logo.png',
        alt: 'HiTag logo',
        name: 'HiTag',
        description:
            'An innovative climate tech startup we partnered with on software development.',
    },
    {
        filename: 'logos/power-dcity-logo.png',
        alt: 'Power-d City logo',
        name: 'Power-d City',
        href: 'https://www.power-d.city/',
        description:
            'A data analytics platform helping cities track progress toward their climate, energy, and sustainability goals.',
    },
    {
        filename: 'logos/9zero-logo-horizontal.png',
        alt: '9Zero Climate Innovation Hub logo',
        name: '9Zero',
        href: 'https://9zero.com/',
        description:
            'A climate innovation hub and coworking community for founders, investors, and engineers driving climate action.',
    },
    {
        filename: 'logos/carbon-collective-logo-green.webp',
        alt: 'Carbon Collective logo',
        name: 'Carbon Collective',
        href: 'https://www.carboncollective.co/',
        description:
            'We helped build and run their team, keeping them laser-focused on strategic priorities as a climate-focused investment advisor.',
    },
    {
        filename: 'logos/interconnection-fyi-logo.png',
        alt: 'Interconnection.fyi logo',
        name: 'Interconnection.fyi',
        href: 'https://www.interconnection.fyi/',
        description:
            'A data platform tracking 30,000+ energy interconnection queue requests across U.S. ISOs and utilities.',
    },
];

const EMPLOYERLOGOS = [
    {
        filename: 'logos/convoy-logo.png',
        alt: 'Convoy logo',
        name: 'Convoy',
        href: 'https://convoy.com/',
        description:
            'A digital freight network that used technology to match shippers with truckers, valued at $3.8B at its peak.',
    },
    {
        filename: 'logos/energy-savvy-logo.png',
        alt: 'Energy Savvy logo',
        name: 'EnergySavvy',
        href: 'https://uplight.com/',
        description:
            'A software company helping utilities modernize energy efficiency programs, now part of Uplight.',
    },
    {
        filename: 'logos/meta-logo.png',
        alt: 'Meta logo',
        name: 'Meta',
        href: 'https://about.meta.com/',
        description: 'The parent company of Facebook, Instagram, and WhatsApp.',
    },
    {
        filename: 'logos/microsoft-logo.png',
        alt: 'Microsoft logo',
        name: 'Microsoft',
        href: 'https://www.microsoft.com/',
        description:
            'A global technology company developing Windows, Office, Azure, and AI services.',
    },
    {
        filename: 'logos/osmo-logo.png',
        alt: 'Osmo logo',
        name: 'Osmo',
        href: 'https://www.osmobot.com/',
        description:
            'A climate tech startup developing low-cost IoT water quality monitoring sensors for aquaculture.',
    },
    {
        filename: 'logos/synapse-logo.png',
        alt: 'Synapse logo',
        name: 'Synapse Energy Economics',
        href: 'https://www.synapse-energy.com/',
        description:
            'A research and consulting firm specializing in energy, economics, and environmental analysis.',
    },
];

const LogoImage = ({ className, url, alt }) => {
    return <img className={className} src={url} alt={alt} />;
};

const StyledLogo = styled(LogoImage)`
    width: 60%;
    max-height: 11em;
    object-fit: contain;
    filter: grayscale(100%);
    opacity: 0.5;
    transition: all 0.3s ease;
`;

const LogoLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px;
    border-radius: 8px;
    transition: all 0.3s ease;
    min-height: 120px;

    &:hover img {
        filter: grayscale(0%);
        opacity: 1;
    }
`;

const TooltipContent = styled.div`
    padding: 4px 0;
`;

const TooltipName = styled.div`
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 4px;
    color: #fff;
`;

const TooltipDescription = styled.div`
    font-size: 13px;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 8px;
`;

const TooltipLink = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: ${Logo_green};
`;

const StyledTitle = styled(Header4)`
    color: ${Medium_grey};
    text-transform: uppercase;
    padding-bottom: 30px;
`;

const tooltipStyles = {
    tooltip: {
        sx: {
            backgroundColor: Dark_blue,
            color: '#fff',
            fontSize: '13px',
            maxWidth: 280,
            padding: '12px 16px',
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
            '& .MuiTooltip-arrow': {
                color: Dark_blue,
            },
        },
    },
};

const LogoWithTooltip = ({ logo }) => {
    const content = (
        <TooltipContent>
            <TooltipName>{logo.name}</TooltipName>
            {logo.description && <TooltipDescription>{logo.description}</TooltipDescription>}
            {logo.href && <TooltipLink>Visit {logo.name} &rarr;</TooltipLink>}
        </TooltipContent>
    );

    const logoImg = <StyledLogo url={logo.filename} alt={logo.alt} />;

    return (
        <Tooltip
            title={content}
            arrow
            enterDelay={200}
            leaveDelay={200}
            componentsProps={tooltipStyles}
        >
            {logo.href ? (
                <LogoLink
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${logo.name}`}
                >
                    {logoImg}
                </LogoLink>
            ) : (
                <LogoLink as="div">{logoImg}</LogoLink>
            )}
        </Tooltip>
    );
};

// To change the layout of the items in the grid, look for
// e.g. `item xs={6} sm={4} lg={3}`
// The xs, sm, lg represent the width of the screen
// The value represents the number of columns out of 12 that each item should take up
const LogoGrid = ({ logos }) => {
    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            {logos.map((logo, index) => (
                <Grid item key={index} xs={6} sm={4} lg={3} justifyContent="center">
                    <Box display="flex" justifyContent="center">
                        <LogoWithTooltip logo={logo} />
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

const LogosSection = () => {
    return (
        <SectionBackground>
            <SectionContent column padding>
                <StyledTitle>Past Clients</StyledTitle>
                <LogoGrid logos={CLIENTLOGOS} />
            </SectionContent>
            <SectionContent column padding style={{ paddingTop: 0 }}>
                <StyledTitle>Past Employers</StyledTitle>
                <LogoGrid logos={EMPLOYERLOGOS} />
            </SectionContent>
        </SectionBackground>
    );
};

export default LogosSection;
