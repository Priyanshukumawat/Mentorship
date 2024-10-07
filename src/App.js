import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </>
    </Router>
  )
}

export default App