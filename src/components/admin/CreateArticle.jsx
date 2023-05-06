import React, { useState } from 'react';
import axios from 'axios'; // Importation de la bibliothèque axios pour effectuer des requêtes HTTP
import styled from 'styled-components'; // Importation de la bibliothèque styled-components pour styliser les composants
import Header from './Header'; // Importation du composant Header

// Définition du composant Button stylisé avec styled-components
const Button = styled.button`
  color: white;
  background-color: #007bff;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  margin-right: 8px;
  display: block;
  margin: 0 auto;
  &:hover {
    background-color: #007bff;
  }
`;

// Définition du composant SuccessMessage stylisé avec styled-components
const SuccessMessage = styled.p`
  background-color: #28a745;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  text-align: center;
  margin-top: 16px;
`;

// Définition du composant CreateArticle sous forme de fonction
const CreateArticle = () => {
  const [title, setTitle] = useState(''); // Déclaration d'un état title avec une valeur initiale vide
  const [content, setContent] = useState(''); // Déclaration d'un état content avec une valeur initiale vide
  const [success, setSuccess] = useState(false); // Déclaration d'un état success avec une valeur initiale false

  // Fonction qui envoie une requête HTTP POST pour créer un nouvel article
  const createArticle = async () => {
    if (!title || !content) { // Si le titre ou le contenu est vide
      alert('Veuillez remplir tous les champs'); // Afficher une alerte
      return;
    }
    try {
      await axios.post('http://localhost:3001/articles', { // Envoi de la requête POST à l'URL http://localhost:3001/articles avec le titre et le contenu de l'article
        title: title,
        content: content 
      });
      setTitle(''); // Remise à zéro de l'état title
      setContent(''); // Remise à zéro de l'état content
      setSuccess(true); // Modification de l'état success à true
      setTimeout(() => { // Utilisation de setTimeout pour remettre l'état success à false après 3 secondes
        setSuccess(false);
      }, 3000);
    } catch (error) { // Si une erreur se produit lors de la requête POST
      console.error(error);
      alert('Une erreur est survenue lors de la création de l\'article'); // Afficher une alerte
    }
  };

  // Retourne le code JSX du composant CreateArticle
  return (
    <div className="container mt-5">
      <Header />
      <br />
      <h2 className="text-center mb-4">Formulaire d'ajout d'un article</h2>
      {success && <SuccessMessage>L'article a été créé avec succès</SuccessMessage>}
      <form className="row g-3" onSubmit={(event) => {
        event.preventDefault();
        createArticle();
      }}>
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">Titre:</label>
          <input id="title" type="text" className="form-control" value={title} onChange={(event) => setTitle(event.target.value)}/>
        </div>
        <div className="col-md-12">
          <label htmlFor="content" className="form-label">Contenu:</label>
          <textarea id="content" className="form-control" rows="10" value={content} onChange={(event) => setContent(event.target.value)}></textarea>
        </div>
        <div className="col-12">
          <Button type="submit" className="btn btn-success">Créer</Button><br />
        </div>
      </form>
    </div>
  );
};

export default CreateArticle;
