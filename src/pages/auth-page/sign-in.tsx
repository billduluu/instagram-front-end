import {
  Avatar,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Input,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import PhoneLogo from "../../images/instagHome.png";
import Logo from "../../images/logos.png";
import { makeStyles } from "@material-ui/core/styles";

const SignInPage = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 414px)",
  });
  const classes = useStyles();
  return (
    <>
      {/* <Container maxWidth="sm">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <img src={PhoneLogo} width={"80%"}></img>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
            }}
          >
            <div
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-end",
                alignContent: "center",
              }}
            >
              Hiii
            </div>
            <img src={Logo} width={"50%"} height={"20%"} />
            <TextField label="Email" />

            <Button
              type="button"
              color="primary"
              className="form__custom-button"
            >
              Log in
            </Button>
          </form>
        </div> */}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <img src={PhoneLogo} width={"80%"}></img>
        <div className={classes.paper}>
          {/* <LockOutlinedIcon /> */}
          <img src={Logo} width={"50%"} height={"20%"} />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#">Forgot password?</Link> */}
              </Grid>
              <Grid item>
                {/* <Link href="#">{"Don't have an account? Sign Up"}</Link> */}
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
};

export default SignInPage;

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
