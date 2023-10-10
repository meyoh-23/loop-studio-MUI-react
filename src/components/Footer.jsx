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
    }}
    >
        <Typography>
            room
        </Typography>
        <Typography variant='p'>
            <Link
            underline='none'
            href="#github link"
            >
            coded by felix Ouma
            </Link>
        </Typography>
        <Typography
        variant='p'
        >
            &copy; <span>{year}</span> 
            <Link underline='none' href="#frontendMentor">Frontend Mentor</Link>
        </Typography>
    </Box>
)}

export default Footer;