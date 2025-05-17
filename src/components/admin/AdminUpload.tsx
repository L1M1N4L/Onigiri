import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const AdminUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
      <div className="flex items-center gap-2 mb-2">
        <Upload className="text-[#14274E]" size={22} />
        <h2 className="text-lg font-bold text-[#14274E]">Upload Materials</h2>
      </div>
      <input
        type="file"
        accept=".pdf,image/*,video/*"
        onChange={handleChange}
        className="mb-2"
      />
      {file && (
        <div className="text-sm text-[#14274E]/80">
          <span className="font-medium">Selected:</span> {file.name} ({file.type})
        </div>
      )}
      <button
        className="bg-[#14274E] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#1a3a6e] transition disabled:opacity-50"
        disabled={!file}
      >
        Upload (Mock)
      </button>
    </div>
  );
};

export default AdminUpload; 