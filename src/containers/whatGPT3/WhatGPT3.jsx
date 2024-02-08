import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Let us explore an amazing example of an AI model. What is GPT-3 ?" text="GPT-3, or Generative Pre-trained Transformer 3, is a powerful language model developed by OpenAI. With 175 billion parameters, it excels in natural language understanding and generation, capable of performing diverse tasks like translation, writing, and even code generation. Its vast size and pre-training make it one of the most advanced and versatile AI models to date." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Chatbots are computer programs designed to simulate conversation with human users. They use natural language processing to understand and respond to user queries in real-time. Commonly employed for customer support and information retrieval, chatbots enhance user engagement and automate interactions." />
      <Feature title="Knowledgebase" text="In GPT-3, a knowledge base is like a big library of information that the AI model can use to answer questions or provide context. It's a collection of facts and details that helps GPT-3 understand and generate more accurate responses. Think of it as a helpful resource that makes the AI smarter and more knowledgeable." />
      <Feature title="Education" text="GPT-3 is educational by assisting in various learning tasks, such as answering questions, providing explanations, and generating content. It acts like a helpful tutor, offering information and assistance across a wide range of subjects. Its ability to understand and generate human-like text makes it a valuable tool for educational purposes." />
    </div>
  </div>
);

export default WhatGPT3;