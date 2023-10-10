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
                    py: 10,
                    px: "10px",
                }}
                >
                    <Typography variant='h4'
                    pb={2}
                    >
                        about our furniture
                    </Typography>
                    <Typography variant='p'>
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