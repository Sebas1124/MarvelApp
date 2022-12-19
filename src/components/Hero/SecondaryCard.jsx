import { useState } from 'react';
import { Button, Card, Grid, Link, Text, Tooltip } from '@nextui-org/react';

import Logo from './../../assets/LogoIronMan.png';
import Like from './../../assets/Like.png';
import Dlike from './../../assets/DLike.png';


import './Hero.css'

export const SecondaryCard = ({ vote, deleteVote, name }) => {

  return (
    <Card className='Card' css={{ p: "$6", mw: "400px", }}>
      <Card.Header>
        <img
          alt="Logo"
          src={ Logo }
          width="34px"
          height="34px"
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              Danos tu opinion sobre
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text h2 css={{ color: "black" }}>{ name }</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>

      <Card.Body css={{ py: "$2" }}>

        <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, quos fugiat laboriosam itaque officia iste dicta in, aliquid, placeat eum minima sunt? Aliquid numquam fuga dolores, rerum quo exercitationem asperiores!
        </Text>

        <Link
          color="primary"
          target="_blank"
          href="http://sebasportafolio.com"
        >
          Leer más
        </Link>

      </Card.Body>

      <Card.Footer >
        
        <Grid.Container direction='column'>
            <Text h5>
                ¿Cual es tu voto?
            </Text>

            <Grid xs={12} >

                <Tooltip content='Me gusta la pelicula' color='success'>
                    <Button onPress={ vote } size='sm' color='success' css={{ marginRight: 10, h: 'max-content' }}>
                        <img src={ Like } width='50' alt="Like" />
                    </Button>
                </Tooltip>

                <Tooltip content='No me gustó' color='error'>
                    <Button onPress={ deleteVote } size='sm' color='error' css={{ h: 'max-content' }}>
                        <img src={ Dlike } width='50' alt="Dlike" />
                    </Button>
                </Tooltip>

            </Grid>
        </Grid.Container>

      </Card.Footer>

    </Card>
  )
}
