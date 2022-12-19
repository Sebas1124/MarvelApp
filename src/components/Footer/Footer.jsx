import { Button, Grid } from "@nextui-org/react"
import { AcmeLogo } from './../../icons';

import instagram from './../../../public/instagram.png'
import facebook from './../../../public/facebook.png'
import discord from './../../../public/discord.png'

export const Footer = () => {


  return (
    <Grid.Container gap={ 2 } css={{ marginTop: 20, border: '1px solid rgba(0,0,0,0.2)', boxShadow:'10px 10px 10px rgba(0,0,0,0.4)' }}>

        <Grid xs={ 3 } direction='column'>
            <AcmeLogo/>
            <h3>Heroes App</h3>
            <p>Lorem ipsum dolor sit amet.</p>
        </Grid>

        <Grid xs={ 3 } direction='column'>
            <h3>Privacidad</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores error veniam laudantium molestiae nihil explicabo aperiam ullam in eveniet voluptatem minima laboriosam, aut iste numquam ipsum laborum ducimus? Laudantium, maxime.</p>
        </Grid>

        <Grid xs={ 3 } direction='column'>
            <h3>Desarrollado</h3>
            <p>&copy; Sebastián Rosero López</p>
            <p><strong>+57 311-5440812</strong></p>
            <h4>Colombia</h4>
        </Grid>

        <Grid xs={ 3 } direction='column'>
            <h3>Contacto</h3>
            <p><strong>Sebas.rosero.lopez@gmail.com</strong></p>
            <p>Globant Colombia</p>
            <br />
            <Button color={ 'error' } size='md'> Contacto</Button>
        </Grid>

        <Grid xs={ 12 } justify='space-around' direction="row">
            <div>
                <p>&copy; CoursesApp Todos los derechos reservados en Colombia</p>
            </div>
            <div>
                <img 
                    width={ 40 }
                    src={ instagram }
                />
                <img 
                    width={ 40 }
                    src={ facebook }
                />
                <img 
                    width={ 40 }
                    src={ discord }
                />
            </div>
        </Grid>

    </Grid.Container>
  )
}
