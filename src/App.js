import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MentorLandingPage from './Pages/MentorLandingPage'
import MentorDasboard from './Pages/MentorDashboard';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route index element={<MentorLandingPage />} />
          <Route path='/dashboard' element={<MentorDasboard />} />
        </Routes>
      </>
    </Router>
  )
}

export default App