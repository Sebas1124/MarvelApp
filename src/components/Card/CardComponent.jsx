import React from 'react'
import { Card, Container, Grid, Text } from "@nextui-org/react";

export const CardComponent = () => {
  return (
    <Container css={{ marginTop: 20, display: 'flex', justifyContent: 'center' }}>
        <Card
            isPressable
            isHoverable
            variant="bordered"
            css={{ mw: "800px" }}
            >
            <Card.Body>
                <Grid.Container gap={ 0.7 } direction='row'>
                    <Grid xs={ 3 } css={{ placeContent: 'center' }}>
                        <Text h3>Lorem ipsum dolor sit amet.</Text>
                    </Grid>

                    <Grid xs={ 9 }>
                        <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni officia maiores pariatur facere aliquam consequuntur rem dolores deserunt necessitatibus similique, odit odio delectus velit inventore quam laborum accusamus voluptates dolorem? Consequatur modi voluptatum reiciendis cum inventore tempora assumenda nisi id vero, quaerat voluptas fugit ab est eligendi voluptatem et obcaecati.</Text>
                    </Grid>

                </Grid.Container>
            </Card.Body>
        </Card>
    </Container>
  );
}
  
