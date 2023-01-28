import React, { useEffect, useState } from 'react'
import FormularioTarea from './FormularioTarea'
import Tarea from './Tarea'
import '../stylesheets/ListaTareas.css';

const ListaTareas = () => {

  const [tareas, setTareas] = useState( () => {
    const guardado = localStorage.getItem('tareas');
    const valorInicial = JSON.parse(guardado);
    return valorInicial || [];
  } );

  useEffect( () => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas] );
  
  const agregarTarea = tarea => {
    tarea.texto = tarea.texto.trim();
    const tareasActualizadas = [tarea, ...tareas];
    setTareas(tareasActualizadas);
  }

  const completarTarea = (id, estado) => {
    const tareasActualizadas = tareas.map( tarea => {
      if(tarea.id === id)
        tarea.completada = estado;
      return tarea;
    } )
    setTareas(tareasActualizadas);
  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter( tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  return (
    <div>
       <FormularioTarea
        onSubmit={agregarTarea}
       /> 
       <div className='contenedor-lista-tareas'>
        {
          tareas.map( tarea => 
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            /> )
        }
       </div>
    </div>
  )
}

export default ListaTareas