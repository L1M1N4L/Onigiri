import React from 'react';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminHeader from '../components/admin/AdminHeader';
import AdminStats from '../components/admin/AdminStats';
import AdminUpload from '../components/admin/AdminUpload';
import AdminLessonsTable from '../components/admin/AdminLessonsTable';
import AdminUsersTable from '../components/admin/AdminUsersTable';

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-[#F8F9FA]">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-8 space-y-8">
          <AdminStats />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AdminUpload />
            <AdminLessonsTable />
          </div>
          <AdminUsersTable />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard; 