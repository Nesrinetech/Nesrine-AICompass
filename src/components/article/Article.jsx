import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text, link }) => (
  <div className="gpt3__blog-container_article">
    <a href={link} target="_blank" rel="noopener noreferrer">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p></p>
    </div>
    </a>
  </div>
);

export default Article;
