import './App.css';
import {Card, Carousel, Button} from 'antd';
import 'antd/dist/antd.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar />
        <div className="App" style={{display:'flex', justifyContent:'center'}}>
      <div style={{width:1000}}>
        <Carousel autoplay>
          <img src={require("./img1.jpg")} alt="image here"/>
          <img src={require("./img2.jpg")} alt="image here"/>
          <img src={require("./img4.jpeg")} alt="image here"/>
          <img src={require("./img6.jpeg")} alt="image here"/>
        </Carousel>
        <Button style={{
          position: 'relative',
          top: -600,
          backgroundColor: 'rgb(0, 0, 0, 0.5)',
          color: '#fff'
        }}>SIGN UP</Button>
        </div>
    </div>
    </>    

  );
}

export default App;