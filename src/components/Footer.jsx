import { Box, Link, Typography } from '@mui/material';
import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
    <Box
    sx={{
        display: "grid",
        placeContent: "center",
        padding: "4rem",
        background: "hsl(0, 0%, 0%)",
        my: "2rem",
    }}
    >
        <Typography variant='h4'
        color="hsl(0, 0%, 100%)"
        >
            room
        </Typography>
        <Typography variant='p'>
            <Link
            underline='none'
            href="#github link"
            color="hsl(0, 0%, 100%)"
            >
            coded by felix Ouma
            </Link>
        </Typography>
        <Typography
        variant='p'
        color="hsl(0, 0%, 100%)"
        >
            &copy; <span>{year}</span> 
            <Link underline='none'
            href="https://www.frontendmentor.io?ref=challengr"
            color="hsl(0, 0%, 100%)"
            >
                Frontend Mentor
            </Link>
        </Typography>
    </Box>
)}

export default Footer;