import React from 'react'
import{
  FaRegEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  
} from 'react-icons/fa'
import {FiSend} from 'react-icons/fi'
import "./contact.css"
// formsubmit- to implement emails sending

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">Get In <span>Touch</span>  </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">
            Don't Be shy
          </h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaRegEnvelope className="info__icon"/>
              <div>
                <span className="info__title">Email</span>&nbsp;&nbsp;
                <h4 className="info__desc" ><a href='mailto:riddhiss19@gmail.com'> riddhiss19@gmail.com</a></h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneAlt className="info__icon"/>
              <div>
                <span className="info__title">
                  Contact No.
                </span>
                &nbsp;&nbsp;
                <h4 className="info__desc">
                 <a href="tel:+918080247967"> +91 8080247967 </a>
                </h4>
              </div>
            </div>

          </div>
          <div className='contact__social'>
          <a href="https://www.instagram.com/riddhi_sonawane18/" className="contact__social-link">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/riddhi-sonawane-ba8310205/" className="contact__social-link">
            <FaLinkedin />
          </a>
          <a href="https://github.com/riddhiss19" className="contact__social-link">
            <FaGithub />
          </a>
          </div>
        </div>

        <form className="contact__form" action="https://formsubmit.co/riddhiss19@gmail.com" method="POST" >
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text" name='name' placeholder='Your Name' className="form__control" />
            </div>

            <div className="form__input-div">
              <input type="email" name='email' placeholder='Your Email' className="form__control" />
            </div>

            <div className="form__input-div">
              <input type="text" name='subject' placeholder='Subject' className="form__control" />
            </div>
          </div>
          <div className="form__input-div">
              <textarea placeholder='Your Message' name='message' className="form__control textarea"></textarea>
            </div>

            <button className="button" >
              Send Message
              <span className="button__icon contact__button-icon">
                <FiSend />
              </span>
            </button>
        </form>
      </div>  
    </section>
  )
}

export default Contact
