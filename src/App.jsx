
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/";
import Dashboard from "./pages/Admin/";
import Addbooks from "./pages/Addbooks"
import Addauthors from "./pages/Addauthors"
import Login from "./pages/Login";
import { useState, createContext, useEffect } from "react";
import { GetAuthors, GetBooks } from "./config/api/API"

export const HimalayaTopWrapper = createContext()

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authors, setAuthors] = useState(null)
  const [books, setBooks] = useState(null)
  useEffect(() => { GetAuthors(setAuthors), GetBooks(setBooks) }, []);

  const dataToPass = {
    isAuthenticated,
    setIsAuthenticated,
    GetAuthors,
    GetBooks,
    authors,
    setAuthors,
    books,
    setBooks
  }
  return (
    <HimalayaTopWrapper.Provider value={dataToPass}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={isAuthenticated ? <Dashboard /> : <Login />} />
        <Route path="/admin/addbooks" element={isAuthenticated ? <Addbooks /> : <Login />} />
        <Route path="/admin/addauthors" element={isAuthenticated ? <Addauthors /> : <Login />} />
      </Routes>
    </HimalayaTopWrapper.Provider>
  )
}

export default App
