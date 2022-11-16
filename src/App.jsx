import axios from "axios";
import { useState, useEffect } from "react";
import './App.css'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

{/**
public key 7a170f8569969353b21d10ed35643777

private key 9bab30015713a97c8662c5ddf47698bd7956ace9
resultado
19bab30015713a97c8662c5ddf47698bd7956ace97a170f8569969353b21d10ed35643777

md5
41512128962b6cf6a1919e1461a5c6d1

url petición
https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=7a170f8569969353b21d10ed35643777&hash=41512128962b6cf6a1919e1461a5c6d1

*/}

function App() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    axios
      .get("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=7a170f8569969353b21d10ed35643777&hash=41512128962b6cf6a1919e1461a5c6d1"
        
      )
      .then((res) => {
        setPersonajes(res.data.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

console.log(personajes);
  return (
      <>
        <div className="App">
      <h1>MARVEL</h1>

      {/* GRID DE IMAGENES */}
      {/* Elemento extraido de bootstrap, doc: https://getbootstrap.com/docs/5.1/components/card/#card-layout */}

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* Recorriendo el arreglo de datos */}
        {personajes.map((p) => (
          <div className="col mt-5" key={p.id}>
            <div
              className="card align-items-center"
              style={{ width: "18rem", height: "18rem" }}
            >
              <img
                src={`${p.thumbnail.path}.${p.thumbnail.extension}`}
                className="card-img-top"
                style={{ width: "80%", height: "80%" }}
              />
              <div className="card-body">
                <h4 className="card-title">{p.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      
      </>
  );
}

export default App
