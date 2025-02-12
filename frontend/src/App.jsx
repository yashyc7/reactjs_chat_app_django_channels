import "./App.css";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ChatArea from "./components/ChatArea";
import Sidebar from "./components/Sidebar"
function App() {
  return (
    <>
    <div className="chat-container">
      <Sidebar/>
      <ChatArea/>
    </div>
    </>
    // <Router>
    //   <Routes>
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/" element={<Login />} />
    //     <Route path="/dashboard" element={<Dashboard />} />
    //     //Add other routes as needed
    //   </Routes>
    // </Router>
  );
}

export default App;
