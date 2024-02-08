import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Versatile Conversations',
    text: 'The power of GPT-3 natural language processing, allowing it to engage in versatile and dynamic conversations. From answering questions to simulating human-like interactions, GPT-3 excels in diverse conversational scenarios.'
  },
  {
    title: 'Innovative Problem Solving',
    text: 'Witness GPT-3 prowess in innovative problem-solving. Leverage its expansive knowledge base to find creative solutions and generate insights across various domains. Experience the AI ability to tackle complex challenges with ease.',
  },
  {
    title: 'Content Creation',
    text: 'Whether in writing articles, generating creative text, or crafting code snippets, GPT-3 showcases its wizardry in producing high-quality and contextually relevant content on demand.',
  },
  {
    title: 'Educational Companion',
    text:'Benefit from its capabilities to explain concepts, answer queries, and provide insightful information. Experience a personalized learning journey with this versatile AI tool.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Explore the most GPT-3 valuable features :</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;