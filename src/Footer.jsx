import React from 'react'
import whatsapp from './img/whatsapp.png'

export default function () {
  return (
    <footer className="footer-contact-form">
        <div className="footer-info">
            <h3>Contacta conmigo</h3>
            <p>Si tienes algún proyecto en mente o simplemente quieres decir hola, ¡me encantaría escuchar de ti!</p>
        </div> 
        <form className="contact-form">
            <div className='cont-form'>
                <input type="text" placeholder="Nombre" /> <br /> <br />
                <input type="email" placeholder="Email" /> <br /> <br />
                <textarea placeholder="Mensaje"></textarea> <br />
                <button type="submit">Enviar</button>
            </div>
            <a href="https://api.whatsapp.com/send?phone=+5037657-6555&text=Hola Técnico Tomas!" target='_blank'>
              <div className='whatsapp'>               
                  <img src={whatsapp} className='iconWhats' alt="" />
                  <p>Puedes contarctarme a WhatsApp</p>
              </div>
            </a>
        </form> <br />
    </footer>
  )
}
