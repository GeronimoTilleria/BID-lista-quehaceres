import React, { useState } from 'react'
import '../stylesheets/FormularioTarea.css'
import { v4 as uuidv4 } from 'uuid';

const FormularioTarea = ({ onSubmit }) => {

  const [entradaTarea, setEntradaTarea] = useState('');
  const [error, setError] = useState('');
  
  const manejarCambios = e => {
    const { value } = e.target;
    setError('');
    setEntradaTarea(value);
  };

  const manejarEnvio = e => {
    e.preventDefault();
    if(entradaTarea !== '') {
      const tarea = {
        id: uuidv4(),
        texto: entradaTarea,
        completada: false
      }
      setEntradaTarea('');
      onSubmit(tarea);
     
    } else {
      setError('Escribe la tarea');
    }
  }

  return (
    <form onSubmit={manejarEnvio}>
      <div>
        <input
            className='input-tarea'
            value={entradaTarea}
            onChange={manejarCambios}
        />
        {
          error ? 
            <p className='error'>{error}</p> :
            ''
        }
      </div>
      <input
        type='submit'
        className='boton-enviar'
        value='Add'
      />
    </form>
  )
}

export default FormularioTarea
