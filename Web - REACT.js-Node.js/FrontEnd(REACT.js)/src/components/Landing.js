import React, { Component } from 'react'
import covid from '../img/covid.jpg'
import person from '../img/person.png'
import virus from '../img/virus.png'
import home from '../img/home.png'
import {Button} from 'react-bootstrap'
import './Landing.css'
import mask from '../img/mask.gif'
class Landing extends Component {
    render() {
        return (
            <div class="land"style={{marginTop:"63px",height:"91vh",color:"white",backgroundColor:"white",position:"fixed"}}>
                <div>
                    <img src={home} alt="home" style={{position:"fixed",right:"100px",pointerEvents:"none",top:"175px"}}/>
                    <img src={person} alt="person" class="person" style={{width:"500px",position:"fixed",right:"90px",pointerEvents:"none",top:"150px"}}/>
                    <img src={virus} alt="virus" style={{position:"fixed",right:"520px",pointerEvents:"none",top:"350px"}}/>
                    <img src={virus} alt="virus" style={{width:"30px",position:"fixed",right:"420px",pointerEvents:"none",top:"200px"}}/>
                </div>
            <div style={{fontFamily:"Verdana",fontSize:"5em",zIndex:"1",left:"120px",top:"230px",color:"#fff",position:"fixed"}}>
              <p style={{color:"#e8505b",float:"top"}}>Stay <span style={{color:"#0a0320"}}>Home</span></p>
              <p style={{color:"#0a0320",float:"top"}}>Stay <span style={{color:"#e8505b"}}>Safe</span></p>
              <p style={{fontSize:"15px",color:"black",marginBottom:"0px"}}>Coronavirus disease (COVID-19) is a diseases caused by <br /> the newly discovered corona virus.</p>
              <Button variant="outline-danger" class="button"style={{borderRadius:'35px',border:"3px solid #e8505b",boxShadow:"1px 2px #e8505b ",pointerEvents:"cursor"}}>Check if you're safe</Button>

        </div>

            </div>
        )
    }
}

export default Landing
