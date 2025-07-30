import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Use setTimeout to prevent immediate navigation
    const timer = setTimeout(() => {
      navigate('/preferences', { replace: true });
    }, 0);

    return () => clearTimeout(timer);
  }, [navigate]);

  return null;
};

export default Auth; 