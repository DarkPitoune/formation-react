import './App.css';
import { Counter } from './Counter';
import Grid from './Grid.js';

const App = () => {
  const compteurs = []
  for (let pas = 0; pas < 5; pas++) {
    compteurs.push(<Counter title={"Le compteur n° "+String(pas)}/>)
  }
  return (
    <div>
      <div className="App">
          <div className="titre">
            <h1>Bienvenue sur notre super site !</h1>
          </div>
      </div>
      <Grid>
        {compteurs}
      </Grid>
    </div>
  );
}

export default App;
