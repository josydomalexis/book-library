
import "./App.css"
import { Route, Routes, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Admin";
import Addbooks from "./pages/Addbooks"
import Addauthors from "./pages/Addauthors"
import Bookdetails from "./pages/BookDetails"
import Login from "./pages/Login";
import { useState, createContext, useEffect } from "react";
import { GetAuthors, GetBooks, GetBook } from "./config/api/API"

export const HimalayaTopWrapper = createContext()

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authors, setAuthors] = useState(null)
  const [books, setBooks] = useState([])
  const [book, setBook] = useState({})
  useEffect(() => { GetAuthors(setAuthors), GetBooks(setBooks) }, []);

  const dataToPass = {
    isAuthenticated,
    setIsAuthenticated,
    GetAuthors,
    GetBooks,
    authors,
    setAuthors,
    books,
    setBooks,
    GetBook,
    setBook,
    book
  }
  return (
    <HimalayaTopWrapper.Provider value={dataToPass}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={isAuthenticated ? <Dashboard /> : <Login />} />
        <Route path="/admin/addbooks" element={isAuthenticated ? <Addbooks /> : <Login />} />
        <Route path="/admin/addauthors" element={isAuthenticated ? <Addauthors /> : <Login />} />
        <Route path="/book/:bookName/:bookId" element={<Bookdetails />} />
      </Routes>
    </HimalayaTopWrapper.Provider>
  )
}

export default App
