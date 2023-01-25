import { Grid, Typography, Box, Container, CardMedia } from '@mui/material';

export default function Jumbotron() {
  return (
    <Grid container justify="center" alignItems="center" style={{ backgroundColor: '#e6e6e6', borderRadius: '10px', padding: '2rem'}}>
      <CardMedia
        component="img"
        alt="Logo"
        height="185"
        image="/logo.png"
        style={{ width: '200px', margin: '0 auto' }}
        title="Logo"
      />
      <hr />
      <Container>
        <Typography variant="h4" align="center" color="textPrimary" style={{ paddingTop: '1rem' }}>
          Fathead Solutions
        </Typography>

        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Designing your digital world one pixel at a time
        </Typography>
      </Container>
    </Grid>
  );
}
