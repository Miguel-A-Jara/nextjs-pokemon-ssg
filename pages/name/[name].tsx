import { FC, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Grid, Card, Button, Container, Image, Text } from "@nextui-org/react";
import confetti from "canvas-confetti";

import { Layout } from "../../components/layouts";
import { IPokemonName, Pokemon } from "../../interfaces";
import { existInFavorite, getPokemonInfo, toggleFavorite } from "../../utils";

interface IPokemonByNamePage {
  pokemon: Pokemon;
}

const PokemonByNamePage: FC<IPokemonByNamePage> = ({ pokemon }) => {

  const [isInFavorites, setIsInFavorites] = useState<boolean>(existInFavorite(pokemon.id));

  const onToggleFavorite = () => {
    toggleFavorite(pokemon.id)
    setIsInFavorites(!isInFavorites);

    if(isInFavorites) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0
      }
    })
  };

  return (
    <Layout title={pokemon.name.toUpperCase()}>
      <Grid.Container css={{ marginTop: '5px'}} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'} 
                alt={pokemon.name}
                width='100%'
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'>{pokemon.name}</Text>
              <Button
                color='gradient'
                ghost={!isInFavorites}
                onClick={onToggleFavorite}
              >
                {isInFavorites ? 'En favoritos' : 'Guardar en favoritos'}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites: </Text>
              <Container direction='row' display='flex' gap={0}>
                <Image 
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image 
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image 
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image 
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />

              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data: IPokemonName = await resp.json();
  const pokeNames = data.results.map(p => {
    return {params: {name: p.name}}
  });

  return {
    paths: pokeNames,
    fallback: false
  }
};

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { name } = ctx.params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo( name )
    }
  }
};

export default PokemonByNamePage;