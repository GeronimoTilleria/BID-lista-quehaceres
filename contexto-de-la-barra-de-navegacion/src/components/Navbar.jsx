import React, { useContext } from 'react'
import { NameContext } from '../context/NameContext'

const Navbar = () => {
    const { name } = useContext( NameContext );
    return (
        <header className='navbar bg-primary px-4 d-flex justify-content-end mb-4' style={{'height': '60px'}}>
            {
                name !== '' ? 
                <p className='text-white fs-4'>Hi {name}!</p> :
                ''
            }
            
        </header>
    )
}

export default Navbar
