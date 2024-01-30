import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row } from 'react-bootstrap';

const Tables = ({tables}) => {

  
  console.log(tables);

  if (!Array.isArray(tables)) {
    return <div>No tables available</div>; 
  }

  

  return (

    <div>
      <h2>All tables</h2>
  
      <Row xs={1} md={2} lg={3} className="g-6">
        {tables.map(table => (
          <Card key={table.id} className="my-2">
            <Card.Body>
              <Card.Title>{table.name}</Card.Title>
             
              <Card.Text><b>Status: </b>{table.status}</Card.Text>
              <Link to={`/table/${table.id}`}>
                <Button variant="primary">Read more</Button>
              </Link>
            </Card.Body>
          </Card>

        ))}
      </Row >

    </div>
  );
};

export default Tables;