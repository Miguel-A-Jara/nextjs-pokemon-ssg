import { Grid } from "@nextui-org/react";
import FavoriteCardPokemon from "./FavoriteCardPokemon";

interface IFavoritePokemons {
  favoritePokemons: number[];
}

const FavoritePokemons = ({ favoritePokemons }: IFavoritePokemons) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {
        favoritePokemons.map(id => (
          <FavoriteCardPokemon id={id} key={id} />
        ))
      }
    </Grid.Container>
  )
}

export default FavoritePokemons;