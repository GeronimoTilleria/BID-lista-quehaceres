import { useState } from 'react';

import { NameContext } from './context/NameContext';

import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';
import './App.css';



function App() {

  const [name, setName] = useState('');

  return (
    <div className="App">
      <NameContext.Provider value={{ name, setName }}>
        <Wrapper>
          <Navbar />
          <FormWrapper />
        </Wrapper>
      </NameContext.Provider>
    </div>
  );
}

export default App;
