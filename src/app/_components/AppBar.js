import * as React from 'react';
import styled from '@emotion/styled';

import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { AppBar, Box, Button, Menu, MenuItem, Toolbar } from '@mui/material';
import { OptionZeroLogo } from './Logo';

const navItems = [
    { title: 'Services', anchor: '#services-section' },
    { title: 'About Us', anchor: '#about-section' },
    { title: 'Reviews', anchor: '#reviews-section' },
];

const StyledMenu = styled.button`
    display: flex;
    border: 0;
    color: white;
    background-color: transparent;
`;

const NavLink = ({ item, color }) => {
    return (
        <Link style={{ textDecoration: 'none' }} href={item.anchor} key={item}>
            <Button sx={{ color: color, display: 'block', textDecoration: 'none' }}>
                {item.title}
            </Button>
        </Link>
    );
};

const HamburgerNavMenu = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'flex-end',
            }}
        >
            <StyledMenu onClick={handleOpenNavMenu}>
                <MenuIcon />
            </StyledMenu>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
            >
                {navItems.map((item) => (
                    <MenuItem key={`hamburger-${item.title}`} onClick={handleCloseNavMenu}>
                        <NavLink item={item} color={'black'} />
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};
const HorizontalNavBar = () => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-end',
            }}
        >
            {navItems.map((item) => (
                <NavLink key={item.title} item={item} color={'white'} />
            ))}
        </Box>
    );
};

function ResponsiveAppBar() {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
            }}
        >
            <Toolbar disableGutters sx={{ display: 'flex', margin: '0 40px' }}>
                <OptionZeroLogo />
                <HamburgerNavMenu />
                <HorizontalNavBar />
            </Toolbar>
        </AppBar>
    );
}
export default ResponsiveAppBar;
