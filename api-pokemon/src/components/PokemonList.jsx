import React from 'react'

import { useContext } from 'react'
import { PokeContext } from '../context/PokeContext';
import OrderButton from './OrderButton';

const PokemonList = () => {

    const { array } = useContext(PokeContext);

    // const [array, setArray] = useState([]);

    // useEffect(() => {
    //     var requestOptions = {
    //         method: 'GET',
    //         redirect: 'follow'
    //     };

    //     fetch("https://pokeapi.co/api/v2/pokemon", requestOptions)
    //         .then(response => response.json())
    //         .then(result => setArray(result.results))
    //         .catch(error => console.log('error', error));
    // }, []);
    
    return (
        <div>
            <OrderButton />
            {
                array.show ? 
                    <ul>
                        {
                            array.data.map((item, index) => <li key={index}>{item.name}</li>) 
                        }
                    </ul> :
                    ''
            }     
        </div>
    )
}

export default PokemonList
