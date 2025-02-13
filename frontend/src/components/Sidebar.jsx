import React from "react";
import { useAuth } from "../utils/AuthContext";

const Sidebar = () => {
  const { setIsAuthenticated } = useAuth();
  return (
    <div className="sidebar">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>Sidebar</span>
        <button
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
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
