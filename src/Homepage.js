import React from 'react';
import { Carousel, Card, Row, Col} from 'react-bootstrap'; 
import Image from 'react-bootstrap/Image';
import './App.css';
import HeaderArt from './assets/akissi_1.jpg';
import HeaderArt2 from './assets/Akissi_beukman_3.jpg';
import HeaderArt3 from './assets/Home-Is-Where-The-Art-Is-20.jpg';
import Work1 from './assets/Article image copy.jpg';
import Work2 from './assets/Akissi_beukman_.jpeg';
import Work3 from './assets/Article2.png';
import Bio from './assets/Akissi-Beukman-3.jpg';


export default function Homepage() {
  return (
    <div>
    <header className="App-header">   
              <Carousel slide={true} controls={false} interval={1500} fade={true}>
                <Carousel.Item>
                  <img src={HeaderArt} alt="artist header" className="carousel-image" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={HeaderArt2} alt="artist header" className="carousel-image"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={HeaderArt3} alt="artist header" className="carousel-image"/>
                </Carousel.Item>
              </Carousel>
          
 
      </header>
      <br></br>

      <div className='Heading'>
     <div className='Heading'>
        <h1>"A quote about Akissi <br></br>from biography or<br></br> written articles" </h1>
      </div>
      </div>
   
      <div className='cards-container'>
            <Card style={{width: '26rem',  border: 'none'}} className='Cards'>
              <Card.Img style={{height: '20rem'}} variant="top" src={Work1} />
              <Card.Body>
                <Card.Title className='card-title'  style={{ textAlign: 'center', fontWeight:'600', color:'#575757' }}>Highlight Artwork 1</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>
                  <p>Brief text about artowork 1</p> 
                </Card.Text>
              </Card.Body>
              <Card.Body style={{ textAlign: 'center' }}>
              
                <Card.Link className='card-link' href="#">Explore Project 1 →</Card.Link>
              </Card.Body>
            </Card>
         

          {/* Card for Biography */}
         
            <Card style={{width: '26rem',  border: 'none'}} className='Cards'>
              <Card.Img style={{height: '20rem'}} variant="top" src={Work2} />
              <Card.Body>
                <Card.Title  className='card-title'  style={{ textAlign: 'center', fontWeight:'600', color:'#575757' }}>Highlight Artwork 2</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>
                  <p>Brief text about artowork 2.</p>
                </Card.Text>
              </Card.Body>
              <Card.Body style={{ textAlign: 'center' }}>
                <Card.Link className='card-link' href="#">Explore Project 2 →</Card.Link>
              </Card.Body>
            </Card>
        

          {/* Card for Articles */}
         
            <Card style={{width: '26rem',  border: 'none'}} className='Cards'>
              <Card.Img style={{height: '20rem'}} variant="top" src={Work3} />
              <Card.Body>
                <Card.Title className='card-title'   style={{textAlign: 'center', fontWeight:'600', color:'#575757'}}>Highlight Artwork 3</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>
                  <p>Brief text about artowork1</p>
                </Card.Text>
              </Card.Body>
              <Card.Body style={{ textAlign: 'center' }}>
              <Card.Link className='card-link' href="#">Explore Project 3 →</Card.Link>
              </Card.Body>
            </Card>
         
      </div>

      <div className='Bio-Content' style={{paddingTop:'100px'}}>
  <Row className="justify-content-center" >
    <Col lg={12}  md={6}  sm={4} >
    <div className="bio-container d-flex flex-row flex-wrap align-items-center justify-content-center">
        <Image className='bioImg' src={Bio} rounded />
        <div className="bio-text" style={{maxWidth:'400px', marginLeft: '30px'}}>
          <h2 style={{paddingTop:'20px', color: ' rgba(165, 42, 42, 0.711)', fontWeight:'bold', fontSize:'3rem'}}>Akissi Buekman</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br></br>
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Get in touch <br></br>
            <a style={{color:'rgba(165, 42, 42, 0.711',}} href="mailto:email@address.com">email@address.com</a>
          </p>
      </div>
      </div>
    </Col>
    
  </Row>
</div>
    </div>
  );
}
