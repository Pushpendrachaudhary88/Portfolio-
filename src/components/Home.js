import React from 'react'
import { useNavigate } from 'react-router-dom'







const Home = () => {
    const navigate = useNavigate();
  

  
   
    
  return (
    <div>
        <div className='home'>
            <div className='left'>
                <h1> Hi All I'm Pushpendra Chaudhary 👋 </h1>
                <p>A passionate Web Developer  Having an <br />
                   experience of building Web Application with <br />
                   HTML5,CSS3,Javascript,Reactjs,Router,Firebase<br />
                   and some other cool libraries and framwork.
                </p>

                <div className='icon'>
               
                <i class="fa-brands fa-github" style={{color: "#0a0a0a"}}></i>
                <i class="fa-brands fa-linkedin" style={{color: "#2369e1"}}></i>
                <i class="fa-brands fa-google" style={{color: "#d53007"}}></i>
                <i class="fa-brands fa-discord" style={{color: "#e7b018"}}></i> 
                <i class="fa-brands fa-facebook" style={{color: "#1f60d1"}}></i>
                
                </div>
                <div className='btn'>
                    <button onClick={() => navigate("/Contact")}>CONTACT ME</button>
                    <button onClick={() => navigate("/Navber")}>SEE MY RESUME</button>
                  
                </div>
            </div>
            <div className='img'>
               <img src="https://images.unsplash.com/photo-1581093686959-108b3114cc49?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="#" />
            </div>


        </div>



    </div>
  )
}

export default Home