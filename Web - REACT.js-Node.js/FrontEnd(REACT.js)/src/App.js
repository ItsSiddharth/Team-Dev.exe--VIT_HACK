import React from 'react';
import logo from './logo.svg';
import './App.css';
import Notifs from './components/Notifs'
import Contact from './components/Contact'
import HospitalTable from './components/HospitalTable';
import MedicalCollege from './components/MedicalCollege'
import Landing from './components/Landing'
import Navgbar from './components/Navgbar'
import Graph from './components/Graph'
import './components/Navgbar.css'
import { Nav,Navbar } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch,withRouter,Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar collapseOnSelect expand="lg" fixed="top"   style={{backgroundColor: "white"}} className="navbarcol shadow-sm  navbar-light"> 
                <Navbar.Brand href="#home" style={{height:"100%",fontFamily:"Courier"}}>
                    Dev.exe
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                <Navbar.Collapse className=" navbar-light" id="responsive-navbar-nav"style={{justifyContent:"center",position:"relative",right:"3%"}}>
                <Nav.Link className="mx-2 text "><Link to="/"  style={{color:"#0a0320",fontSize:"17px"}}> Home</Link></Nav.Link>
                <Nav.Link className="mx-2 text "><Link to="/Hospitals" style={{color:"#0a0320",fontSize:"17px"}}>Hospitals </Link></Nav.Link>
                <Nav.Link className="mx-2 text "><Link to="/MedicalCollege" style={{color:"#0a0320",fontSize:"17px"}}>Medical Colleges</Link></Nav.Link>
                <Nav.Link className="mx-2 text "><Link to="/Notifs" style={{color:"#0a0320",fontSize:"17px"}}>Notifications</Link></Nav.Link>
                <Nav.Link className="mx-2 text "><Link to="/Contact" style={{color:"#0a0320",fontSize:"17px"}}>Contacts</Link></Nav.Link>
                <Nav.Link className="mx-2 text " ><Link to="/Graph" style={{color:"#0a0320",fontSize:"17px"}}>Graph</Link></Nav.Link>

                    </Navbar.Collapse>
                </Navbar><br /><br />
               
      <Switch>
        <div>
                <Route exact path="/Hospitals" component={HospitalTable} />
                <Route  exact path="/MedicalCollege" component={MedicalCollege} />
                <Route  exact path="/Notifs"  component={Notifs} />
                <Route  exact path="/Contact"  component={Contact} />
                <Route exact path="/Graph" component={Graph} />
                <Route  exact path="/" component={Landing}  />

                </div>
            </Switch>
        </Router>
        
    </div>
  );
} 

export default App;
