import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #a3c1d0;
  padding: 16px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-left: 16px;
`;

const LogoutButton = styled.button`
  background-color: #f44336; 
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-left: 16px;
  padding: 8px 16px; 
  border-radius: 4px; 
`;


const Header = () => {
  const navigation = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access_token'); // Efface le token côté client
    navigation('/login'); // Redirige vers la page de connexion
  };

  return (
    <HeaderContainer>
      <h1>Gestion des articles</h1>
      <div>
        <StyledLink to="/articles/new">Ajouter un article</StyledLink>
        <StyledLink to="/admin">Liste des articles</StyledLink>
        <LogoutButton onClick={handleLogout}>Se déconnecter</LogoutButton>
      </div>
    </HeaderContainer>
  );
};

export default Header;

