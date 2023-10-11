import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import dataDisplayed from "./../assets/data";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Navbar from './Navbar';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const HeroSection = () => {
    const [currentState, setCurrentState] = useState(0);
    const [data, setData] = useState(dataDisplayed);

useEffect(() => {
    const lastIndex = data.length - 2;
    if (currentState < 0) {
        setCurrentState(lastIndex);
    }
    if (currentState > lastIndex) {
        setCurrentState(0);
    }
    },[currentState, data])

    // for the auto-slide functionality
    useEffect(() => { 
    let slider = setInterval(() => {
        setCurrentState(currentState + 1);
    }, 5000);
    return () =>clearInterval(slider);
    }, [currentState])


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
                    xs: "80vh",
                    md: "80vh"
                },
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}
            >
                <Navbar/>
                <Box
                width="100%"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
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
                        onClick={ () => setCurrentState(currentState + 1)}
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
                    sx={{
                        fontFamily: "'League Spartan', sans-serif",
                        fontWeight: "600",
                        color: "hsl(0, 0%, 0%)",
                        fontSize: "2rem",
                    }}
                    >
                        {data[currentState].heading}
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
                        {data[currentState].description}
                    </Typography>
                    <Button
                    sx={{
                        display: "block",
                        my:4,
                        fontFamily: "'League Spartan', sans-serif",
                        fontWeight: "600",
                        color: "hsl(0, 0%, 63%)",
                        letterSpacing: "15px",
                    }}
                    >
                        shop now <span><ArrowForwardIcon/></span>
                    </Button>
                </Box>
            </Grid>
        </Grid>
    </Box>
)}

export default HeroSection;