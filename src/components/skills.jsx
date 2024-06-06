import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import HTML from '../assets/images/html.png';
import JAVASCRIPT from '../assets/images/javascript.png';
import REACT from '../assets/images/react.png';
import NODE from '../assets/images/node.png';
import GIT from '../assets/images/github.png';
import TAILWIND from '../assets/images/tailwind.png';
import MONGO from '../assets/images/mongo.png';
import EXPRESS from '../assets/images/express-js.png';

const Skills = () => {
  return (
    <div name='skills' className='w-[98%] flex items-center justify-center'>
      <Container className='max-w-screen-xl mx-auto p-4'>
        <Row className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
          <Col className='shadow-md hover:scale-110 duration-500 p-2'>
            <Image className='w-16 sm:w-20 mx-auto' src={MONGO} alt="HTML icon" />
          </Col>
          <Col className='shadow-md hover:scale-110 duration-500 p-2'>
            <Image className='w-16 sm:w-20 mx-auto' src={EXPRESS} alt="CSS icon" />
          </Col>
          <Col className='shadow-md hover:scale-110 duration-500 p-2'>
            <Image className='w-16 sm:w-20 mx-auto' src={REACT} alt="JavaScript icon" />
          </Col>
          <Col className='shadow-md hover:scale-110 duration-500 p-2'>
            <Image className='w-16 sm:w-20 mx-auto' src={NODE} alt="React icon" />
          </Col>
          <Col className='shadow-md hover:scale-110 duration-500 p-2'>
            <Image className='w-16 sm:w-20 mx-auto' src={TAILWIND} alt="GitHub icon" />
          </Col>
          <Col className='shadow-md hover:scale-110 duration-500 p-2'>
            <Image className='w-16 sm:w-20 mx-auto' src={JAVASCRIPT} alt="Node.js icon" />
          </Col>
          <Col className='shadow-md hover:scale-110 duration-500 p-2'>
            <Image className='w-16 sm:w-20 mx-auto' src={HTML} alt="Tailwind icon" />
          </Col>
          <Col className='shadow-md hover:scale-110 duration-500 p-2'>
            <Image className='w-16 sm:w-20 mx-auto' src={GIT} alt="AWS icon" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
