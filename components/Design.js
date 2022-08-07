import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button, useScrollTrigger } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Image from 'next/image'

export default function Design({ title }) {

  function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  return (
    <ElevationScroll>
        <Box display="flex" sx={{py:2}}>
                <Container >
                    <Typography variant="h2"   color="textPrimary" >
                    Web {title}
                    </Typography>

                    <Typography variant="h5"   color="textSecondary" paragraph>
                     Beautiful, Responsive & Unique. 
                    </Typography>

                    <Button variant="contained" color="primary">
                            Contact
                    </Button>

                </Container>
                <Image src="/DesignIcon.gif" alt="me" width="400" height="1" align="center" />

            </Box>
    </ElevationScroll>
  );
}