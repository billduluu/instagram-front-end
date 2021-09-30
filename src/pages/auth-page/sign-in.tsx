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
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import PhoneLogo from "../../assets/instagHome.png";
import Logo from "../../assets/logos.png";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

export const SignIn = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 414px)",
  });
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const classes = useStyles();
  const SubmitLogin = () => {
    axios
      .post("http://localhost:5000/user", {
        password,
        userName,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
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
            autoFocus
            onChange={(e: any) => setUserName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="pass"
            label="Password"
            type="pass"
            id="pass"
            onChange={(e: any) => setPassword(e.target.value)}
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
            onClick={SubmitLogin}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/sign-up">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to="/sign-up">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

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
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
