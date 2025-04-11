import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './Routes/routes'
import Header from './components/Header'

const App = () => {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  )
}

export default App
