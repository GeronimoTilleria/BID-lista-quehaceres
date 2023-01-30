import React, { useContext, useState } from 'react'
import { NameContext } from '../context/NameContext'

const Form = () => {

    const [ entradaName, setEntradaName ] = useState('');
    const [ error, setError ] = useState('');

    const { setName } = useContext( NameContext );

    const handleNameChanges = e => {
        const { value } = e.target;
        
        if(value === '') {
            setError('Ingrese nombre');
        } else {
            setError('');
            setEntradaName(value);
        }
    };

    const handlesubmit = e => {
        e.preventDefault();

        if(entradaName.length <= 1) {
            setName('');
        }else {
            setName(entradaName);
        }
        
    };
    
    return (
        <form onSubmit={handlesubmit} className='container'>
            <div>
                <label>Your Name: &nbsp;</label>
                <input 
                    type='text'
                    className='d-inline-block w-50 border rounded bg-light p-2 mb-3'
                    onChange={handleNameChanges}
                />
                {
                    error ?
                        <p className='alert alert-danger'>{error}</p> :
                        ''
                }
            </div>
        </form>
    )
}

export default Form
