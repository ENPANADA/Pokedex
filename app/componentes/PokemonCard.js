"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function PokemonCard(props) {
  const [pokemon, setPokemon] = useState([]);
  const [habilidades, setHabilidades] = useState([]);
  const [stats, setStats] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch(props.url)
      .then((data) => data.json())
      .then((data) => {
        //console.log(data);
        setPokemon(data);
        setHabilidades(data.abilities);
        setStats(data.stats);
        setTypes(data.types);
      })
      .catch((err) => console.error(err));
  }, []);

  const Abilities = habilidades.map((habilidad) => (
    <p key={habilidad.ability.name}>{habilidad.ability.name}</p>
  ));

  const Stats = stats.map((stat) => (
    <p key={stat.stat.name}>{stat.stat.name}: <span className="stats">{stat.base_stat}</span></p>
  ));
  const Types = types.map((type) => <p className="etiqueta" key={type.type.name}>{type.type.name}</p>);

  return (
    <section className="extencion">
      {pokemon.length != 0 ? (
        <>
          <div className="card">
            <h2>{pokemon.name}</h2>
              <h3>Abilities</h3>
              {Abilities}
              <h3>Stats</h3>
              {Stats}
              <h3>Types</h3>
              <span className="flex">{Types}</span>
            <Image
              className="portada"
              src={pokemon.sprites.other.dream_world.front_default}
              width={400}
              height={400}
              priority={true}
              alt={pokemon.name + "1"}
            />
          </div>
          <div className="flex">
            <Image
              src={pokemon.sprites.other["official-artwork"].front_default}
              width={100}
              height={100}
              alt={pokemon.name + "2"}
              className="subimg"
            />
            <Image
              src={pokemon.sprites.other["official-artwork"].front_shiny}
              width={100}
              height={100}
              alt={pokemon.name + "3"}
              className="subimg"
            />
            <Image
              src={pokemon.sprites.other.home.front_default}
              width={100}
              height={100}
              alt={pokemon.name + "4"}
              className="subimg"
            />
            <Image
              src={pokemon.sprites.other.home.front_shiny}
              width={100}
              height={100}
              alt={pokemon.name + "5"}
              className="subimg"
            />
          </div>
          <div className="flex">
            <Image
              src={pokemon.sprites.front_default}
              width={100}
              height={100}
              alt={pokemon.name + "6"}
              className="subimg"
            />
            <Image
              src={pokemon.sprites.back_default}
              width={100}
              height={100}
              alt={pokemon.name + "7"}
              className="subimg"
            />
            <Image
              src={pokemon.sprites.front_shiny}
              width={100}
              height={100}
              alt={pokemon.name + "8"}
              className="subimg"
            />
            <Image
              src={pokemon.sprites.back_shiny}
              width={100}
              height={100}
              alt={pokemon.name + "9"}
              className="subimg"
            />
          </div>
        </>
      ) : null}
    </section>
  );
}
