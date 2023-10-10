import { AppBar, Box, Link, List, ListItem, Toolbar, Typography, Button, Drawer, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMobileMenu = () => setMobileMenu(!mobileMenu);

    return (
        <AppBar
        sx={{
            backgroundColor: "transparent",
            display: "flex",
            px: 5,
            py: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            position: "absolute",
            top: "0",
            left: "0",
            maxWidth: "md"
        }}
        >
            <Toolbar>
                <Typography variant='h5'
                    sx={{
                        color: "White: hsl(0, 0%, 100%)",
                        fontFamily: "'Alata', sans-serif;",
                        display: "flex",
                    }}
                >
                    room
                </Typography>
            </Toolbar>
            <Box
            sx={{
                display: {
                    xs: "none",
                    sm: "flex",
                }
            }}
            >
                <List
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 0.5,
                    }}
                >
                    <ListItem>
                        <Link
                        underline='none'
                        sx={{
                            color: "hsl(0, 0%, 100%)",
                            fontFamily: "'Alata', sans-serif;",
                            textTransform: "capitalize",
                            fontSize: "1rem",
                            "&:hover": {
                                borderBottom: "3px sl(0, 0%, 100%)",
                                cursor: "pointer",
                            }
                        }}
                        >
                            home
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                        underline='none'
                        sx={{
                            color: "hsl(0, 0%, 100%)",
                            fontFamily: " 'Josefin Sans', sans-serif",
                            textTransform: "capitalize",
                            fontSize: "1rem",
                            "&:hover": {
                                textDecoration: "underline",
                                cursor: "pointer",
                            }
                        }}
                        >
                            shop
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                        underline='none'
                        sx={{
                            color: "hsl(0, 0%, 100%)",
                            fontFamily: " 'Josefin Sans', sans-serif",
                            textTransform: "capitalize",
                            fontSize: "1rem",
                            "&:hover": {
                                textDecoration: "underline",
                                cursor: "pointer",
                            }
                        }}
                        >
                            about
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                        underline='none'
                        sx={{
                            color: "hsl(0, 0%, 100%)",
                            fontFamily: " 'Josefin Sans', sans-serif",
                            textTransform: "capitalize",
                            fontSize: "1rem",
                            "&:hover": {
                                textDecoration: "underline",
                                cursor: "pointer",
                            }
                        }}
                        >
                            contact
                        </Link>
                    </ListItem>
                </List>
            </Box>
            <Button
                    sx={{
                        display: {
                            xs: "flex",
                            sm: "none",
                            color: "#fff"
                        },
                    }}
                    onClick={toggleMobileMenu}
                >
                    {
                        mobileMenu? 
                        <CloseIcon/>
                        :<MenuIcon/>
                    }
                </Button>
                <Drawer
                anchor='top'
                open={mobileMenu}
                onClose={()=>setMobileMenu(false)}
                sx={{
                    position: "relative",
                    display: {
                        xs: 'flex',
                        sm: "none",
                    },
                }}
                >
                    <Box
                    sx={{
                    display: {
                        xs: 'flex',
                        sm: "none",
                    },
                    flexDirection: "column",
                    backgroundColor: "hsl(0, 0%, 0%)",
                    position: "relative",
                    pt: 3,
                    width: "100vw",
                }}
                    >
                    <Box
                    role="presentation"
                    onClick={()=>setMobileMenu(false)}
                    onKeyDown={()=>setMobileMenu(false)}
                    >
                        <Container
                        disableGutters
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            px: 2,
                            }}
                        >
                            <Typography
                            sx={{
                                fontFamily: "'League Spartan', sans-serif",
                                display: "flex",
                                fontWeight: '700',
                                color: "hsl(0, 0%, 100%)",
                                }}
                            >
                                room
                            </Typography>
                            <Button
                            variant='text'
                            onClick={() =>setMobileMenu(false)}
                            sx={{color: "hsl(0, 0%, 100%)",}}
                            >
                                <CloseIcon/>
                            </Button>
                        </Container>
                        <Container
                        disableGutters
                        sx={{
                            display: "felx",
                            px:1,
                            alignContent: "flex-start",
                            flexDirection: "column",
                            gap: 2,
                        }}
                        >
                            <List>
                                <ListItem>
                                    <Link href="#"
                                    underline='none'
                                    sx={{
                                        fontsize: "1.125rme",
                                        color: "hsl(0, 0%, 100%)",
                                    }}
                                    >
                                        home
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="#"
                                    underline='none'
                                    sx={{
                                        textTransform:"uppercase",
                                        fontsize: "1.125rme",
                                        color: "hsl(0, 0%, 100%)",
                                    }}
                                    >
                                        shop
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="#"
                                    underline='none'
                                    sx={{
                                        textTransform:"uppercase",
                                        fontsize: "1.125rme",
                                        color: "hsl(0, 0%, 100%)",
                                    }}
                                    >
                                        about
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="#"
                                    underline='none'
                                    sx={{
                                        textTransform:"uppercase",
                                        fontsize: "1.125rme",
                                        color: "hsl(0, 0%, 100%)",
                                    }}
                                    >
                                        contact
                                    </Link>
                                </ListItem>
                            </List>
                        </Container>
                    </Box>
                    </Box>
                </Drawer>
        </AppBar>
    )
}

export default Navbar;