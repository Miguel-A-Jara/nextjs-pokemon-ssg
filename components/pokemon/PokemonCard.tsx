import { FC } from "react";
import { useRouter } from "next/router";

import { Card, Grid, Row, Text } from '@nextui-org/react';

import { SmallPokemon } from "../../interfaces";

interface IPokemonCard {
  pokemon: SmallPokemon
}

const PokemonCard: FC<IPokemonCard> = ({ pokemon }) => {

  const router = useRouter();

  const onPokemonClick = () => {
    router.push(`/name/${pokemon.name}`);
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
      <Card 
        hoverable 
        clickable 
        onClick={onPokemonClick}
      >
        <Card.Body css={{p: 1}}>
          <Card.Image 
            src={pokemon.img} width="100%" height={140}
          />
          <Card.Footer>
            <Row justify='space-between'>
              <Text transform='capitalize'>{pokemon.name}</Text>
              <Text>#{pokemon.id}</Text>
            </Row>
          </Card.Footer>
        </Card.Body>
      </Card>                
    </Grid>
  )
}

export default PokemonCard;