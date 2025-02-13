import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import { useAuth } from "../utils/AuthContext";
const Dashboard = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  return (
    <>
      <div className="chat-container">
        <Sidebar />
        <ChatArea />
      </div>
    </>
  );
};

export default Dashboard;
