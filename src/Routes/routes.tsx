import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Settings from '../pages/settings'
import History from '../pages/history'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/history" element={<History />} />
    </Routes>
  )
}

export default AppRoutes
