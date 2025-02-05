import './App.css'
import Register from './components/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Login />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  )
}

export default App
