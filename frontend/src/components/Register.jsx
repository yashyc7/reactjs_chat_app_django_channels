import React from "react";
import { useState, useEffect } from "react";
import { TextField, Button, InputAdornment, Typography } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import IconButton from "@mui/material/IconButton";
import { use } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState("false");

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleFormSubmit = () => {
    return;
  };

  return (
    <>
      <div class="container text-center djustify-content-center align-items-center mt-5  ">
        <div class="heading text-center">
          <Typography
            variant="h4"
            component="h2"
            style={{ fontFamily: "Ubuntu Mono" }}
          >
            Register Yourself
          </Typography>
        </div>
        <div class="email container mt-3 ">
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            sx={{ width: "300px" }}
          />
        </div>

        <div class="first name container mt-3">
          <TextField
            id="first_name"
            label="First Name"
            variant="outlined"
            type="text"
            sx={{ width: "300px" }}
          />
        </div>

        <div class="last name container mt-3">
          <TextField
            id="last_name"
            label="Last Name"
            variant="outlined"
            type="text"
            sx={{ width: "300px" }}
          />
        </div>

        <div class="password container mt-3">
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            sx={{ width: "300px" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOutlinedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div class="submit button mt-3">
          <Button variant="contained" type="submit" onClick={handleFormSubmit}>
            Register
          </Button>
        </div>
      </div>
    </>
  );
};

export default Register;
