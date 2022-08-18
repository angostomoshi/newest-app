import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from 'antd';

const Navbar = () => {
    const[button,setButton]=useState(true)
    const[click,setclick]=useState(false);

    const handleClick=()=>setclick(!click)
const closeMobileMenu=()=>setclick(false)

const showButton=()=>{
    if(window.innerWidth<= 960) {
        setButton(false)

        const showButton=()=>{
            if(window.innerWidth<=960){
                setButton(false)
            }else{
                setButton(true)
            }
        }
    }
}

window.addEventListener('resize',showButton);
    return (
        <div style={{width: "100%", backgroundColor: "black"}}>
            <ul style={{
                height: 35,
                alignItems: 'center',
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'row',
                color: 'white',
                justifyContent: 'center'
            }}>
                <Link to='/ '><p style={{margin:10}}> Home</p></Link>
                <Link to='/About '><p style={{margin:10}}> About us</p></Link>
                <Link to='/Contact'><p style={{margin:10}}> Contact us</p></Link>
            </ul>
            
        </div>)
}


export default Navbar;