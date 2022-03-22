import React from 'react'
import IMG1 from '../../assets/1.jpeg';
import IMG2 from '../../assets/2.jpeg';
import './portfolio.css'
const Portfolio = () => {
  return (
    <section id = "portfolio">
    <h5> My recent Work</h5>
    <h2> Portfolio</h2>

      <div className='container portfolio_container'>
          <article className='item'>
              <div className='portfolio_image_item'>
              <img src={IMG1} alt = 'img'></img>
              </div>

              <h3> Robofriends</h3>
              <div className='cta'>
              <a href='https://github.com/dorutiga/robofriends ' className='btn '> Github</a>
              <a href='https://elated-kowalevski-9941e4.netlify.app/' className='btn btn-primary ' target='_blank' rel="noreferrer"> Live Demo</a>
              </div>
             
          </article>

          <article className='item'>
          <div className='portfolio_image_item'>
          <img src={IMG2} alt = 'img'></img>
          </div>

          <h3> Crown-Clothing</h3>

            <div className='cta'>
            <a href='https://github.com/dorutiga/crwn-clothing-2
            ' className='btn '> Github</a>
            <a href='https://determined-engelbart-8855fc.netlify.app' className='btn btn-primary ' target='_blank' rel="noreferrer"> Live Demo</a>  
            
            </div>


          
      </article>
      </div>
    
    </section>
  )
}

export default Portfolio