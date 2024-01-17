
import "./App.css"
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./pages/Home/";
import Dashboard from "./pages/Admin/";
import Login from "./pages/Login";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {
          isAuthenticated ? <Route path="/admin" element={<Dashboard />} /> : <Route path="/admin" element={<Login />} />
        }

      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
