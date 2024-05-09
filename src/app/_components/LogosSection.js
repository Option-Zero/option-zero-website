import React from 'react';

import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';

// would be nice to read the filenames from public/logos but
// it's confusing and not 80/20
const LOGOS = [
    {
        filename: 'logos/COMMONS-logo.png',
        alt: 'Commons logo',
    },
    {
        filename: 'logos/doterra-logo.svg',
        alt: 'Terra.do logo',
    },
    {
        filename: 'logos/Energy_Raven_Logo.jpg',
        alt: 'Energy Raven logo',
    },
    {
        filename: 'logos/Freight+Farms+Logo_Web-01.png',
        alt: 'Freight Farms logo',
    },
    {
        filename: 'logos/NYState-logo.png',
        alt: 'New York State logo',
    },
    {
        filename: 'logos/power-dcity-logo.png',
        alt: 'Power-d City logo',
    },
    {
        filename: 'logos/CYLogo.png',
        alt: 'Carbon Yield logo',
    },
    {
        filename: 'logos/hitag-logo.png',
        alt: 'HiTag logo',
    },
];

const LogoImg = ({ className, url, alt }) => {
    return <img className={className} src={url} alt={alt}></img>;
};

const StyledLogoImg = styled(LogoImg)`
    width: 60%;
    height: auto;
    object-fit: cover;
    filter: grayscale(100%);
    opacity: 0.5;
`;

const StyledGridContainer = styled.div`
    justify-content: center;
    @media (max-width: 600px) {
        margin: 40px 5%;
    }
    @media (max-width: 900px) {
        margin: 40px 10%;
    }
    @media (min-width: 901px) {
        margin: 40px 15%;
    }
`;

const StyledTitle = styled.h4`
    color: var(--dark-grey);
    text-align: center;
    text-transform: uppercase;
`;

const LogosSection = () => {
    return (
        <>
            <StyledTitle>Past Clients</StyledTitle>
            <StyledGridContainer>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    {LOGOS.map((logo, index) => (
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
            </StyledGridContainer>
        </>
    );
};

export default LogosSection;
