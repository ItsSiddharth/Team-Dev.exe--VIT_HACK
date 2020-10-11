import React, { Component } from 'react'
import './Navgbar.css'
import { Nav,Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Link} from 'react-router-dom'


class Navgbar extends Component {
    constructor(props) {
        super(props)
        this.listener = null;
        this.state = {
            navBackground: " "

        }
    }

     
      componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
      }   
    render() {
        return (
            <div style={{fontFamily:"CircularStd#51587B, sans-serif",fontSize:"30px"}}>  
            <Navbar collapseOnSelect expand="lg" fixed="top"   style={{backgroundColor: "white"}} className="navbarcol shadow-sm  navbar-light"> 
                <Navbar.Brand href="#home" style={{height:"100%",fontFamily:"Courier"}}>
                    Dev.exe
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                <Navbar.Collapse className=" navbar-light" id="responsive-navbar-nav"style={{justifyContent:"center",position:"relative",right:"3%"}}>
                <BrowserRouter>
                <Nav.Link className="mx-2 text "  style={{color:"#0a0320",fontSize:"17px"}}><Link to="/"> Home</Link></Nav.Link>
                <Nav.Link className="mx-2 text "  style={{color:"#0a0320",fontSize:"17px"}}><Link to="/Hospitals">Hospitals </Link></Nav.Link>
                <Nav.Link className="mx-2 text "  style={{color:"#0a0320",fontSize:"17px"}}><Link to="/MedicalCollege">Medical Colleges</Link></Nav.Link>
                <Nav.Link className="mx-2 text "  style={{color:"#0a0320",fontSize:"17px"}}><Link to="/Notifs">Notifications</Link></Nav.Link>
                <Nav.Link className="mx-2 text "  style={{color:"#0a0320",fontSize:"17px"}}><Link to="/Contact">Contacts</Link></Nav.Link>
                </BrowserRouter>
                    </Navbar.Collapse>
                </Navbar>
               
                
            </div>
        )
    }
}

export default Navgbar