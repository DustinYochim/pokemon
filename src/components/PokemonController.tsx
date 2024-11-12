import axios from "axios";
import {PokemonView} from "./PokemonView";
import {useCallback, useEffect, useState} from "react";
import {Pokemon} from "./PokemonType";
import {Button, TextField, Typography} from "@mui/material";

interface PokemonFromAPI {
    name: string
    height: number
    weight: number
    moves: {
        move: {
            name: "string",
        }
    }[]
    types: {
        type: {
            name: string,
        }
    }[];
    sprites: {
        front_default: string;
    }
}

export const PokemonController = () => {

    const [pokemon, setPokemon] = useState<Pokemon>();
    const [searchText, setSearchText] = useState<string>("1");

    const fetchPokemon = async (pokemonID: string) => {
        try {
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
            const pokemonFromAPI: PokemonFromAPI = data;

            // console.log(pokemonFromAPI);

            const currentPokemon: Pokemon = {
                name: pokemonFromAPI.name,
                height: pokemonFromAPI.height,
                weight: pokemonFromAPI.weight,
                moves:  pokemonFromAPI.moves.map(move => move.move.name),
                types: pokemonFromAPI.types.map(type => type.type.name),
                imgURL:  pokemonFromAPI.sprites.front_default,
            }

            // console.log(currentPokemon)

            setPokemon(currentPokemon);
        } catch {
            setPokemon(undefined);
        }

    }

    const handleClick = () => {
        fetchPokemon(searchText);
    }

    useEffect(() => {
        fetchPokemon('1');
    }, [])

    return (
        <>
            <div className={'buttonContainer'}>
                <TextField id="outlined-basic"
                           label="Enter a Pokemon ID"
                           variant="outlined"
                           type={'number'}
                           value={searchText}
                           onChange={(e) => setSearchText(e.target.value)}
                />
                <Button variant="outlined"
                        onClick={handleClick}
                >Search</Button>
            </div>
            {pokemon ? <PokemonView {...pokemon} /> : 'Not found'}
        </>
    )
}