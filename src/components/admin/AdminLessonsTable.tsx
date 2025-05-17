import React from 'react';
import { Edit, Trash2 } from 'lucide-react';

const lessons = [
  { id: 1, title: 'N5 Grammar: Particles', type: 'PDF', date: '2024-05-18' },
  { id: 2, title: 'N5 Vocabulary: Food', type: 'Image', date: '2024-05-17' },
  { id: 3, title: 'N5 Reading: Short Story', type: 'Video', date: '2024-05-16' },
];

const AdminLessonsTable: React.FC = () => (
  <div className="bg-white rounded-xl shadow p-6">
    <h2 className="text-lg font-bold text-[#14274E] mb-4">Manage Lessons</h2>
    <table className="w-full text-left">
      <thead>
        <tr className="text-[#14274E]/70 text-sm">
          <th className="py-2">Title</th>
          <th className="py-2">Type</th>
          <th className="py-2">Date</th>
          <th className="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {lessons.map(lesson => (
          <tr key={lesson.id} className="border-t border-gray-100 hover:bg-[#F3F4F6]">
            <td className="py-2 font-medium text-[#14274E]">{lesson.title}</td>
            <td className="py-2">{lesson.type}</td>
            <td className="py-2 text-xs text-[#14274E]/60">{lesson.date}</td>
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

export default AdminLessonsTable; 