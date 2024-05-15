import React from 'react';
import { Row, Col} from 'react-bootstrap';
import Artworks from './assets/grad pic 1.webp';
import Image from 'react-bootstrap/Image';
import './App.css';


export default function Work() {
    return (
<div>
        <div className='Titles'>
        <h1>Artworks</h1>
      </div>
      <div className='Bio-Content' style={{paddingTop:'100px' }}>
  <Row className="justify-content-center" >
    <Col lg={12}  md={6}  sm={4} >
    <div className="bio-container">
        <Image className='ArtworkImg' src={Artworks} rounded style={{width:'500px', height:'auto'}} />
        <div className="bio-text" style={{maxWidth:'400px', marginLeft: '30px'}}>
          <h2 style={{paddingTop:'20px', color: ' rgba(165, 42, 42, 0.711)', fontWeight:'bold', fontSize:'3rem'}}>Artwork Name</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      </div>
    </Col> 
  </Row>
</div>

<div className='Bio-Content' style={{paddingTop:'100px' }}>
  <Row className="justify-content-center" >
    <Col lg={12}  md={6}  sm={4} >
    <div className="bio-container">
        <div className="bio-text" style={{maxWidth:'400px', marginLeft: '30px'}}>
          <h2 style={{paddingTop:'20px', color: ' rgba(165, 42, 42, 0.711)', fontWeight:'bold', fontSize:'3rem'}}>Artwork Name</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
      </div>
      <Image className='ArtworkImg' src={Artworks} rounded style={{width:'500px', height:'auto'}} />
      </div>
    </Col> 
  </Row>
</div>

<div className='Bio-Content' style={{paddingTop:'100px' }}>
  <Row className="justify-content-center" >
    <Col lg={12}  md={6}  sm={4} >
    <div className="bio-container">
        <Image className='ArtworkImg' src={Artworks} rounded style={{width:'500px', height:'auto'}} />
        <div className="bio-text" style={{maxWidth:'400px', marginLeft: '30px'}}>
          <h2 style={{paddingTop:'20px', color: ' rgba(165, 42, 42, 0.711)', fontWeight:'bold', fontSize:'3rem'}}>Artwork Name</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      </div>
    </Col> 
  </Row>
</div>


</div>
    );   
}