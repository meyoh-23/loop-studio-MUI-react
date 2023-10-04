import { AppBar, Box, Drawer, Link, List, ListItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { useState } from 'react'

const Navbar = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    return (
    <AppBar component="nav"
        pt={3}
        sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems :{
                xs: "center",
            },
            background: "transparent",
            maxWidth: "md",
        }}
    >
        <Box
        sx={{
            display: {
            sm: "none",
            }
        }}
            >
            <MenuIcon
            sx={{
            display: "block",
            cursor: "pointer",
            color: "red",
        }}
        onClick={() => setOpenMobileMenu(true)}
        />
        </Box>
        <Box>
            <Typography color="primary">
                room
            </Typography>
        </Box>
        <Box>
            <List
            sx={{
                display: {
                    xs: "none",
                    sm: "flex",
                },
                gap: 2,
                backgroundColor: "#fff"
            }}>
                <ListItem>
                    <Link href="#" underline='none'>home</Link>
                </ListItem>
                <ListItem>
                    <Link href="#" underline='none'>shop</Link>
                </ListItem>
                <ListItem>
                    <Link href="#" underline='none'>about</Link>
                </ListItem>
                <ListItem>
                    <Link href="#"underline='none'>contacts</Link>
                </ListItem>
            </List>
        </Box>
        <Drawer
        anchor="left"
        open={openMobileMenu}
        onClose={() => setOpenMobileMenu(false)}
        >
            <List
                sx={{
                position: "relative",
                width: 250,
                backgroundColor: "#5243C2",
                height: "50%",
                py: 3,
                px: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
            }}
            role="presentation"
            onClick={() => setOpenMobileMenu(false)}
            onKeyDown={() => setOpenMobileMenu(false)}
            >
                <ListItem>
                    <Link href="#" underline='none'>home</Link>
                </ListItem>
                <ListItem>
                    <Link href="#" underline='none'>shop</Link>
                </ListItem>
                <ListItem>
                    <Link href="#" underline='none'>about</Link>
                </ListItem>
                <ListItem>
                    <Link href="#"underline='none'>contacts</Link>
                </ListItem>
            </List>
        </Drawer>
    </AppBar>
)
}

export default Navbar;