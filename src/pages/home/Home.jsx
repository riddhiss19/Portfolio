import React from 'react'
import Profile from "../../assets/Home1.png"
import { Link } from 'react-router-dom'
import {BsArrowRight} from "react-icons/bs"
import "./home.css"

const Home = () => {
  return (
    <section className="home section grid">
      
      <img src={Profile} alt="home " className="home__img" />
      
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
           <span> I'm Riddhi Sonawane. </span> Web Developer
          </h1>

          <p className="home__description">
          I am a computer engineering student with a strong interest in designing and web development. I'm an AI geek and a keen learner. I am constantly looking for new ways to push the limits.  
          </p>

          <Link to="/about" className='button'>
            More About Me<span className='button__icon'><BsArrowRight/> </span>
          </Link>

        </div>
      </div>

      <div className="color__block"></div>
    </section>
  )
}

export default Home
