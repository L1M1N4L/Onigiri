import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, PlayCircle, Calendar, Info } from 'lucide-react';

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: <BookOpen size={20} /> },
  { to: '/courses', label: 'All Courses', icon: <BookOpen size={20} /> },
  { to: '/pricing', label: 'Pricing', icon: <Calendar size={20} /> },
  { to: '/simulation', label: 'Simulation', icon: <PlayCircle size={20} /> },
  { to: '/about', label: 'About Us', icon: <Info size={20} /> },
];

const UserSidebar: React.FC = () => (
  <aside className="w-64 bg-white border-r border-gray-100 flex flex-col py-8 px-6 min-h-screen">
    <div className="mb-10">
      <div className="font-bold text-lg text-[#14274E] mb-2">Onigiri</div>
      <div className="text-xs text-[#14274E]/60">Learn Japanese</div>
    </div>
    <nav className="space-y-2 flex-1">
      {links.map(link => (
        <Link
          key={link.to}
          to={link.to}
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#14274E]/90 hover:bg-[#F3F4F6] font-medium transition"
        >
          {link.icon} {link.label}
        </Link>
      ))}
    </nav>
  </aside>
);

export default UserSidebar; 