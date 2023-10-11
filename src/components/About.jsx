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
                        my:4,
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet excepturi perspiciatis eligendi nobis illum. Aliquam assumenda asperiores dicta numquam ipsam voluptates eum beatae, nobis id repellat soluta cumque. Nesciunt, in.
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