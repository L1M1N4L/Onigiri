import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    // First try React Router navigation
    navigate('/', { replace: true });
    
    // If that doesn't work after a short delay, try window.location
    setTimeout(() => {
      if (window.location.pathname !== '/') {
        window.location.replace('/');
      }
    }, 100);
  };

  return { goToHome };
}; 