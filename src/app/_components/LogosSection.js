'use client';

import React, { useCallback, useRef, useState } from 'react';

import styled from '@emotion/styled';
import { Box, Grid, Popover } from '@mui/material';
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
            'Commons helps consumers skip the greenwashing and make choices that are actually good for the environment. We audited and modernized their Python data pipeline, delivering a more robust and observable system.',
    },
    {
        filename: 'logos/doterra-logo.svg',
        alt: 'Terra.do logo',
        name: 'Terra.do',
        href: 'https://www.terra.do/climate-change-courses/software-for-climate/',
        description:
            'A climate education platform on a mission to get 100 million people working on climate by 2030. We build and maintain their Software for Climate course.',
    },
    {
        filename: 'logos/Energy_Raven_Logo.jpg',
        alt: 'Energy Raven logo',
        name: 'Energy Raven',
        href: 'https://energyraven.com/',
        description:
            "We built Raven's software foundation, equipping them to thrive independently as an AI-powered home energy analysis service.",
    },
    {
        filename: 'logos/Freight+Farms+Logo_Web-01.png',
        alt: 'Freight Farms logo',
        name: 'Freight Farms',
        href: 'https://www.freightfarms.com/',
        description:
            'A pioneer in container farming, manufacturing hydroponic systems inside freight containers for year-round local food production. We built new data integrations for their system.',
    },
    {
        filename: 'logos/NYState-logo.png',
        alt: 'New York State logo',
        name: 'NYSERDA',
        href: 'https://www.nyserda.ny.gov/',
        description:
            "New York State's energy research authority, driving clean energy innovation and reducing fossil fuel reliance. We supported NYSERDA with a major data migration.",
    },
    {
        filename: 'logos/CYLogo.png',
        alt: 'Carbon Yield logo',
        name: 'Carbon Yield',
        href: 'https://carbon-yield.com/',
        description:
            "We maintain and execute Carbon Yield's roadmap for platform growth in agricultural carbon markets.",
    },
    {
        filename: 'logos/INI-logo.png',
        alt: 'Important, Not Important logo',
        name: 'Important, Not Important',
        href: 'https://www.importantnotimportant.com/',
        description:
            'A newsletter and podcast covering the science news impacting humanity — from climate to health to AI ethics. We help INI with new product development.',
    },
    // { filename: 'logos/LevelTenEnergy-logo.png', alt: 'LevelTen Energy logo' }, // They're not actually our client unfortunately
    {
        filename: 'logos/hitag-logo.png',
        alt: 'HiTag logo',
        name: 'HiTag',
        href: 'https://www.tunalab.org/',
        description:
            'We support HiTag track tuna populations worldwide by building the software foundation for their citizen science contributors.',
    },
    {
        filename: 'logos/power-dcity-logo.png',
        alt: 'POWER-D City logo',
        name: 'POWER-D City',
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
            'We support Carbon Collective with their software needs as a climate-focused investment advisor.',
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

const LogoButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
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
    pointer-events: auto;
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

const PopoverLink = styled.a`
    font-size: 12px;
    font-weight: 500;
    color: ${Logo_green};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

/* Hidden link for SEO crawlers — visible <a> with href for each org */
const SeoLink = styled.a`
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
`;

const StyledTitle = styled(Header4)`
    color: ${Medium_grey};
    text-transform: uppercase;
    padding-bottom: 30px;
`;

const popoverPaperStyles = {
    sx: {
        backgroundColor: Dark_blue,
        color: '#fff',
        maxWidth: 280,
        padding: '12px 16px',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
    },
};

const LogoWithPopover = ({ logo }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const closeTimer = useRef(null);
    const openTimer = useRef(null);

    const cancelTimers = useCallback(() => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
        if (openTimer.current) {
            clearTimeout(openTimer.current);
            openTimer.current = null;
        }
    }, []);

    const handleOpen = (e) => {
        cancelTimers();
        setAnchorEl(e.currentTarget);
    };

    const handleHoverOpen = (e) => {
        cancelTimers();
        setAnchorEl(e.currentTarget);
    };

    const handleDelayedClose = useCallback(() => {
        cancelTimers();
        closeTimer.current = setTimeout(() => {
            setAnchorEl(null);
        }, 100);
    }, [cancelTimers]);

    const handleClose = () => {
        cancelTimers();
        setAnchorEl(null);
    };

    return (
        <>
            {logo.href && <SeoLink href={logo.href}>{logo.name}</SeoLink>}
            <LogoButton
                onClick={handleOpen}
                onMouseEnter={handleHoverOpen}
                onMouseLeave={handleDelayedClose}
                role="button"
                aria-label={logo.name}
            >
                <StyledLogo url={logo.filename} alt={logo.alt} />
            </LogoButton>
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                slotProps={{ paper: popoverPaperStyles }}
                disableRestoreFocus
                disableScrollLock
                transitionDuration={0}
                disableAutoFocus
                disableEnforceFocus
                sx={{ pointerEvents: 'none' }}
            >
                <TooltipContent onMouseEnter={cancelTimers} onMouseLeave={handleDelayedClose}>
                    <TooltipName>{logo.name}</TooltipName>
                    {logo.description && (
                        <TooltipDescription>{logo.description}</TooltipDescription>
                    )}
                    {logo.href && (
                        <PopoverLink href={logo.href} target="_blank" rel="noopener noreferrer">
                            Visit {logo.name} &rarr;
                        </PopoverLink>
                    )}
                </TooltipContent>
            </Popover>
        </>
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
                        <LogoWithPopover logo={logo} />
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
