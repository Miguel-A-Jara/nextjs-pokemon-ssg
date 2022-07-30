import type { NextPage, GetStaticProps } from 'next'

import { Grid } from '@nextui-org/react';

import { pokeApi }      from '../api';
import { Layout }       from '../components/layouts';
import { PokemonCard }  from '../components/pokemon/';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface IHomePage {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<IHomePage> = ({ pokemons }) => {

  return (
    <>
      <Layout title='Listado de Pokémons'>

        <Grid.Container gap={2} justify='flex-start'>
          {
            pokemons.map(p => (
              <PokemonCard pokemon={p} key={p.id} />
            ))
          }
        </Grid.Container>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  const pokemons: SmallPokemon[] = data.results.map((pokemon, idx) => (
    {
      ...pokemon, 
      id: (idx + 1), 
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${(idx + 1)}.svg`
    }
  ))

  return {
    props: {
      pokemons: pokemons
    }
  }
}

export default HomePage
