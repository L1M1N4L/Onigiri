import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, User, Settings as SettingsIcon, LogOut } from 'lucide-react';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

const UserHeader: React.FC = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <header className="flex items-center justify-between bg-[#F8F9FA] px-8 py-4 border-b border-gray-100">
      <div className="text-2xl font-bold text-[#14274E]">Dashboard</div>
      <div className="relative" ref={ref}>
        <button
          className="flex items-center gap-2 focus:outline-none"
          onClick={() => setOpen(o => !o)}
        >
          <span className="text-[#14274E]/80 font-medium">{user?.displayName || user?.email || 'User'}</span>
          <img
            src={user?.photoURL || 'https://randomuser.me/api/portraits/men/32.jpg'}
            alt="User"
            className="w-10 h-10 rounded-full border-2 border-[#14274E]/20"
          />
          <ChevronDown size={18} className="text-[#14274E]/60" />
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 z-50 border border-gray-100">
            <button className="w-full flex items-center gap-2 px-4 py-2 text-[#14274E] hover:bg-[#F3F4F6] text-sm"><User size={16}/> Profile</button>
            <button className="w-full flex items-center gap-2 px-4 py-2 text-[#14274E] hover:bg-[#F3F4F6] text-sm"><SettingsIcon size={16}/> Settings</button>
            <button onClick={handleLogout} className="w-full flex items-center gap-2 px-4 py-2 text-[#E23946] hover:bg-[#F3F4F6] text-sm"><LogOut size={16}/> Logout</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default UserHeader; 