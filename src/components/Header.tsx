import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Moon, Sun, Bell, Settings } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const Header = () => {
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="flex items-center justify-around p-4 text-zinc-800 dark:text-white">
      <div className="flex justify-between gap-2 bg-zinc-400 rounded-md p-2 h-[50px]">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <img src="/logo 1.svg" alt="logo" className="w-[29px] h-[35px]" />
          <h1 className="font-normal font-mochiy text-black">Timer</h1>
        </div>
      </div>

      <h1 className="text-lg font-normal font-mochiy flex items-center gap-1">
        Focus-Flow <img src="/logo 1.svg" alt="logo" className="h-[63px] w-[39px]" />
      </h1>

      <div className="flex items-center gap-4">
        <Bell className="text-orange-500 cursor-pointer" />
        <Link to="/settings">
          <Settings className="text-orange-500 cursor-pointer" />
        </Link>
        <button onClick={toggleTheme} className="focus:outline-none">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  )
}

export default Header
