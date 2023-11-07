import React from 'react'
import imgDisign from './img/imgPrtfl.jpg'
import facebook from './img/facebook.png'
import linkedin from './img/linkedin.png'
import instagram from './img/instagram.png'
import x from './img/x.png'
import github from './img/github.png'



export default function Component() {
  return (
    <div>
      <div className='info-per'>
          <img src={imgDisign} className='prfl' alt="" /> 
          <h3>Tomas Bonilla</h3>
          <p>Téc. Desarrollo de Software</p>
          <div className='socialm'>
            <a href="https://www.facebook.com/profile.php?id=100010109011946" target='_blank'><img className='social-icon' src={facebook} alt="" /></a>
            <a href=""><img className='social-icon' src={linkedin} alt="" /></a>
            <a href="https://www.instagram.com/tomasbnll/" target='_blank'><img className='social-icon' src={instagram} alt="" /></a>
            <a href="https://twitter.com/tomaas_03" target='_blank'><img className='social-icon' src={x} alt="" /></a>
            <a href="https://github.com/tomasbn03?tab=repositories" target='_blank'><img className='social-icon' src={github} alt="github" /></a>
          </div>
      </div>
    </div>
  )
}

