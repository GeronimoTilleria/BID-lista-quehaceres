import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const PokeContext = createContext();



export const PokeProvider = ({ children }) => {

    const [array, setArray] = useState({
        data: [],
        show: false
    });

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://pokeapi.co/api/v2/pokemon", requestOptions)
            .then(response => response.json())
            .then(result => setArray({
                ...array,
                data: result.results
            }))
            .catch(error => console.log('error', error));
    }, []);

    

    return (
        <PokeContext.Provider value={{
            array,
            setArray
        }}>
            {children}
        </PokeContext.Provider>
    );
}