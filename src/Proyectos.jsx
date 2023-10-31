import React from 'react'

import taskmodelHTML from './proyectos/taskmodelHtml.png'
import pokedex from './proyectos/pokedex.png'
import taskmodelcmd from './proyectos/taskmodelcmd.png'
import crud from './proyectos/crud.png'

export default function Proyectos() {
  return (
    
    <div className='proyectos'>
        <h3>Proyectos / Projects</h3>
        <div className='proyct'>
            <div className='sub-cont-p1'>
                <h4>PokéDex</h4>
                <img src={pokedex} alt="Proyecto 1" className="proyecto-imagen" />
                <h5>Descripción:</h5>
                <p className="proyecto-descripcion">Este proyecto consiste en una aplicación web interactiva que permite buscar Pokemons por el tipo y por el nombre.</p>
                <h5>Técnologías utilizadas:</h5>
                <ul className="tecnologias-lista">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>API Pokédex</li>
                </ul>
                <a href="https://github.com/tomasbn03/pok-Dex/tree/main" target="_blank" rel="noopener noreferrer" className="proyecto-codigo">Código Fuente</a>
            </div>        
        </div> 

        <div className='proyct'>
                <h4>Administrador de Tareas básico</h4>
                <img src={taskmodelHTML} alt="Proyecto 2" className="proyecto-imagen" />
                <h5>Descripción:</h5>
                <p className="proyecto-descripcion">Este pequeño proyecto consiste en un administrador de tareas báscio, 
                la aplicación permite agregar e eliminar tareas de una manera simple.</p>
                <h5>Técnologías utilizadas:</h5>
                <ul className="tecnologias-lista">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
                <a href="https://github.com/tomasbn03/TaskModel" target="_blank" rel="noopener noreferrer" className="proyecto-codigo">Código Fuente</a>
        </div>   

        <div className='proyct'>
                <h4>Administrador de Tareas en consola</h4>
                <img src={taskmodelcmd} alt="Proyecto 3" className="proyecto-imagen" />
                <h5>Descripción:</h5>
                <p className="proyecto-descripcion">Este pequeño proyecto consiste en un administrador de tareas báscio, 
                la aplicación permite agregar e eliminar tareas de una manera simple desde la cualquier consola.</p>
                <h5>Técnologías utilizadas:</h5>
                <ul className="tecnologias-lista">
                    <li>JavaScript</li>
                </ul>
                <a href="https://github.com/tomasbn03/TaskModel" target="_blank" rel="noopener noreferrer" className="proyecto-codigo">Código Fuente</a>
        </div>  

        <div className='proyct'>
                <h4>CRUD de usuario utilizando sesiones</h4>
                <img src={crud} alt="Proyecto 4" className="proyecto-imagen" />
                <h5>Descripción:</h5>
                <p className="proyecto-descripcion">La aplicación web consiste en un sistema funcional para gestionar usuarios según rol,
                la aplicación funciona con sesiones por lo tanto incluye un login, algo básico.</p>
                <h5>Técnologías utilizadas:</h5>
                <ul className="tecnologias-lista">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>PHP</li>
                    <li>MySQL</li>
                </ul>
                <a href="https://github.com/tomasbn03/crud" target="_blank" rel="noopener noreferrer" className="proyecto-codigo">Código Fuente</a>
        </div>
    </div>       
  )
}
