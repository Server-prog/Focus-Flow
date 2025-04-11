import { Link } from 'react-router-dom'
import { Moon, Sun, Bell, Settings } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(prev => !prev)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="flex items-center justify-around p-4 shadow-md text-zinc-800 dark:text-white">
      {/* Esquerda: Timer */}
      <div className="flex justify-between gap-2 bg-white rounded-md p-2 h-[50px]">
        <div className='flex items-center gap-2'>
          <img src="public/logo 1.svg" alt="logo" className='w-[29px] h-[35px]' />
          <h1 className=" font-normal font-mochiy text-black gap-2">
            Timer
          </h1>
          <img src="src/assets/bi_file-break.svg" alt="icone" className=' h-[30px]' />
        </div>
      </div>

      <h1 className="text-lg font-normal font-mochiy flex items-center gap-1">
        Focus-Flow <img src="public/logo 1.svg" alt="logo" className='h-[63px] w-[39px]' />
      </h1>

      <div className="flex items-center gap-4">
        <Bell className="text-orange-500 cursor-pointer" />
        <Link to="/settings">
          <Settings className="text-orange-500 cursor-pointer" />
        </Link>
        <button onClick={toggleTheme} className="focus:outline-none">
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  )
}

export default Header
