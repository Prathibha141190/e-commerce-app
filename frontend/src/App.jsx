import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
     
        <Route
          path="/"
          element={
         
              <Dashboard />
         
          }
        />
      </Routes>
    </Router>
  )
}
export default App