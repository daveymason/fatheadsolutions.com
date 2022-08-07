import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useScrollTrigger } from '@mui/material';

import Image from 'next/image'

export default function Header({ title }) {

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
      <AppBar position="fixed">
        <Toolbar>
         <Image src="/fatheadsolutionslogo.gif" alt="me" width="86" height="86" />
          <Typography variant="h6">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}