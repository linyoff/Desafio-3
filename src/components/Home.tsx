import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>Bem-vindo à Tela Inicial!</h1>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default Home;
