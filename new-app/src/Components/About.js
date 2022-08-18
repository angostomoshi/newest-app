import {Card, Carousel, Button, Row, Col} from 'antd';
import Navbar from './Navbar'; 
const About  = () => {
    
    return (

        <div>
        <Navbar />
        <Row gutter={4}>
        <Col span={10}>
        <div style={{
            width: 10000
        }}>
         <Carousel autoplay>  
      <div> <img src={require("../img7.jpeg")} alt="image here"/> </div>
      <div><img src={require("../img8.jpeg")} alt="image here"/></div>
      <div><img src={require("../img11.jpg")} alt="image here"/></div>
      <div><img src={require("../img9.jpg")} alt="image here"/></div>
      <div><img src={require("../img13.jpg")} alt="image here"/></div>
      </Carousel>
        </div>
        </Col>

        <br/>

        <Col span={14}>

        <p style={{
            fontSize: 30,
            fontFamily: 'Helvetica'
        }}><strong>OUR STORY</strong><br></br>
        <br></br>
            This is a young team comprised of young ambitious players mostly from buruburu and its environs.
        This time comprise of 31 players and officials.
        We play in the SIEL legue and hope in the future to join the premier legue and perfom well.
        We officially started to participate in tornaments and legue early 2021.
        </p> 
        
        </Col>
    
</Row>
        </div>
    )
}

export default About;