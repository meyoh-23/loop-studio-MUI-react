import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import data from "./../assets/data";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const HeroSection = () => {
    const [currentState, setCurrentState] = useState(0);

    const goToNext = (currentState) => {
        setCurrentState(currentState);
    }
    return (
    <Box>
        <Grid
        container
        spacing={0}
        >
            <Grid
            item
            xs={12}
            sm={12}
            md={7}
            sx={{
                backgroundImage: {
                    xs: `url(${data[currentState].mobileImage})`,
                    md: `url(${data[currentState].desktopImage})`,
                },
                
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: {
                    xs: "70vh",
                    md: "60vh"
                },
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}
            >
                <Box>
                    Navbar buana
                </Box>
                <Box
                width="100%"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                >
                    {data.map((data, currentState) => {
                        return (
                        <span key={currentState} onClick={() => goToNext(currentState)}
                        style={{
                            width: "30px",
                            height: "10px",
                            borderRadius: "2px",
                            background: "red",
                            margin: "10px",
                            cursor: "pointer",
                        }}
                        >
                        </span>)
                    })}
                </Box>
                <Box
                position="absolute"
                sx={{
                    bottom: "0",
                    right: {
                        xs: "0",
                        md: "-40px"
                    }
                }}
                bgcolor="primary.light"
                >
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button
                        onClick={ () => setCurrentState(currentState -1)}
                        >
                            <ChevronLeftIcon/>
                        </Button>
                        <Button
                        onClick={ () => setCurrentState(currentState + 1)}
                        >
                            <ChevronRightIcon/>
                        </Button>
                    </ButtonGroup>
                </Box>
            </Grid>
            <Grid
            item
            xs={12}
            sm={12}
            md={5}
            >
                <Box
                sx={{
                    textAlign: "left",
                    marginLeft: {
                        xs: "0",
                        md: "3rem",
                    },
                    py: 10,
                    px: 4,
                }}
                >
                    <Typography variant='h4'
                    pb={2}
                    >
                        {data[currentState].heading}
                    </Typography>
                    <Typography variant='p'>
                        {data[currentState].description}
                    </Typography>
                    <Button
                    sx={{
                        display: "block",
                        my:4,
                    }}
                    >
                        shop now <span><ArrowForwardIcon/></span>
                    </Button>
                </Box>
            </Grid>
        </Grid>
    </Box>
)}

export default HeroSection