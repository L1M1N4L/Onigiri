import React from 'react';
import { X } from 'lucide-react';
import { useNavigation } from '../hooks/useNavigation';

const CloseButton: React.FC = () => {
  const { goToHome } = useNavigation();

  return (
    <button 
      onClick={goToHome}
      className="absolute top-6 left-6 text-[#14274E]/70 hover:text-[#14274E] transition-colors"
    >
      <X size={24} />
    </button>
  );
};

export default CloseButton; 