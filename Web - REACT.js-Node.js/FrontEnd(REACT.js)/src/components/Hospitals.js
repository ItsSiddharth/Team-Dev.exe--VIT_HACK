import React, { Component } from 'react'
import axios from 'axios'
import './Contact.css'
import { Table } from 'react-bootstrap';
import india from '../img/india.png'
import ImageMapper from 'react-image-mapper';
var data =require('./Mapdata.json');
class Hospitals extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             errorMsg:''
        }
    }
    componentDidMount(){
        fetch('./Mapdata.json')
        .then(response =>{
            console.log(response);
            this.setState({posts:response})
        })
        .catch(error =>{
            console.log(error);
            this.setState({errorMsg:"Error retreiving data"})
        })
    }
    render() {
        const {posts, errorMsg}=this.state;
        return (
            <div>
                hiii there
                <p style={{color:"white"}}>Hospitals & Beds</p>
                {
                    posts?.MAP?.areas?.length?
                    posts.MAP.areas.map(post =>
                        <ImageMapper  src={post.URL} map={post.MAP} width={500}/>):
                    null
                }
                  
                {
                    errorMsg?<div>{errorMsg}</div>:null
                }
                    

            </div>
        )
    }
}

export default Hospitals
