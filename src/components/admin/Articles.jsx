// Importation des modules nécessaires
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./Header";

// Définition des styles pour les différents éléments du composant
const ArticleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #fff;
  padding: 16px;
  margin-bottom: 16px;
`;

const ArticleInfo = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-right: 16px;
`;

const ArticleTitle = styled.h3`
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
`;

const ArticleText = styled.p`
  color: rgba(255, 255, 255, 0.5);
  word-wrap: break-word;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
`;

const Button = styled.button`
  color: white;
  background-color: ${(props) => props.color};
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  margin-right: 8px;
`;

// Définition du composant Articles
const Articles = () => {
  // Déclaration des états initiaux pour le composant
  const [articles, setArticles] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [editingContent, setEditingContent] = useState("");

  // Fonction pour récupérer les articles depuis l'API
  const fetchArticles = async () => {
    const response = await axios.get("http://localhost:3001/articles");
    setArticles(response.data);
  };

  // Fonction pour mettre à jour un article via l'API
  const updateArticle = async (id, updatedArticle) => {
    await axios.put(`http://localhost:3001/articles/${id}`, updatedArticle);
    await fetchArticles();
    setEditingId(null);
  };

  // Fonction pour supprimer un article via l'API
  const deleteArticle = async (id) => {
    try {
      // Récupération des commentaires de l'article
      const response = await axios.get(`http://localhost:3001/articles/${id}/comments`);
      const comments = response.data;
      
      // Suppression de chaque commentaire de l'article
      await Promise.all(comments.map(async (comment) => {
        await axios.delete(`http://localhost:3001/articles/${id}/comments/${comment.id}`);
      }));
  
      // Suppression de l'article lui-même
      await axios.delete(`http://localhost:3001/articles/${id}`);
      
      // Rafraîchissement de la liste des articles
      await fetchArticles();
    } catch (error) {
      console.error(error);
    }
  };
  

  // Effet pour récupérer les articles lors du montage du composant
  useEffect(() => {
    fetchArticles();
  }, []);

  // Fonction pour afficher ou masquer le contenu d'un article
  const toggleContent = (id) => {
    const index = articles.findIndex((article) => article.id === id);
    const updatedArticles = [...articles];
    updatedArticles[index].showContent = !updatedArticles[index].showContent;
    setArticles(updatedArticles);
  };

   // Rendu du composant Articles
  return (
    <div className="container">
      <Header />
      <h2 className="text-center" style={{ color: "#fff" }}>
        <br />
        Articles
        <br />
      </h2>
      {articles.map((article) => (
        <ArticleWrapper key={article.id}>
          <ArticleInfo>
            <ArticleTitle
              onClick={() => toggleContent(article.id)}
              style={{ cursor: "pointer" }}
            >
              {article.title}
            </ArticleTitle>
            {article.showContent && (
              <ArticleText>{article.content}</ArticleText>
            )}
          </ArticleInfo>
          <ButtonWrapper>
            <Button
              color="#0d6efd"
              onClick={() => {
                setEditingId(article.id);
                setEditingTitle(article.title);
                setEditingContent(article.content);
              }}
            >
              Editer
            </Button>
            <Button color="#dc3545" onClick={() => deleteArticle(article.id)}>
              Supprimer
            </Button>
          </ButtonWrapper>
        </ArticleWrapper>
      ))}
      {editingId !== null && (
        <div className="my-4">
          <h3>Formulaire d'édition d'un article</h3>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Titre:
            </label>
            <input
              id="title"
              type="text"
              value={editingTitle}
              onChange={(event) => setEditingTitle(event.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Contenu:
            </label>
            <textarea
              id="content" 
              rows="10"
              value={editingContent}
              onChange={(event) => setEditingContent(event.target.value)}
              className="form-control"
            />
          </div>
          <div className="d-flex justify-content-between">
            <Button
              color="#007bff"
              onClick={() =>
                updateArticle(editingId, {
                  title: editingTitle,
                  content: editingContent,
                })
              }
              className="btn btn-primary"
            >
              Enregistrer
            </Button>
            <Button
              color="#dc3545"
              onClick={() => setEditingId(null)}
              className="btn btn-danger"
            >
              Annuler
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Articles;
