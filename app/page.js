"use client";
import PokemonCard from "./componentes/PokemonCard";
import { useState, useEffect } from "react";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [next, setNext] = useState([]);
  const [previous, setPrevious] = useState([]);
  const API_PATH = "https://pokeapi.co/api/v2/pokemon?limit=10";

  useEffect(() => {
    fetch(API_PATH)
      .then((data) => data.json())
      .then((data) => {
        //console.log(data);
        setPokemons(data.results);
        setNext(data.next);
        setPrevious(data.previous);
      })
      .catch((err) => console.error(err));
  }, []);

  function cargarPokemons(API_PATH) {
    if (API_PATH != null) {
      fetch(API_PATH)
        .then((data) => data.json())
        .then((data) => {
          //console.log(data);
          setPokemons(data.results);
          setNext(data.next);
          setPrevious(data.previous);
        })
        .catch((err) => console.error(err));
    }
  }

  const pokeinfo = pokemons.map((pokemon) => <div key={pokemon.name}><PokemonCard url={pokemon.url}/></div>);

  return (
    <main>
      <h1>PokeInfo</h1>
      <article className="flex contenedor">{pokeinfo}</article>
      <div className="flex contenedor">
      <button type="button" className="boton" onClick={() => cargarPokemons(previous)}>
        ← Previous
      </button>
      <button type="button" className="boton" onClick={() => cargarPokemons(next)}>
        Next →
      </button>
      </div>
    </main>
  );
}
