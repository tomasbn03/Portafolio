import React from 'react'
import audifono from './img/auricular.png'
import deporte from './img/corriendo.png'
import gaming from './img/gaming.png'

// Imagenes de habilidades
import js from './habilidades/js.png'
import php from './habilidades/php.png'
import html from './habilidades/html-5.png'
import css from './habilidades/css-3.png'
import git from './habilidades/git.png'
import vscode from './habilidades/vs.png'
import mysql from './habilidades/mysql.png'

export default function ComponenteBody() {
  return (
    // Sub contenedor del body
        <div className='sub-container'>
            <div className='sobremi'>
                <h3>Sobre mi / About me</h3>
                <p><b>Hola, soy Tomas Bonilla.</b> Estudiante de segúndo año en la carrera técnica de 
                  Desarrollo de Softwarte, me especializo en el área de desarrollo de páginas web y aplicaciones 
                  web con conocimientos básicos.</p>
                <h4>Datos personales</h4>
                <p>
                  <b>Email:</b> tomasbonilla32@gmail.com <br />
                  <b>Teléfono:</b> +503 7657-6555 <br />
                  <b>Fecha de nacimiento:</b> 15 de febrero de 2003 <br />
                  <b>Dirección:</b> Distrito de Pasaquina, Municipio de La Unión Norte, Departamento de La Unión, El Salvador<br />
                </p>
                <div className='hobbies'>
                    <h4>Hobbies</h4>
                    <ul>
                      <li><img src={audifono} className='music' alt="Música" /><br />Música</li>
                      <li><img src={deporte} className='sport' alt="Deporte" /><br />Deporte</li>
                      <li><img src={gaming} className='game' alt="Video juegos" /><br />Video juegos</li>
                    </ul>
                </div><br /> <br />
            </div><br />

            <div className='herramientas'>
                  <h3>Habilidades / Skills</h3>
                  <h4>Herrameintas Técnicas</h4>
                  <p>Estas son algunas herramientas técnicas que manejo:</p>
                  <div className='hrrmnts'>
                      <div className='cont-hrr'>
                        <img src={js} alt="JavaScript" />
                        <img src={php} alt="PHP" />
                        <img src={html} alt="HTML" />
                        <img src={css} alt="CSS" />
                        <img src={git} alt="git" />
                        <img src={vscode} alt="Vs Code" />
                        <img src={mysql} alt="MySQL" /> 
                      </div>
                  </div>
                  <h4>Habilidades profesionales</h4>
                  <p>Estas son algunas habilidades profesionales/personales que  manejo: </p>
                  <ul>
                      <li><b>Comunicación</b></li>
                      <li><b>Trabajo en equipo</b></li>
                      <li><b>Dedicación</b></li>
                      <li><b>Aprender haciendo</b></li>
                  </ul>
                  <br />
            </div><br /><br />

</div>
  )
}
