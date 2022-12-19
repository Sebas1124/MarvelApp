import React from 'react'
import { Container, Grid } from '@nextui-org/react';
import { Text } from '@nextui-org/react';
import { IndividualComponent } from './IndividualComponent';

import { SuperHeroes } from './../../data/Heroes';


export const HeroesComponents = () => {
  return (
    <Container fluid css={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        <Text h2>Super Heroes Anteriores</Text>
        <Grid.Container gap={ 2 } justify='center'>
            {
                SuperHeroes.map( (hero) => (
                    <Grid key={ hero.id } xs={ 12 } md={ 6 } sm={ 4 } xl={ 3 } css={{ placeContent: 'center' }}>
                        <IndividualComponent hero={ hero }/>
                    </Grid>
                ))
            }
        </Grid.Container>
    </Container>
  )
}
