import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
//import './Button.css';
import Header from "./Header";
import KegControl from "./KegControl";

import { Container, Row, Col, Jumbotron } from 'react-bootstrap';




function App(){
  return ( 
   
    
    <React.Fragment>
      <Container>
        <Jumbotron>
    
    
      <Header />
      <KegControl />
      
      </Jumbotron>
      </Container>
    
     
    
    </React.Fragment>
  );
}

export default App;
