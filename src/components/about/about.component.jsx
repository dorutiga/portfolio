import React from 'react'
import './about.css';
import Me from '../../assets/about-me.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc';
 const About = () => {
  return (
   <section id = "about">
   
   <h5> Get To Know</h5>
   <h2>About me</h2>

   <div className='container about_container'>
   <div className='about_me'>
    <div className='about_me_image'>
        <img src={Me} alt= ''/>
    </div>
    </div>
    <div className='about_content'>
      <div className='about_cards'>
        <article className='about_card'>
        <FaAward  className='about_icon'/>
        <h5> Experience</h5>
        <small> Flutter </small>
        </article>
      </div>
    </div>
    
    <div className='about_cards'>
      <article className='about_card'>
      <VscFolderLibrary  className='about_icon'/>
      <h5> Personal Projects</h5>
      <small> React JS </small>
      </article>
    
    <p>Lorem ipsum dolor sit amet consectrtur adipisicing elitLorem ipsum dolor sit amet consectrtur adipisicing elitLorem ipsum dolor sit
     amet consectrtur adipisicing elit</p>

     <a href='#contact' className='btn  btn-primary'> Let's Talk</a>
  </div>
   </div>
   </section>
  )
}

export default About;