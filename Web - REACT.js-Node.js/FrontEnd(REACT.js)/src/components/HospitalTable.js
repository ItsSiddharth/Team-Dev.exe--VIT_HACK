import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap';
import './HospitalTable.css'
class HospitalTable extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             errorMsg:''
        }
    }
    componentDidMount(){
        axios.get('https://api.rootnet.in/covid19-in/hospitals/beds')
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
            <div style={{height:"94vh"}}>
                <p style={{color:"white"}}>Hospitals & Beds</p>
                
                <table style={{width:"50%",margin:"auto",color:"#e8505b",backgroundColor:"white"}} >
                    <tr>
                        <th>State</th>
                        <th>Rural Hospitals</th>
                        <th>Rural Beds</th>
                        <th>Urban Hospitals</th>
                        <th>Urban Beds</th>
                        <th>Total Hospitals</th>
                        <th>Total Beds</th>
                    </tr>
                </table>
                <div style={{overflowX:"scroll"}}>
                <table style={{borderTop:"none",width:"50%",margin:"auto",color:"black",backgroundColor:"white",height:"90vh",overflow:"hidden",position:"relative"}} >

                {
                    posts?.data?.regional?.length?
                    posts.data.regional.map(post=>
                        <div>
                                <tr style={{borderBottom:"1px solid black"}}>
                                    <td >{post.state}</td>
                                    <td>{post.ruralHospitals}</td>
                                    <td>{post.ruralBeds}</td>
                                    <td>{post.urbanHospitals}</td>
                                    <td>{post.urbanBeds}</td>
                                    <td>{post.totalHospitals}</td>
                                    <td>{post.totalBeds}</td>

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

export default HospitalTable
