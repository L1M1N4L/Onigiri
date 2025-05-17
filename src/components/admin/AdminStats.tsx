import React from 'react';
import { Users, BookOpen, Upload } from 'lucide-react';

const stats = [
  { label: 'Total Users', value: 1243, icon: <Users size={28} className="text-[#14274E]" /> },
  { label: 'Total Lessons', value: 87, icon: <BookOpen size={28} className="text-[#14274E]" /> },
  { label: 'Total Uploads', value: 312, icon: <Upload size={28} className="text-[#14274E]" /> },
];

const AdminStats: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {stats.map(stat => (
      <div key={stat.label} className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
        {stat.icon}
        <div>
          <div className="text-2xl font-bold text-[#14274E]">{stat.value}</div>
          <div className="text-sm text-[#14274E]/70">{stat.label}</div>
        </div>
      </div>
    ))}
  </div>
);

export default AdminStats; 