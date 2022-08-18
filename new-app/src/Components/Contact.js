import {Card, Carousel, Button, Row, Col} from 'antd';
import Navbar from './Navbar';
const Contact = () => {
    return (

        
        <div>
         <Navbar />
         
         <Row gutter={1}> 
         <Col span={14}>
         <img src={require("../img6.jpeg")} alt="image here"/>
         </Col>
         <Col span={10}>
          
        <p style={{
            fontSize: 30,
            fontFamily: 'helvetica'
        }}><strong>SEND US A MASSAGE</strong>
          <br></br>  <img src={require("../img17.png")} alt="image here"/>;0758533049
          <br></br>
          <br></br>  <img src={require("../img16.jpg")} alt="image here"/> ;buruburu_crusaders
        </p> 

        </Col>
    
        </Row>

        </div>
    )
}

export default Contact;