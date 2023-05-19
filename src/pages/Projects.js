import React from 'react'
import Projectitems from '../components/Projectitems'
import '../Styles/Projects.css';
import todo from '../Assets/todo.png';
import socialmedia from '../Assets/socialmedia.jpg'
import busbooking from '../Assets/busbooking.png'
function Projects() {
  return (
    <div className='projects'>
     <h1>My Personal Projects</h1>
     <div className='projecList'>
     <Projectitems name="Crypto Tracker" image={socialmedia} onClick={()=>{
      window.location.href="https://github.com/tejas-8982/CryptoReactApp";
    }}/>
     <Projectitems name="To-do List" image={todo} onClick={()=>{
      window.location.href="https://github.com/tejas-8982/to-do-list-in-react";
     }}/>
     <Projectitems name="Red Bus Clone" image={busbooking} onClick ={()=>{
      window.location.href="https://github.com/tejas-8982/Bus-Ticket-booking-system";
     }}/>

     </div>
    </div>
  )
}

export default Projects
