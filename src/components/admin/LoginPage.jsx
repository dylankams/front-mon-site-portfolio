// Importation des modules nécessaires
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';

// Définition du composant LoginPage
const LoginPage = () => {
  // Déclaration des états initiaux
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Définition de la fonction de soumission du formulaire
  const handleSubmit = async (event) => {
    // Empêche le comportement par défaut du formulaire
    event.preventDefault();
    try {
      // Envoi des données d'authentification à l'API
      const response = await axios.post('http://localhost:3001/auth/login', { email:email, password:password });
      const data = response.data;
      console.log(data);
      // Si l'authentification est réussie, stockage du jeton d'authentification dans le local storage
      // et redirection vers la page d'administration
      if (data.access_token && data.success === true) {
        localStorage.setItem('token', data.access_token);
        // Configuration des en-têtes HTTP pour inclure le jeton d'authentification
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`;
        console.log(axios.defaults.headers.common['Authorization']);
        window.location.href = '/admin';
      } else {
        // Si l'authentification échoue, affichage d'un message d'erreur
        setError('Identifiants incorrects');
      }
    } catch (error) {
      // En cas d'erreur lors de l'envoi des données, affichage d'un message d'erreur
      setError('Une erreur s\'est produite. Veuillez réessayer plus tard.');
    }
  };

  // Rendu du composant LoginPage
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1>Page de connexion</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Se connecter
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;