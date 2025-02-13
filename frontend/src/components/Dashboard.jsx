import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Sidebar from './Sidebar'
import ChatArea from "./ChatArea"
import { useAuth } from "../utils/AuthContext";
const Dashboard = () => {
  const navigate = useNavigate();
  const {setIsAuthenticated}=useAuth();
  return (
    <>
      <Header />
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setTimeout(() => {
            localStorage.removeItem("token");
            setIsAuthenticated(false);
            navigate("");
          }, 1000);
        }}
      >
        Logout
      </a>
      <div className="chat-container">
        <Sidebar />
        <ChatArea />
      </div>
    </>
  );
};

export default Dashboard;
