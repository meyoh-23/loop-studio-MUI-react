import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import aboutDark from './../assets/images/image-about-dark.jpg';
import aboutLight from './../assets/images/image-about-light.jpg';

const About = () => {
    return (
    <Box
    sx={{
        margin:"0",
        padding: "0",
    }}
    >
        <Grid 
        container
        spacing={0}
        >
            <Grid
            item
            xs={12}
            md={4}
            height="300px"
            sx={{
                backgroundImage: `url(${aboutDark})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            >
            
            </Grid>
            <Grid
            item
            xs={12}
            md={4}
            bgcolor="primary"
            >
                <Container
                sx={{
                    textAlign: "left",
                    py: 2,
                    px: "10px",
                }}
                >
                    <Typography variant='h4'
                    pb={2}
                    sx={{
                        display: "block",
                        my:1.4,
                        fontFamily: "'League Spartan', sans-serif",
                        fontWeight: "600",
                        color: "hsl(0, 0%, 0%)",
                    }}
                    >
                        about our furniture
                    </Typography>
                    <Typography variant='p'
                    sx={{
                        fontFamily: "'League Spartan', sans-serif",
                        fontWeight: "600",
                        color: "hsl(0, 0%, 63%)",
                        fontSize: "0.9375rem",
                        lineHeight: "1.25rem",
                    }}
                    >
                        Our multifunctional collection blends design and function to suit your individual taste.
                        Make each room unique, or pick a cohesive theme that best express your interests and what
                        inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                        or anything in between. Product specialists are available to help you create your dream space.
                    </Typography>
                </Container>
            </Grid>
            <Grid
            item
            xs={12}
            md={4}
            height="300px"
            sx={{
                backgroundImage: `url(${aboutLight})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            >
                
            </Grid>
        </Grid>
    </Box>
)}

export default About;