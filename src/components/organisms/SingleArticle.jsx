import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { NavBar } from '../molecules/NavBar';

const ArticleContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 10px;
`;

const Content = styled.p`
  margin-bottom: 20px;
`;

const CreatedAt = styled.p`
  font-style: italic;
  margin-bottom: 30px;
`;

const CommentsContainer = styled.div`
  margin-bottom: 50px;
`;

const CommentContent = styled.p`
  margin-bottom: 5px;
`;

const CommentCreatedAt = styled.p`
  font-style: italic;
`;

const CommentForm = styled.form`
  margin-bottom: 30px;
`;

const CommentTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ced4da;
`;

const AddCommentButton = styled(Button)`
  background-color: #007bff;
  border-color: #007bff;
  &:hover {
    background-color: #0069d9;
    border-color: #0062cc;
  }
`;

const SingleArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/articles/${id}`)
      .then(response => {
        setArticle(response.data);
        axios.get(`http://localhost:3001/articles/${id}/comments`)
          .then(response => {
            setComments(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:3001/articles/${id}/comments`, { content: comment })
      .then(response => {
        setComments([...comments, response.data]);
        setComment('');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <NavBar />
      <ArticleContainer>
      {article ? (
        <>
          <div style={{ height: '240px' }}></div> 
          <Title>{article.title}</Title>
          <CreatedAt>Créé le: {article.createdAt}</CreatedAt>
          <Content>{article.content}</Content>
          <h2>Commentaires</h2>
          <CommentsContainer>
            {comments.map(comment => (
              <div key={comment.id}>
                <CommentContent>{comment.content}</CommentContent>
                <CommentCreatedAt>Ajouté le: {comment.createdAt}</CommentCreatedAt>
              </div>
            ))}
          </CommentsContainer>
          <CommentForm onSubmit={handleCommentSubmit}>
            <CommentTextArea value={comment} onChange={e => setComment(e.target.value)}></CommentTextArea>
            <AddCommentButton type="submit">Ajouter</AddCommentButton>
          </CommentForm>
        </>
      ) : (
        <p>chargement...</p>
      )}
    </ArticleContainer>
  </div>
  );
};

export default SingleArticle;
