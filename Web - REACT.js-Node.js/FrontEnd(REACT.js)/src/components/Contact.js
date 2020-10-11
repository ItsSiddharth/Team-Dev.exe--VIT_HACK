import React, { Component } from 'react'
import axios from 'axios'
import './Contact.css'
import { Table } from 'react-bootstrap';

class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             errorMsg:''
        }
    }
    componentDidMount(){
        axios.get('https://api.rootnet.in/covid19-in/contacts')
        .then(response =>{
            console.log(response.data.data);
            this.setState({posts:response.data})
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
                <p style={{color:"white"}}>Contact & Helpline Information</p>
                <table style={{width:"50%",margin:"auto",color:"#e8505b",backgroundColor:"white"}} >
                    <tr>
                        <th>Location</th>
                        <th>Number</th>
                    </tr>
                </table>
                <div style={{overflowX:"scroll"}}>
                <table style={{borderTop:"none",width:"50%",margin:"auto",color:"black",backgroundColor:"white",height:"90vh",overflow:"hidden",position:"relative"}} >

                {
                    posts?.data?.contacts?.regional.length?
                    posts.data.contacts.regional.map(post=>
                        <div>   
                                <tr style={{borderBottom:"1px solid black"}}>
                                    <td>{post.loc}</td>
                                    <td>{post.number}</td>
                                </tr>
                        </div>    ):null
                }
                </table>
                </div>
                {
                    errorMsg?<div>{errorMsg}</div>:null
                }
            </div>
        )
    }
}

export default Contact
