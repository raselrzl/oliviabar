"use client";
import { useState } from 'react';
import dynamic from 'next/dynamic';
import AddItem from './AddItem';
import Table from './Table';
import ContactMessages from './contactMessages';
import { BASE_API_URL } from '@/app/lib/utils';
import NotificationForm from './notification';

const Login = dynamic(() => import('../user/Login'), { ssr: false });
const Register = dynamic(() => import('../user/Register'), { ssr: false });

export default function MenuItemsForm() {
  const [view, setView] = useState('');
  const [user, setUser] = useState(null);

  const handleRegisterSuccess = () => {
    setView('login');
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setView(''); // Hide login/register view
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(`${BASE_API_URL}/api/logout`, {
        method: 'POST',
      });
      if (response.ok) {
        setUser(null); // Clear user data
        setView(''); // Hide view after logout
      } else {
        console.log('Logout failed');
      }
    } catch (error) {
      console.log('An error occurred during logout:', error);
    }
  };

  if (!BASE_API_URL) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center bg-[#f8d8c9]">
      <h1 className='text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black uppercase m-8'>
        Admin Page
      </h1>
      {!user ? (
        <div className="flex flex-col items-center justify-center w-full max-w-md">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            {view === '' && (
              <>
                {view !== 'register' && (
                  <button
                    className="p-2 text-sm sm:text-base md:text-lg font-semibold uppercase rounded text-white bg-black mx-4 active:scale-95 active:bg-gray-800"
                    onClick={() => setView('login')}
                  >
                    Login
                  </button>
                )}
                {view !== 'login' && (
                  <button
                    className="p-2 text-sm sm:text-base md:text-lg font-semibold uppercase rounded text-white bg-black mx-4 active:scale-95 active:bg-gray-800"
                    onClick={() => setView('register')}
                  >
                    Register
                  </button>
                )}
              </>
            )}
            {view === 'login' && (
              <div className="flex flex-col items-center">
                <Login onLoginSuccess={handleLoginSuccess} />
                <button
                  className="p-2 text-sm sm:text-base md:text-lg font-semibold uppercase rounded text-white bg-black mx-4 mt-4 active:scale-95 active:bg-gray-800"
                  onClick={() => setView('register')}
                >
                  Register
                </button>
              </div>
            )}
            {view === 'register' && (
              <div className="flex flex-col items-center">
                <Register onRegisterSuccess={handleRegisterSuccess} />
                <button
                  className="p-2 text-sm sm:text-base md:text-lg font-semibold uppercase rounded text-white bg-black mx-4 mt-4 active:scale-95 active:bg-gray-800"
                  onClick={() => setView('login')}
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col min-h-screen">
          <div className="flex flex-col items-center mb-6">
            <p className='text-lg sm:text-xl md:text-2xl font-semibold text-black mb-8'>
              Welcome, {user.name}!
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center mb-6 gap-4 sm:gap-8">
              <button
                onClick={() => setView('addItem')}
                className='p-2 text-sm sm:text-base md:text-lg font-semibold uppercase rounded text-white bg-black mx-4 active:scale-95 active:bg-gray-800'
              >
                Add New Menu Items
              </button>
              <button
                onClick={() => setView('allItems')}
                className='p-2 text-sm sm:text-base md:text-lg font-semibold uppercase rounded text-white bg-black mx-4 active:scale-95 active:bg-gray-800'
              >
                View All Menu Items
              </button>
              <button
                onClick={() => setView('contactMessages')}
                className='p-2 text-sm sm:text-base md:text-lg font-semibold uppercase rounded text-white bg-black mx-4 active:scale-95 active:bg-gray-800'
              >
                View Bookings
              </button>
              <button
                onClick={() => setView('notification')}
                className='p-2 text-sm sm:text-base md:text-lg font-semibold uppercase rounded text-white bg-black mx-4 active:scale-95 active:bg-gray-800'
              >
                Notifications
              </button>
              <button
                className="p-2 text-sm sm:text-base md:text-lg font-semibold uppercase rounded text-white bg-black mx-4 active:scale-95 active:bg-gray-800"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            {view === 'addItem' && <AddItem />}
            {view === 'allItems' && <Table />}
            {view === 'contactMessages' && <ContactMessages />}
            {view === 'notification' && <NotificationForm />}
          </div>
        </div>
      )}
    </div>
  );
}
