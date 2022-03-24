import React from 'react'

import PortfolioItem from './portfolio-item-component';
import './portfolio.css'
const Portfolio = () => {
  const projects = [
    {
      id: '1',
      image: "https://i.ibb.co/sPhh62B/Whats-App-Image-2022-03-24-at-13-17-25.jpg",
      name: "Robofriends",
      github: 'https://github.com/dorutiga/robofriends',
      live: 'https://elated-kowalevski-9941e4.netlify.app/'
    },
    {
      id: '2',
      image: "https://i.ibb.co/qR0xxQZ/Whats-App-Image-2022-03-24-at-13-17-25-1.jpg",
      name: "Crown Clothing",
      github: 'https://github.com/dorutiga/crwn-clothing-2',
      live: 'https://determined-engelbart-8855fc.netlify.app'
    },
    {
      id: '3',
      image: "https://i.ibb.co/jbKRFLc/Whats-App-Image-2022-03-24-at-11-01-02.jpg",
      name: "Quote Generator",
      github: 'https://github.com/dorutiga/quote-generator',
      live: 'https://beautiful-crostata-82f78f.netlify.app/'
    }
  ]
  return (
    <section id = "portfolio">
    <h5> My recent Work</h5>
    <h2> Portfolio</h2>

      <div className='container portfolio_container'>
      {
        projects.map((project)=> 
        <PortfolioItem  key = {project.id} project ={project}/>
        )
      }
         

      </div>
    
    </section>
  )
}

export default Portfolio


