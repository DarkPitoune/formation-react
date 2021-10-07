import './App.css';
import { Counter } from './Counter.js';

const App = () => {
  return (
    <div className="App">
        <div style={{background:'lightblue', borderRadius:'1em', padding: "2em", margin: "1em"}}>
          <h1>Bienvenue dans notre super site !</h1>
        </div>
        <Counter/>
    </div>
  );
}

export default App;
