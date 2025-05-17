import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Upload, BookOpen, Users, Settings } from 'lucide-react';

const links = [
  { to: '/admin', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { to: '/admin/upload', label: 'Upload Materials', icon: <Upload size={20} /> },
  { to: '/admin/lessons', label: 'Manage Lessons', icon: <BookOpen size={20} /> },
  { to: '/admin/users', label: 'Users', icon: <Users size={20} /> },
  { to: '/admin/settings', label: 'Settings', icon: <Settings size={20} /> },
];

const AdminSidebar: React.FC = () => (
  <aside className="w-64 bg-white border-r border-gray-100 flex flex-col py-8 px-6 min-h-screen">
    <div className="mb-10">
      <div className="font-bold text-lg text-[#14274E] mb-2">Admin Panel</div>
      <div className="text-xs text-[#14274E]/60">Onigiri CMS</div>
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

export default AdminSidebar; 