import React from 'react';

import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';
import { Medium_grey } from '../Styles/Colors';
import { SectionBackground, SectionContent } from './SharedComponents';

// would be nice to read the filenames from public/logos but
// it's confusing and not 80/20
const CLIENTLOGOS = [
    { filename: 'client_logos/COMMONS-logo.png', alt: 'Commons logo' },
    { filename: 'client_logos/doterra-logo.svg', alt: 'Terra.do logo' },
    { filename: 'client_logos/Energy_Raven_Logo.jpg', alt: 'Energy Raven logo' },
    { filename: 'client_logos/Freight+Farms+Logo_Web-01.png', alt: 'Freight Farms logo' },
    { filename: 'client_logos/NYState-logo.png', alt: 'New York State logo' },
    { filename: 'client_logos/power-dcity-logo.png', alt: 'Power-d City logo' },
    { filename: 'client_logos/CYLogo.png', alt: 'Carbon Yield logo' },
    { filename: 'client_logos/hitag-logo.png', alt: 'HiTag logo' },
];

const EMPLOYERLOGOS = [
    { filename: 'employer_logos/convoy-logo.png', alt: 'Convoy logo' },
    { filename: 'employer_logos/energy-savvy-logo.png', alt: 'Energy Savvy logo' },
    { filename: 'employer_logos/meta-logo.png', alt: 'Meta logo' },
    { filename: 'employer_logos/microsoft-logo.png', alt: 'Microsoft logo' },
    { filename: 'employer_logos/osmo-logo.png', alt: 'Osmo logo' },
    { filename: 'employer_logos/synapse-logo.png', alt: 'Synapse logo' },
];

const LogoImg = ({ className, url, alt }) => {
    return <img className={className} src={url} alt={alt}></img>;
};

const StyledLogoImg = styled(LogoImg)`
    margin-bottom: 15px;
    width: 60%;
    height: auto;
    object-fit: cover;
    filter: grayscale(100%);
    opacity: 0.5;
`;

const StyledTitle = styled.h4`
    color: ${Medium_grey};
    text-transform: uppercase;
    padding-bottom: 30px;
`;

// To change the layout of the items in the grid, look for
// e.g. `item xs={6} sm={4} lg={3}`
// The xs, sm, lg represent the width of the screen
// The value represents the number of columns out of 12 that each item should take up
const LogosSection = () => {
    return (
        <SectionBackground>
            <SectionContent column padding>
                <StyledTitle>Past Clients</StyledTitle>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    {CLIENTLOGOS.map((logo, index) => (
                        <Grid item xs={6} sm={4} lg={3} key={index} justifyContent="center">
                            <Box display="flex" justifyContent="center">
                                <StyledLogoImg
                                    key={index}
                                    url={logo.filename}
                                    alt={logo.alt}
                                ></StyledLogoImg>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </SectionContent>
            <SectionContent column padding style={{ paddingTop: 0 }}>
                <StyledTitle>Past Employers</StyledTitle>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    {EMPLOYERLOGOS.map((logo, index) => (
                        <Grid item xs={6} sm={4} lg={4} key={index} justifyContent="center">
                            <Box display="flex" justifyContent="center">
                                <StyledLogoImg
                                    key={index}
                                    url={logo.filename}
                                    alt={logo.alt}
                                ></StyledLogoImg>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </SectionContent>
        </SectionBackground>
    );
};

export default LogosSection;
