import { useEffect, useState } from "react";

import { pokemons }         from "../../utils";
import { NoFavorites }      from "../../components/ui";
import { Layout }           from "../../components/layouts";
import { FavoritePokemons } from "../../components/pokemon";


const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(pokemons());
  }, []);

  return (
    <Layout>
      {
        favoritePokemons.length === 0
          ? (<NoFavorites />)
          : (<FavoritePokemons favoritePokemons={favoritePokemons}/>)
      }      
    </Layout>
  )
}

export default FavoritesPage;