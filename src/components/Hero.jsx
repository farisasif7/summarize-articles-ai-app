import React from 'react'
import {logo} from '../assets';
import { data_analysis } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={data_analysis} alt='summarticle_logo' className='w-28 object-contain'/>

        <button 
        type='button'
        onClick={() => window.open('https://github.com/farisasif7/summarize-articles-ai-app')}
        className='black_btn'>
          Github
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md-hidden'/>
        <span className='blue_gradient'> OpenAI GPT-4</span>
      </h1>

      <h2 className='desc'>
        Simplify your reading with SummArticle, 
        an open-source article summarizer that transforms
        long articles into short summaries.
      </h2>

    </header>
  )
}

export default Hero