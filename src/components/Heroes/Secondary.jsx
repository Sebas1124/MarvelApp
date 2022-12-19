import { Button, Card, Grid, Link, Text, Tooltip } from '@nextui-org/react';

import Logo from './../../assets/LogoIronMan.png';
import Like from './../../assets/Like.png';
import Dlike from './../../assets/DLike.png';


import './Hero.css'

export const Secondary = ({ vote, deleteVote, name, description }) => {

  return (
    <Card className='Card' css={{ p: "$6", mw: "400px", width: '280px', height: 290 }}>
      <Card.Header>
        <img
          alt="Logo"
          src={ Logo }
          width="34px"
          height="34px"
        />
        <Grid.Container css={{ pl: "$1" }}>
          <Grid xs={ 12 }>
            <Text h4 css={{ lineHeight: "$xs" }}>
              Danos tu opinion sobre
            </Text>
          </Grid>
          <Grid xs={ 12 }>
            <Text h4 css={{ color: "black" }}>{ name }</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>

      <Card.Body css={{ py: "$2" }}>

        <Text>
            { description }
        </Text>

        <Button size='sm' css={{ h: 'max-content', width: 10 }} color='gradient'>
            Ver más
        </Button>

      </Card.Body>

      <Card.Footer >
        
        <Grid.Container direction='column'>
            <Text h5>
                ¿Cual es tu voto?
            </Text>

            <Grid xs={12} >

                <Tooltip content='Me gusta la pelicula' color='success'>
                    <Button onPress={ vote } size='xs' color='success' css={{ marginRight: 10, h: 'max-content' }}>
                        <img src={ Like } width='50' alt="Like" />
                    </Button>
                </Tooltip>

                <Tooltip content='No me gustó' color='error'>
                    <Button onPress={ deleteVote } size='xs' color='error' css={{ h: 'max-content' }}>
                        <img src={ Dlike } width='50' alt="Dlike" />
                    </Button>
                </Tooltip>

            </Grid>
        </Grid.Container>

      </Card.Footer>

    </Card>
  )
}
