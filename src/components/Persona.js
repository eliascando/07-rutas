import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {
    const {nombre} = useParams();
    const navegar = useNavigate();

    const enviar = (e) => {
        e.preventDefault();

        let nombre = e.target.nombre.value;
        let url = `/persona/${nombre}`;
        navegar(url);
    };
  return (
    <div>
        {nombre&&<h1>Persona: {nombre}</h1>}
        {!nombre&&<h1>Persona no existe</h1>}
        <p>Pagina de persona</p>

        <form onSubmit={enviar}>
            <input type='text' name='nombre'/>
            <input type='submit' name='enviar' value='enviar'/>
        </form>
    </div>
  )
}