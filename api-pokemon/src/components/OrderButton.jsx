import React from 'react'
import { useContext } from 'react'
import { PokeContext } from '../context/PokeContext';

const OrderButton = () => {

    const {array, setArray } = useContext( PokeContext );

    const handleClick = () => {
        setArray({
            ...array,
            show: !array.show
        });
    };

    return (
        <div>
            <button className='btn btn-secondary mb-4' onClick={handleClick}>
                Fetch Pokemon
            </button>
        </div>
    )
}

export default OrderButton
