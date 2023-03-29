import React from "react";
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
// import useStyles from "./styles";
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme();

const App = () => {
  // const classes = useStyles()
  return (
      // <ThemeProvider theme={theme}>
        <>
          <CssBaseline/>
          <AppBar position="relative">
            <Toolbar>
              <PhotoCamera/>
              <Typography variant="h6">
                Photo Album
              </Typography>
            </Toolbar>
          </AppBar>
          <main>
            <div >
              <Container maxWidth="sm">
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                  Photo Album
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
                </Typography>
                <div>
                  <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                      <Button variant="contained" color="primary">
                        See my photos
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary">
                        Secondary action
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>
          </main>
        </>
      // {/* </ThemeProvider> */}
  )
}

export default App;