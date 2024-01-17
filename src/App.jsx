
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/";
import Dashboard from "./pages/Admin/";
import Login from "./pages/Login";
import { useState, createContext } from "react";

export const HimalayaTopWrapper = createContext()

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dataToPass = {
    isAuthenticated,
    setIsAuthenticated
  }
  return (
    <HimalayaTopWrapper.Provider value={dataToPass}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={isAuthenticated ? <Dashboard /> : <Login />} />
      </Routes>
    </HimalayaTopWrapper.Provider>
  )
}

export default App
