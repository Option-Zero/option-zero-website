import * as React from 'react';
import styled from '@emotion/styled';

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const menuItems = [
    { title: 'Services', anchor: '#service-section' },
    { title: 'About Us', anchor: '#about-section' },
    { title: 'Reviews', anchor: '#review-section' },
];

const HamburgerMenu = styled.button`
    display: flex;
    border: 0;
    color: white;
    background-color: transparent;
`;

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
            }}
        >
            <Toolbar disableGutters sx={{ display: 'flex' }}>
                <img
                    src="/optionzero-logo.png"
                    alt="option zero logo"
                    width="150px"
                    height="auto"
                />
                {/* hamburger button*/}
                <Box
                    sx={{
                        flexGrow: 1,
                        display: { xs: 'flex', md: 'none' },
                        justifyContent: 'flex-end',
                    }}
                >
                    <HamburgerMenu onClick={handleOpenNavMenu} style={{ color: 'white' }}>
                        <MenuIcon />
                    </HamburgerMenu>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {menuItems.map((item) => (
                            <MenuItem key={item} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{item.title}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                {/* expanded menu */}
                <Box
                    sx={{
                        flexGrow: 1,
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'flex-end',
                    }}
                >
                    {menuItems.map((item) => (
                        <Button
                            key={item}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {item.title}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
export default ResponsiveAppBar;
