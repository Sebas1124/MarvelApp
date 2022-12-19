import { useEffect, useState } from 'react'
import { Card, Col, Row, Progress, Text } from '@nextui-org/react';
import { Secondary } from './Secondary';

export const IndividualComponent = ({ hero }) => {

    const { id, name, description, dates, votes:vote, image } = hero;

    const [ votes, setVotes ] = useState( localStorage.getItem(name) || vote );
    const [ negativeVotes, setNegativeVotes ] = useState( votes - 100 );

    useEffect(() => {

      const chargeVotes = localStorage.getItem(`${name}`);

      setVotes( Number(chargeVotes) );
      setNegativeVotes( vote - 100 );

      if ( chargeVotes === null ) {
            setVotes( vote );
            return;
        }
        
    }, [])
    
    const onVote = () => {

        const totalVotes = votes + 1;

        if ( totalVotes > 100 ) return;

        localStorage.setItem(name, totalVotes);

        setVotes( totalVotes );
        setNegativeVotes( totalVotes - 100 ) 
    }

    const onDeleteVote = () => {

        const totalVotes = votes - 1;
        localStorage.setItem(name, totalVotes);

        setVotes( totalVotes );
        setNegativeVotes( totalVotes - 100 )        
    }

  return (
    <Card css={{ w: "400px", h: "500px", marginRight: 12 }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col css={{ marginTop: '-3rem', marginLeft: '-3rem' }}>
            <Secondary name={ name } description={ description } vote={ onVote } deleteVote={ onDeleteVote } />
        </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
        <Card.Image
            src={ image }
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
            <Text h4 css={{ color: 'WhiteSmoke', marginRight: 10 }}>{ votes }% </Text>
            <Progress max='100' value={ votes } size='lg' shadow color="success" status="primary" />
            <Text h4 css={{ color: 'WhiteSmoke', marginLeft: 10 }}>{ String( negativeVotes ).slice(1) }% </Text>
        </Row>
            <Text h3 css={{ color: 'WhiteSmoke' }}>{ dates }</Text>
        </Card.Footer>
    </Card>
  )
}
