import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { NavBar } from '../molecules/NavBar';
import styled from 'styled-components';

const ContentContainer = styled.div`
  margin-bottom: 160px;
  margin-top: 170px;
`;

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/articles')
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <NavBar />
      <ContentContainer>
        <h1>Blog</h1>
        {articles.map(article => (
          <div key={article.id}>
            <h2><Link to={`articles/${article.id}`}>{article.title}</Link></h2>
          </div>
        ))}
      </ContentContainer>
    </>
  );
};

export default Blog;
