import React from 'react';
import {PokemonController} from "./components/PokemonController";
import "./styles.css"

function App() {
  return (
    <div className="App">
        <header><h1 className={'title'}>Pokemon Viewer</h1></header>
        <main>
            <PokemonController/>
        </main>
        {/*<footer>Created by Dustin Yochim</footer>*/}
    </div>
  );
}

export default App;
