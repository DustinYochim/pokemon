import {Pokemon} from "./PokemonType";

interface PokemonViewProps extends Pokemon {

}
export const PokemonView = ({
                                name,
                                height,
                                weight,
                                moves,
                                types,
                                imgURL
}:PokemonViewProps) => {
    return (
        <>
            <div className={'pokemonCard'}>
                <h3 className={'pokemonName'}>{name}</h3>
                <img className={'pokemonImg'} src={imgURL} alt={name}/>
                <div className={'pokemonTypes'}> <span>{types.join(", ")}</span></div>
                <div className={'pokemonMoves'}>Moves: {moves.slice(0, 3).join(", ")}</div>
                <div className={'pokemonHeight'}>
                    <span>Height: {height}</span>
                    <span>Weight: {weight}</span>
                </div>
            </div>
        </>
    )
}