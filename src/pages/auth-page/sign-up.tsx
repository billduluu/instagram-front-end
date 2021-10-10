import {
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
// import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import Logo from "../../assets/logos.png";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

export const SignUp = () => {
  // const isMobile = useMediaQuery({
  //   query: "(max-width: 414px)",
  // });
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const classes = useStyles();
  const SubmitSignUp = () => {
    axios
      .post("http://localhost:5000/register", {
        email: email,
        username: userName,
        password: password,
        fullname: fullName,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={Logo} width={"50%"} height={"20%"} alt="instaLogo" />
        <Typography component="h3" variant="h6">
          Sign up to see photos and videos from your friends.
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Mobile number or Email"
            name="email"
            autoFocus
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="fullName"
            label="Full Name"
            type="fullName"
            id="fullName"
            onChange={(e: any) => setFullName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="userName"
            label="Username"
            type="userName"
            id="userName"
            onChange={(e: any) => setUserName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="pass"
            label="Password"
            type="pass"
            id="pass"
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={SubmitSignUp}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/sign-up">
                {
                  "By signing up, you agree to our Terms , Data Policy and Cookies Policy ."
                }
              </Link>
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
