import React, { useState } from 'react';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import RoomSharpIcon from '@mui/icons-material/RoomSharp';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleHomeButtonClick = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <div className='text-center'>
        <button
          className='text-gray hover:bg-slate-200 rounded-3xl border-2 border-radborder-inherit w-10 h-10'
          type='button'
          onClick={() => setSidebarOpen(true)}
        >
          <MenuSharpIcon />
        </button>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div className='fixed inset-0 bg-black opacity-50 z-30' onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        id='drawer-navigation'
        className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-white dark:bg-gray-800`}
        tabIndex='-1'
        aria-labelledby='drawer-navigation-label'
      >
        {/* ... rest of your sidebar content ... */}
        {/* ... (omitted for brevity) ... */}
        <h5 id='drawer-navigation-label' class='text-base font-semibold text-gray-500 uppercase dark:text-gray-400'>
          Menu
        </h5>
        <button
          type='button'
          data-drawer-hide='drawer-navigation'
          aria-controls='drawer-navigation'
          class='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
        >
          <svg
            aria-hidden='true'
            class='w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clip-rule='evenodd'
            ></path>
          </svg>
          <span class='sr-only'>Close menu</span>
        </button>
        <ul class='space-y-2 font-medium'>
          <li>
            <a
              href='#'
              class='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
            >
              <svg
                class='w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 22 21'
              >
                <path d='M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z' />
                <path d='M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z' />
              </svg>
              <span class='ml-3'>Dashboard</span>
            </a>
          </li>
          <div className='pl-5'>
            <Link to='/spot'>
            <li className='mt-5'>
              <a
                href='#'
                class='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
              >
                <RoomSharpIcon />
                <button className='flex-1 ml-3 whitespace-nowrap' onClick={handleHomeButtonClick}>
                    Add spot
                  </button>
              </a>
            </li>
            </Link>
            <Link to='/event'>
            <li className='mt-4'>
              <a
                href='#'
                class='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
              >
                <CalendarMonthSharpIcon />
                <button className='flex-1 ml-3 whitespace-nowrap' onClick={handleHomeButtonClick}>
                    Add event
                  </button>
              </a>
            </li>
            </Link>
            <Link to='/user'>
              <li className='mt-4'>
                <a
                  href='#'
                  class='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
                >
                  <svg
                    class='flex-shrink-0 w-5 h-5 text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 18'
                  >
                    <path d='M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z' />
                  </svg>

                  <button className='flex-1 ml-3 whitespace-nowrap' onClick={handleHomeButtonClick}>
                    Users
                  </button>
                </a>
              </li>
            </Link>
          </div>
        </ul>
        <Link to='/'>
          <button
            type='button'
            className='text-white mt-11 bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900'
            onClick={handleHomeButtonClick} //close the SB
          >
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
