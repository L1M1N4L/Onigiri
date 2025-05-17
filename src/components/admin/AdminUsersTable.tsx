import React from 'react';
import { Edit, Trash2 } from 'lucide-react';

const users = [
  { id: 1, name: 'Ida Bagus Kerthayayana M.', email: 'ida@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'John Smith', email: 'john@example.com', role: 'User' },
];

const AdminUsersTable: React.FC = () => (
  <div className="bg-white rounded-xl shadow p-6 mt-8">
    <h2 className="text-lg font-bold text-[#14274E] mb-4">Users</h2>
    <table className="w-full text-left">
      <thead>
        <tr className="text-[#14274E]/70 text-sm">
          <th className="py-2">Name</th>
          <th className="py-2">Email</th>
          <th className="py-2">Role</th>
          <th className="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id} className="border-t border-gray-100 hover:bg-[#F3F4F6]">
            <td className="py-2 font-medium text-[#14274E]">{user.name}</td>
            <td className="py-2 text-xs text-[#14274E]/60">{user.email}</td>
            <td className="py-2">{user.role}</td>
            <td className="py-2 flex gap-2">
              <button className="p-1 rounded hover:bg-[#F3F4F6]" title="Edit"><Edit size={16} className="text-[#14274E]" /></button>
              <button className="p-1 rounded hover:bg-[#F3F4F6]" title="Delete"><Trash2 size={16} className="text-[#E23946]" /></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AdminUsersTable; 