import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <Header />
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setTimeout(() => {
            localStorage.removeItem("token");
            navigate("/");
          }, 1000);
        }}
      >
        Logout
      </a>
    </>
  );
};

export default Dashboard;
