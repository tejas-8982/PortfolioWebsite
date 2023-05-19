import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../Styles/Home.css';
function Home() {
  return (
    <div className='home'>
      <div className='about'>
      <h2>Hi, My name is Tejas</h2>
      <div className='prompt'>
      <p>A software developer with a passion for learning and creating. </p>
        <LinkedInIcon onClick={()=>{
          window.location.href= "https://www.linkedin.com/in/tejas-chouhan-79531a1a0/";
        }}></LinkedInIcon>
        <EmailIcon onClick={()=>{
          window.location.href="https://mail.google.com/mail/u/0/#inbox";
        }} />
        <GitHubIcon onClick={()=>{
          window.location.href="https://github.com/tejas-8982";
        }}/>
        </div>
      </div>
      <div className='skills'>
      <h1>Skills</h1>
      <ol className='list'>
      <li className='item'>
     <h2>Front-End</h2>
     <span>
     ReactJS, HTML, CSS, JavaScript, MaterialUI
     </span> 
      </li>
      <li className='item'>
     <h2>Back-End</h2>
     <span>
     Java, MySQL
     </span> 
      </li>
      <li className='item'>
     <h2>Programming languages</h2>
     <span>
     C, JavaScript, Core Java, Java Servlet, Java Servlet Pages (JSP)
     </span> 
      </li>
      </ol>
      </div>
    </div>
  )
}

export default Home
