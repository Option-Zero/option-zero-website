import React from 'react';

import styled from '@emotion/styled';
import { Grid } from '@mui/material';

// would be nice to read the filenames from public/logos but
// it's confusing and not 80/20
const LOGOS = [
    {
        filename: 'logos/COMMONS-logo.png',
        alt: 'Commons logo',
    },
    {
        filename: 'logos/CYLogo.png',
        alt: 'Carbon Yield logo',
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
        filename: 'logos/hitag-logo.png',
        alt: 'HiTag logo',
    },
    {
        filename: 'logos/NYState-logo.png',
        alt: 'New York State logo',
    },
    {
        filename: 'logos/power-dcity-logo.png',
        alt: 'Power-d City logo',
    },
];

const LogoImg = ({ className, url, alt }) => {
    return <img className={className} src={url} alt={alt}></img>;
};

const StyledLogo = styled(LogoImg)`
    width: 50%;
    height: auto;
    object-fit: cover;
    filter: grayscale(100%);
`;

const StyledGridContainer = styled.div`
    margin: 100px;
`;

const LogosSection = () => {
    return (
        <div>
            <h2>Past Clients</h2>
            <StyledGridContainer>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {LOGOS.map((logo, index) => (
                        <Grid item xs={2} sm={4} md={3} key={index}>
                            <StyledLogo key={index} url={logo.filename} alt={logo.alt}></StyledLogo>
                        </Grid>
                    ))}
                </Grid>
            </StyledGridContainer>
        </div>
    );
};

export default LogosSection;
