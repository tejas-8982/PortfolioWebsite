import React from 'react'
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import  Home  from './pages/Home';
import Projects  from './pages/Projects';
import  Experiences  from './pages/Experiences';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/experiences' element={<Experiences/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
