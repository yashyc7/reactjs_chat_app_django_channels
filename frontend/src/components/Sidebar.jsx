import React, { useEffect, useState } from "react";
import { useAuth } from "../utils/AuthContext";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  ListItemAvatar,
  Avatar,
  Typography,
  Divider,
} from "@mui/material";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

const Sidebar = () => {
  const BASE_URL = "http://127.0.0.1:8000/";
  const [userList, setUserList] = useState([]);
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("token");
    if (authToken) {
      axios
        .get(`${BASE_URL}api/users/`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then((response) => {
          setUserList(response.data);
        })
        .catch((error) => {
          console.log("Error in making API request: ", error);
        });
    }
  }, []);

  return (
    <div className="sidebar">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h6">Chats</Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={(e) => {
            e.preventDefault();
            setTimeout(() => {
              localStorage.removeItem("token");
              setIsAuthenticated(false);
              navigate("/");
            }, 1000);
          }}
        >
          Logout
        </Button>
      </div>
      <Divider />
      <List>
        {userList.map((user, index) => (
          <React.Fragment key={user.id}>
            <Link
              to={`user/${user.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItem button>
                <ListItemAvatar>
                  <Avatar>
                    <PersonRoundedIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={`${user.first_name} ${user.last_name}`}
                  secondary={user.email}
                  sx={{
                    "& .MuiListItemText-secondary": {
                      color: "#ffffff", // Adjust the color as needed
                    },
                  }}
                />
              </ListItem>
            </Link>
            {index < userList.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
