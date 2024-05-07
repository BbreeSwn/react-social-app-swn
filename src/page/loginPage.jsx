// import { Link } from "react-router-dom";
import { Box, Typography, Button, TextField, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthenContext";

function LoginPage() {
  const navigate = useNavigate("");
  const { login } = useContext(AuthContext); // <AuthContext.Provider>

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmailOrPhone = (e) => setEmailOrPhone(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    if (emailOrPhone === "qwer" && password === "1234") {
      await login();
      navigate("/");
    } else {
      alert("invalid user or password");
    }
  };
  return (
    <div>
      <Box component="main" display="flex" justifyContent="space-between">
        <Box
          component="section"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          p="20px"
          flex={1}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <Typography variant="h3" color="#4D8ED3" fontWeight={900}>
            FakeBuck
          </Typography>
          <Typography variant="subtitle" fontWeight={500}>
            Connect with friend in the world
          </Typography>
        </Box>
        <Box
          component="form"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          p="20px"
          flex={1}
          onChange={handleSubmitLogin}
        >
          <TextField
            type="text"
            variant="outlined"
            label="Email or Phone number"
            value={emailOrPhone}
            onChange={handleChangeEmailOrPhone}
          />
          <TextField
            type="password"
            variant="outlined"
            label="Password"
            value={password}
            onChange={handleChangePassword}
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
          <Button
            variant="text"
            disableElevation
            color="primary"
            sx={{ fontSize: 12, fontWeight: 500 }}
          >
            Forgot Password
          </Button>
          <Divider />
          <Button variant="contained" disableElevation color="success">
            Create New Account
          </Button>
        </Box>
      </Box>
      {/* <Link to='/'>HomePage</Link><br />
          <Link to='/profile'>ProfilePage</Link> */}
    </div>
  );
}

export default LoginPage;
