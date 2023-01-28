import React from 'react'
import '../stylesheets/Tarea.css'

const Tarea = ({ id, texto, completada, completarTarea, eliminarTarea }) => {
  return (
    <div className='contenedor-tarea'>
      <div className='contenedor-texto'>
        <p 
          className={ completada ? 
                        'tarea-completada' :
                        '' }
        >{texto}</p>
        <input 
            type='checkbox'
            checked={completada}
            onChange={ (e) => completarTarea(id, e.target.checked) }
        />
      </div>
      <button
        className='boton-delete'
        onClick={() => eliminarTarea(id)}
      >Delete</button>
    </div>
  )
}

export default Tarea;
