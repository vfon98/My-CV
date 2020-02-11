import React from 'react';
import { Card } from 'semantic-ui-react';

function ContentCard() {
  return (
    <Card.Group>
      <Card fluid>
        <Card.Content header='Conten Card' />
        <Card.Content extra>This is Content Card</Card.Content>
      </Card>
    </Card.Group>
  );
}

export default ContentCard;
