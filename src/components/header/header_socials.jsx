import React from 'react'

import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/dorut-iuga-810a9b197' target="_blank" rel="noreferrer" > <BsLinkedin/> </a>
        <a href='https://github.com/dorutiga' target="_blank" rel="noreferrer"><FaGithub/> </a>
        <a href='https://www.instagram.com/dorutiuga/' target="_blank" rel="noreferrer"> <AiFillInstagram/> </a>
    </div>
  )
}

export default HeaderSocials