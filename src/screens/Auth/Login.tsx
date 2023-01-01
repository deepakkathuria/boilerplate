import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Backdrop, CardActions, CircularProgress, Snackbar, Typography } from "@mui/material";
import { Button, Card, CardContent, CardHeader, FormGroup, Grid, TextField } from "@mui/material";
import { SET_PAGE_TITLE } from "@src/helpers/Base";
import Footer from "@src/components/Footer";

function Login() {
  const navigate = useNavigate();
  const [ email, setEmail ] = useState('user@domain.com');
  const [ snackbarOpen, setSnackbarOpen ] = useState(false);
  const [ backdropOpen, setBackdropOpen ] = useState(false);

  useEffect(() => {
    SET_PAGE_TITLE("Login");
  }, []);

  const onSubmitLoginForm = (ev: React.SyntheticEvent) => {
    ev.preventDefault();

    if (email === 'user2@domain.com') {
      setBackdropOpen(true);
      setTimeout(() => {
        setBackdropOpen(false);
        navigate('/dashboard');
      }, 1000);
    }

    else {
      setSnackbarOpen(true);
    }
  }

  const onCloseSnackbar = () => {
    setSnackbarOpen(false);
  }

  return (
    <div>
      <Grid className="grid__login">
        
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '10vh' }}
        >
          <span className="text__brand-logo">
            Infomerics
          </span>
        </Grid>
        
        <form onSubmit={(ev) => onSubmitLoginForm(ev)}>
          <Grid>
            <Card sx={{ color: 'primary.main' }} variant="outlined">
              <CardHeader
                title="Login"
                subheader="Please use your credentials to login."
              />
              <CardContent>
                <FormGroup>
                  <TextField 
                    label="Account Email" 
                    variant="outlined"
                    type="email"
                    required={true}
                    autoFocus={true}
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                  />
                </FormGroup>
                <br />

                <FormGroup>
                  <TextField 
                    label="Account Password" 
                    variant="outlined"
                    type="password"
                    required={true}
                  />
                </FormGroup>
              </CardContent>
              <CardActions sx={{ padding: '16px'}}>
                <Button variant="contained" type="submit">
                  Login
                </Button>
                <Button component={Link} to={`/`}>
                  Back
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </form>
      </Grid>

      <Footer />

      <Snackbar
        open={snackbarOpen}
        message="Invalid credentials. Retry."
        translate="yes"
        onClose={onCloseSnackbar}
      />

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

export default Login;
