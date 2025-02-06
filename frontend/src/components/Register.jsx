import React from "react";
import { useState } from "react";
import { TextField, Button, InputAdornment, Typography } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Register = () => {
  const navigate = useNavigate();
  const BASE_URL = "http://127.0.0.1:8000/";
  const [showPassword, setShowPassword] = useState("false");
  const [formdata, setformdata] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleFormSubmit = async () => {
    try {
      const response = await fetch(`${BASE_URL}register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const data = await response.json();

      if (response.status === 201) {
        setMessage(data.message || "User has registered successfully");
        setSeverity("success");
        // Navigate to login page after 2 seconds
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else if (response.status === 400) {
        setMessage("User with the same email is already registered");
        setSeverity("warning");
      } else {
        setMessage("An unexpected error occurred");
        setSeverity("error");
      }
    } catch (error) {
      setMessage("Something went wrong");
      setSeverity("error");
      console.error("Error:", error);
    }
  };

  return (
    <> <Header />
      <div className="container text-center djustify-content-center align-items-center mt-5  ">
        <div className="heading text-center">
          {message && <Alert severity={severity}>{message}</Alert>}
          <Typography
            variant="h4"
            component="h2"
            style={{ fontFamily: "Ubuntu Mono" }}
          >
            Register Yourself
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

        <div className="first name container mt-3">
          <TextField
            id="first_name"
            label="First Name"
            variant="outlined"
            type="text"
            sx={{ width: "300px" }}
            onChange={(e) =>
              setformdata({ ...formdata, first_name: e.target.value })
            }
          />
        </div>

        <div className="last name container mt-3">
          <TextField
            id="last_name"
            label="Last Name"
            variant="outlined"
            type="text"
            sx={{ width: "300px" }}
            onChange={(e) =>
              setformdata({ ...formdata, last_name: e.target.value })
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
            Register
          </Button>
          <hr />
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            Already have account? Login{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default Register;
