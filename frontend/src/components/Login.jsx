import React from "react";
import { useState } from "react";
import { TextField, Button, InputAdornment, Typography } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Login = () => {
  const navigate = useNavigate();
  const BASE_URL = "http://127.0.0.1:8000/";
  const [showPassword, setShowPassword] = useState("false");
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleFormSubmit = async () => {
    try {
      const response = await fetch(`${BASE_URL}login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const data = await response.json();

      if (response.status === 200) {
        setMessage(data.message || "Login successful");
        setSeverity("success");
        // Store token if needed
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else if (response.status === 400) {
        setMessage("Wrong email or password");
        setSeverity("warning");

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setMessage("An unexpected error occurred");
        setSeverity("error");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      setMessage("Something went wrong");
      setSeverity("error");
      console.error("Error:", error);
    }
  };

  return (
    <><Header/>
      <div className="container text-center d-block justify-content-center align-items-center mt-5">
        <div className="heading text-center">
          {message && <Alert severity={severity}>{message}</Alert>}
          <Typography
            variant="h4"
            component="h2"
            style={{ fontFamily: "Ubuntu Mono" }}
          >
            Login
          </Typography>
        </div>

        <div className="email container mt-3 ">
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            sx={{ width: "300px" }}
            onChange={(e) =>
              setformdata({ ...formdata, email: e.target.value })
            }
          />
        </div>

        <div className="password container mt-3">
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            sx={{ width: "300px" }}
            onChange={(e) =>
              setformdata({ ...formdata, password: e.target.value })
            }
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

        <div className="submit button mt-3">
          <Button variant="contained" type="submit" onClick={handleFormSubmit}>
            Login
          </Button>
          <hr />
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/register");
            }}
          >
            Don't have account? register{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
