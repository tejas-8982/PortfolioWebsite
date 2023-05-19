import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../Styles/Footer.css';
function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
      <InstagramIcon onClick={()=>{
        window.location.href="https://www.instagram.com/t.e.j.a.s._04/";
      }} />
      <TwitterIcon onClick={()=>{
        window.location.href="https://twitter.com/chouhanTejas01";
      }}/>
      <LinkedInIcon onClick={()=>{
        window.location.href= "https://www.linkedin.com/in/tejas-chouhan-79531a1a0/";
      }} />
      <GitHubIcon onClick={()=>{
        window.location.href="https://github.com/tejas-8982";
      }}/>
      </div>
      <p> &copy; 2023 TejasPortfolio.com </p>
    </div>
  )
}

export default Footer
