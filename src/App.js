import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Dashboard from './page/Dashboard/Dashboard';
import Detail from './page/Detail/Detail';
import Login from './page/Login/Login'
import './App.css'

const App = () => {
  const [token, setToken] = useState([])

  if (token.length === 0) {
    return <Login setToken={ setToken } />
  }

  console.log(token)
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </Router>
    )
}

export default App
