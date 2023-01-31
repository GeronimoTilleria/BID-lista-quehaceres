
import './App.css';
import PokemonList from './components/PokemonList';
import { PokeProvider } from './context/PokeContext';

function App() {
    return (
        <div className="App">
            <PokeProvider>
                <PokemonList />
            </PokeProvider>
        </div>
    );
}

export default App;
