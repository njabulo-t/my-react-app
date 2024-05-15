import React from 'react';
import { Card} from 'react-bootstrap'; 
import Work3 from './assets/Article2.png';
import './App.css';

export default function Articles() {
    return (
<div>
<div className='Titles'>
        <h1>Articles</h1>
      </div>
      <div className='Articles-container'>

      <Card style={{width: '26rem',  border: 'none'}} className='Cards'>
        <Card.Img style={{height: '20rem'}} variant="top" src={Work3} />
        <Card.Body className='Card-body'>
          <Card.Title className='card-title'  style={{ textAlign: 'center', fontWeight:'600', color:'#575757' }}>Article Title</Card.Title>
          <Card.Link className='card-link' href="#">Go To Article →</Card.Link>
        </Card.Body>
      </Card>
   

    {/* Article 2 */}
   
    <Card style={{width: '26rem',  border: 'none'}} className='Cards'>
        <Card.Img style={{height: '20rem'}} variant="top" src={Work3} />
        <Card.Body className='Card-body'>
          <Card.Title className='card-title'  style={{ textAlign: 'center', fontWeight:'600', color:'#575757' }}>Article Title</Card.Title>
          <Card.Link className='card-link' href="#">Go To Article →</Card.Link>
        </Card.Body>
      </Card>
   

    {/* Article 3 */}
   
    <Card style={{width: '26rem',  border: 'none'}} className='Cards'>
        <Card.Img style={{height: '20rem'}} variant="top" src={Work3} />
        <Card.Body className='Card-body'>
          <Card.Title className='card-title'  style={{ textAlign: 'center', fontWeight:'600', color:'#575757' }}>Article Title</Card.Title>
          <Card.Link className='card-link' href="#">Go To Article →</Card.Link>
        </Card.Body>
      </Card>
   
</div>
</div>
    );   
}