import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Progress, Grid, Text } from '@nextui-org/react';

import IronMan from './../../assets/IronMan.jpg';

import { SecondaryCard } from './';

export const HeroComponent = () => {

    const [ votes, setVotes ] = useState( localStorage.getItem('IronManVotes') || 56 );
    const [ negativeVotes, setNegativeVotes ] = useState( votes - 100 );

    useEffect(() => {

      const chargeVotes = localStorage.getItem('IronManVotes');

      setVotes( Number(chargeVotes) );
      setNegativeVotes( chargeVotes - 100 );

      if ( chargeVotes === null ) { 
            setVotes( votes );
            return;
        }
        
    }, [])
    
    const onVote = () => {

        const totalVotes = votes + 1;

        if ( totalVotes > 100 ) return;

        localStorage.setItem('IronManVotes', totalVotes);

        setVotes( totalVotes );
        setNegativeVotes( totalVotes - 100 ) 
    }

    const onDeleteVote = () => {

        const totalVotes = votes - 1;
        localStorage.setItem('IronManVotes', totalVotes);

        setVotes( totalVotes );
        setNegativeVotes( totalVotes - 100 )        
    }

 

  return (
    <Container display='flex' justify='center' responsive>
        <Card css={{ w: "80%", h: "700px" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <SecondaryCard name='Iron Man' vote={ onVote } deleteVote={ onDeleteVote } />
            </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
            <Card.Image
                src={ IronMan }
                objectFit="cover"
                width="100%"
                height="100%"
                alt="Super Hero"
            />
            </Card.Body>
            <Card.Footer
            isBlurred
            css={{
                position: "absolute",
                bgBlur: "#0f111466",
                borderTop: "$borderWeights$light solid $gray800",
                bottom: 0,
                zIndex: 1,
            }}
            >
            <Row gap={ 2 } >
                <Text h4 css={{ color: 'WhiteSmoke' }}> Total de votos positivos { votes }% </Text>
                <Progress max='100' value={ votes } size='lg' shadow color="success" status="primary" />
                <Text h4 css={{ color: 'WhiteSmoke', marginLeft: 10 }}> Total de votos Negativos { String( negativeVotes ).slice(1) }% </Text>
            </Row>
            </Card.Footer>
        </Card>
    </Container>
  )
}
