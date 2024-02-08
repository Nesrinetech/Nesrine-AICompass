import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Explore a collection of the best educational AI tools and other helpful resources to make your life easier. From tools that boost learning to ones that assist you in daily tasks, this platform brings you straightforward solutions. Dive in and discover user-friendly AI tools that cater to both your educational and everyday needs.</p>
       
    </div>
  </div>
);

export default Possibility;