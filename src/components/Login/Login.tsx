import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { LOGIN_IMG } from "../../constants/imageLinks";
import { useAuthTokenMutation } from "../../redux/slices/authSlice";
import { setAuthToken } from "../../redux/slices/tokenSlice";
import "./login.css";

const Login = () => {
  const [authToken] = useAuthTokenMutation();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const data = await authToken(values).unwrap();
        dispatch(setAuthToken(data));

        //this function will reset form values
        resetForm();
      } catch (error: any) {
        console.log("catch called :", error);
        toast.error(error?.data?.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        // console.log("catch :", error.data.message);
      }
    },
  });
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
            <form onSubmit={formik.handleSubmit}>
              <TextField
                type="text"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                sx={{
                  margin: "30px 0",
                  color: "black",
                  width: "100%",
                }}
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <TextField
                type="password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                sx={{
                  marginBottom: "30px",
                  color: "black",
                  width: "100%",
                }}
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <br />
              <Button sx={{ width: "100%" }} type="submit" variant="contained">
                Sign In
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Box>
  );
};

export default Login;
