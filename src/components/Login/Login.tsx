import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { LOGIN_IMG } from "../../constants/imageLinks";
import "./login.css";

const Login = () => {
  return (
    <Box sx={{ overflowY: "hidden" }}>
      <Grid container sx={{ height: "100vh", padding: "0px" }}>
        <Grid className="left" item xs={12} sm={6}>
          <img className="login-img" src={LOGIN_IMG}></img>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            className="right"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography variant="h4" sx={{ fontWeight: "500" }}>
              Welcome Back
            </Typography>
            <Typography variant="body1" sx={{ color: "grey" }}>
              Welcome back! Please enter your details
            </Typography>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{ margin: "30px 0", color: "black" }}
            />
            <TextField
              type="password"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              sx={{ marginBottom: "30px", color: "black" }}
            />
            <Button type="submit" variant="contained">
              Sign In
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
