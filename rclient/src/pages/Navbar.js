import { useState } from 'react';
import { Dialog, Popover } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaUser } from 'react-icons/fa';
import { useUserAuth } from '../Context/authContext/AuthContextProvider';


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  const { user } = useUserAuth();

  return (
    <header className="relative z-40 w-full flex-none text-sm font-semibold leading-6 text-slate-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Qualisure</span>
            <img className="h-14 w-auto" src="./assets/logo-no-background.png" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
        
          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </Link>
          <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">
            About
          </Link>
          <Link to="/connect" className="text-sm font-semibold leading-6 text-gray-900">
            Connect
          </Link>
          <Link to="/fluctuation" className="text-sm font-semibold leading-6 text-gray-900">
            Fluctuation
          </Link>
        </Popover.Group>
        {
          user ? 
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-1">
            <button onClick={()=>{
              setToggle(!toggle)
            }} className="flex gap-2 items-center bg-slate-100 rounded-full px-3 py-1 shadow-lg cursor-pointer">
              <FaUser/>
              <p>{user.email}</p>
            </button>
          </div>
          :
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-1">
            <Link to="/register" className="text-sm font-semibold leading-6 text-gray-900">
              Register
            </Link>
            <span>/</span>
            <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        }
        {
          toggle?
          <div className="absolute flex gap-2 items-center right-[40px] top-[80px] w-[120px] bg-slate-100 rounded-md shadow-lg">
            <ul className="flex flex-col items-start w-[100%] overflow-hidden rounded-md">
              <button className="px-3 py-2 rect text-left w-[100%] hover:bg-slate-400">Profile</button>
              <button className="px-3 py-2 text-left w-[100%] hover:bg-slate-400">Dashboard</button>
              <button className="px-3 py-2 text-left w-[100%] hover:bg-slate-400">Logout</button>
            </ul>
          </div>:null
        }
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-30" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Qualisure</span>
              <img
                className="h-8 w-auto"
                src="./assets/android-chrome-512x512.png"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 cursor-pointer" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">                
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link>
                <Link
                  to="/connect"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Connect
                </Link>
                <Link
                  to="/fluctuation"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Fluctuation
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="/register"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
