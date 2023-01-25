import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Jumbotron from '@components/Jumbotron'
import CustomTabs from '@components/CustomTabs'
import Design from '@components/Design'
import Hosting from '@components/Hosting'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Fat Head Solutions!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Header title="Fat Head Solutions" /> */}
        <Grid container spacing={2}>
          <Grid item xs={1} sx={{marginX: 1}}>
          {/* <Jumbotron /> */}
          <CardMedia
            component="img"
            alt="Logo"
            height="90px"
            image="/logo.png"
            style={{ width: '90px', margin: '-10px 0 0 0' }}
            title="Logo"
          />
          </Grid>

          <Grid item xs={10}>
                    <Typography variant="h4"  align="left" color="textPrimary">
                    Fathead Solutions
                    </Typography>

                    <Typography variant="h6"  align="left"  color="textSecondary" paragraph>
                    Designing your digital world one pixel at a time
                    </Typography>
          </Grid>

          <Grid item xs={1} />

          <Grid item xs={10}>
              <CustomTabs />
          </Grid>

          <Grid item xs={1} />

        </Grid>
      </main>

      <Footer />
    </div>
  )
}
