import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening in the world of Artificial Intelligence, <br /> Let's explore...</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Feb 08, 2024" text="The Elements of AI: is a series of free online courses created by MinnaLearn and the University of Helsinki.
. Let us explore what it is?" link="https://www.elementsofai.com/" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 13, 2023" text="Nesrine's OpenAI GPT-4 app
. Let us explore what it is?" link="https://sensational-pavlova-397fed.netlify.app/" />
        <Article imgUrl={blog03} date="Feb 08, 2024" text="Perplexity AI: unlocks the power of knowledge with information discovery and sharing." link="https://www.perplexity.ai/" />
        <Article imgUrl={blog04} date="Feb 08, 2024" text="Otter.ai - AI Meeting Note Taker & Real-time AI Transcription. Let us explore what it is?" link="https://otter.ai/home" />
        <Article imgUrl={blog05} date="Feb 08, 2024" text="Create beautiful, engaging presentations and content powered by AI with none of the formatting and design work." link="https://gamma.app/" />
      </div>
    </div>
  </div>
);

export default Blog;