import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Bell, Settings, Menu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Modal from './Modal';
import Timer from './Timer';


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((prev) => !prev);
  const { theme, toggleTheme } = useTheme()

  return (
<header className="flex items-center justify-around p-4 text-zinc-800 dark:text-white relative">
      <div className="flex justify-between gap-2 bg-zinc-400 rounded-md p-2 h-[50px]">
        <div className="flex items-center gap-2 cursor-pointer" onClick={toggleModal}>
          <img src="/logo 1.svg" alt="logo" className="w-[29px] h-[35px]" />
          <h1 className="font-normal font-mochiy text-black">Timer</h1>
        </div>
      </div>

      <h1 className="text-lg font-normal font-mochiy flex items-center gap-1 text-center">
        Focus-Flow <img src="/logo 1.svg" alt="logo" className="h-[63px] w-[39px]" />
      </h1>

      {/* Ícones - Desktop */}
      <div className="hidden md:flex items-center gap-4">
        <Bell className="text-orange-500 cursor-pointer" />
        <Link to="/settings">
          <Settings className="text-orange-500 cursor-pointer" />
        </Link>
        <button onClick={toggleTheme} className="focus:outline-none">
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
  
        {/* Ícones - Mobile */}
      <div className="md:hidden relative">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Menu className="text-orange-500" />
        </button>

        {mobileMenuOpen && (
          <div className="absolute right-0 top-full mt-2 bg-white dark:bg-zinc-800 rounded-md shadow-lg p-3 flex flex-col gap-3 z-50">
            <Bell className="text-orange-500 cursor-pointer" />
            <Link to="/settings">
              <Settings className="text-orange-500 cursor-pointer" />
            </Link>
            <button onClick={toggleTheme} className="focus:outline-none">
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        )}
      </div>
      
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <Timer />
      </Modal>
    </header>


  )
}

export default Header
