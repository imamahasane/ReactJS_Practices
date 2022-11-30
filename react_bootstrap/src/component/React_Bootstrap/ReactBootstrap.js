import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ReactBootstrap = () => {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title>FIFA World Cup - 2022 Qatar</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Imam Ahasan</Card.Subtitle>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nam!
          Nihil, dolorum.
        </Card.Text>
        <Card.Link href="https://www.imamahasan.xyz/">Show More</Card.Link>
        <Button>Learn More</Button>
      </Card.Body>
    </Card>
  );
};

export default ReactBootstrap;
