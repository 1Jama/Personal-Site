import React from 'react';
import './ProjectCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsGithub } from 'react-icons/bs';

const ProjectCard = (props) => {
  return (
    <div id='wholeCard'>
      <Card className='customCard'>
        <Card.Img className='projectImg' variant='top' src={props.imgSrc} />
        <Card.Body className='cardBody'>
          <Card.Title className='cardTitle'>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
        <Card.Body>{props.technology}</Card.Body>
        <Card.Body>
          <Card.Link href='#'>
            <Button variant='primary'>
              <BsGithub />
            </Button>
          </Card.Link>
          <Card.Link href='#'>
            <Button variant='primary'>Demo</Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectCard;
