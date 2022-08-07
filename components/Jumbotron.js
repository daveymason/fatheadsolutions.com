
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Image from 'next/dist/client/image';
export default function Jumbotron() {
    return (
            <Box display="flex" sx={{backgroundColor: '#e6e6e6', borderRadius: '10px', mx: 5, p:2}}>
                <Image src="/logo.png" alt="me" width="285" height="265" align="center" />
                <Container>
                    <Typography variant="h4"  align="center" color="textPrimary" sx={{pt:5}}>
                    Fathead Solutions
                    </Typography>

                    <Typography variant="h6"  align="center"  color="textSecondary" paragraph>
                    Passionate about creating beautiful, easy to use software.
                    </Typography>
                </Container>
            </Box>
    );
}