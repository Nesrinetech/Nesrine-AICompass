import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Welcome to Nesrine's AI Compass</h1>
      <p>Welcome to Nesrine's AI Compass, your gateway to the cutting-edge world of artificial intelligence. Delve into a curated collection of my favorite AI tools, designed to enhace your curiosity and showcase the most valuable advancements in the field. Join me on this exciting journey as we explore the limitless potential of AI together. Let the exploration of innovation begin!</p>

      

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;