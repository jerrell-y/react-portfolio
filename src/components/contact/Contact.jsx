import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dv46aod', 'template_jrmbq3o', form.current, {
        publicKey: 'EIrYrUFA2E2JvMIWF'
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jerrellyeoh@gmail.com</h5>
            <a href="mailto:jerrellyeoh@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Jerrell Yeoh</h5>
            <a href="https://m.me/penguinfan165" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+6596900262</h5>
            <a href="https://api.whatsapp.com/send?phone=6596900262" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
        {/*End of contact options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='You Full Name' required/>
          <input type="email" name='email' placeholder='You Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact