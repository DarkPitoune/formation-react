import './App.css';
import { Counter } from './Counter';

const App = () => {
  return (
    <div>
      <div className="App">
          <div className="titre">
            <h1>Bienvenue sur notre super site !</h1>
          </div>
      </div>
      <Counter title="Un compteur : insane"/>
    </div>
  );
}

export default App;
