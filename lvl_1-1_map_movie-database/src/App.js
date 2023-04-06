
import './App.css';
import Database from './components/Database';
import movies from './data/movies';

console.log(movies)


function App() {
  return (
    <div className="App">
      <section>
        {movies.map((elt) =>
          <Database
            title={elt.title}
            year={elt.year}
            director={elt.director}
            duration={elt.duration}
            rate={elt.rate}
            genre={elt.genre.join(" ")}
          />
        )}
      </section>
    </div>
  );
}

export default App;
