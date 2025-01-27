import React from 'react';

import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';
import { Medium_grey } from '../Styles/Colors';
import { SectionBackground, SectionContent } from './Section';
import { Header4 } from '../Styles/Typography';

const CLIENTLOGOS = [
    { filename: 'logos/COMMONS-logo.png', alt: 'Commons logo' },
    { filename: 'logos/doterra-logo.svg', alt: 'Terra.do logo' },
    { filename: 'logos/Energy_Raven_Logo.jpg', alt: 'Energy Raven logo' },
    { filename: 'logos/Freight+Farms+Logo_Web-01.png', alt: 'Freight Farms logo' },
    { filename: 'logos/NYState-logo.png', alt: 'New York State logo' },
    { filename: 'logos/CYLogo.png', alt: 'Carbon Yield logo' },
    { filename: 'logos/INI-logo.png', alt: 'Important, Not Important logo' },
    // { filename: 'logos/LevelTenEnergy-logo.png', alt: 'LevelTen Energy logo' }, // They're not actually our client unfortunately
    { filename: 'logos/hitag-logo.png', alt: 'HiTag logo' },
    { filename: 'logos/power-dcity-logo.png', alt: 'Power-d City logo' },
];

const EMPLOYERLOGOS = [
    { filename: 'logos/convoy-logo.png', alt: 'Convoy logo' },
    { filename: 'logos/energy-savvy-logo.png', alt: 'Energy Savvy logo' },
    { filename: 'logos/meta-logo.png', alt: 'Meta logo' },
    { filename: 'logos/microsoft-logo.png', alt: 'Microsoft logo' },
    { filename: 'logos/osmo-logo.png', alt: 'Osmo logo' },
    { filename: 'logos/synapse-logo.png', alt: 'Synapse logo' },
];

const Logo = ({ className, url, alt }) => {
    return <img className={className} src={url} alt={alt}></img>;
};

const StyledLogo = styled(Logo)`
    margin-bottom: 15px;
    width: 60%;
    height: auto;
    object-fit: cover;
    filter: grayscale(100%);
    opacity: 0.5;
`;

const StyledTitle = styled(Header4)`
    color: ${Medium_grey};
    text-transform: uppercase;
    padding-bottom: 30px;
`;

// To change the layout of the items in the grid, look for
// e.g. `item xs={6} sm={4} lg={3}`
// The xs, sm, lg represent the width of the screen
// The value represents the number of columns out of 12 that each item should take up
const LogoGrid = (logos) => {
    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            {logos.logos.map((logo, index) => (
                <Grid item key={index} xs={6} sm={4} lg={3} justifyContent="center">
                    <Box display="flex" justifyContent="center">
                        <StyledLogo url={logo.filename} alt={logo.alt}></StyledLogo>
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
