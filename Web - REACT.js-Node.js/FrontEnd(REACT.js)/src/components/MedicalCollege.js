import React, { Component } from 'react'
import axios from 'axios'
import './Contact.css'
import { Card ,Button} from 'react-bootstrap';
import './HospitalTable.css'
class MedicalCollege extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             errorMsg:'',
             state:'Allstates',
             type:'Alltypes',
             filter:'off'
        }
    }
    componentDidMount(){
        axios.get('https://api.rootnet.in/covid19-in/hospitals/medical-colleges')
        .then(response =>{
            console.log(response.data.data);
            this.setState({posts:response.data})
        })
        .catch(error =>{
            console.log(error);
            this.setState({errorMsg:"Error retreiving data"})
        })
    }

   
    stateChange = event =>{
        this.setState({
            state: event.target.value
        })
    }
    typeChange = event =>{
        this.setState({
            type:event.target.value
        })
    }
    submitHandler =event =>{
        this.setState({
            filter:'on'
        },console.log("filter is on"))
        alert(`${this.state.state} ${this.state.type} `)
        event.preventDefault()

    }
    /*filtered= () =>{
        if(this.state.state!==0 && this.state.type!==0){
            this.setState({ 
              college: (this.state.posts?.data?.medicalColleges?.length?
               this.state.posts.data.medicalColleges.map(post=>
                    <div>
                            <tr style={{borderBottom:"1px solid black"}}>
                                <td>{post.state}</td>
                                <td style={{fontSize:"12px"}}>{post.name}</td>
                                <td>{post.city}</td>
                                <td>{post.ownership}</td>
                                <td>{post.admissionCapacity}</td>
                                <td>{post.hospitalBeds}</td>

                            </tr>
                    </div>):null
              )
            })
        }
    }*/
    render() {
        const {posts, errorMsg}=this.state;
        return (
            <div>
                <div style={{position:"fixed",left:"50px",float:"left"}}>
                    
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Select Filters here</Card.Title>
                            <Card.Text>
                            
                            </Card.Text><br />
                            <form onSubmit ={this.submitHandler}>
                            <label>State &nbsp;</label>
                            <select value={this.state.state} onChange={this.stateChange}>
                                <option value="Allstates" style={{display:"none"}}>All</option>
                                <option value="A & N Islands">A & N Islands	</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Goa">Goa</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chhatisgarh">Chhatisgarh</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Maharastra">Maharastra</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Puducherry">Puducherry</option>
                                <option value="Tamil Nadu">Tamli Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="West Bengal">West Bengal</option>
                            

                            </select><br /><br />
                            <label>Ownership &nbsp;</label>
                            <select value={this.state.type} onChange={this.typeChange}>
                                <option value="Alltypes" style={{display:"none"}}>All</option>
                                <option value="Govt.">Govt.</option>
                                <option value="Trust">Trust</option>
                                <option value="Society">Society</option>
                                <option value="University">University</option>
                                <option value="Govt-Society">Govt-Society</option>
                                <option value="Private">Private</option>

                            </select><br /><br />
                            <button >Apply Filters</button>

                            </form>
                        </Card.Body>
                        </Card>
                </div>
                <table style={{width:"50%",margin:"auto",color:"#e8505b",backgroundColor:"white",marginTop:"50px"}} >
                    <tr>
                        <th>State</th>
                        <th>College Name</th>
                        <th>City</th>
                        <th>Ownership</th>
                        <th>Admission Capacity</th>
                        <th>Hospital Beds</th>
                    </tr>
                </table>
                <div style={{overflowX:"scroll"}}>
                <table style={{borderTop:"none",width:"50%",margin:"auto",color:"black",backgroundColor:"white",height:"90vh",overflow:"hidden",position:"relative"}} >
                { 
                    posts?.data?.medicalColleges?.length?
                    posts.data.medicalColleges.map(post=>
                        <div>
                                <tr style={{borderBottom:"1px solid black"}}>
                                    {this.state.filter==="on" ?( 
                                    <>
                                    { this.state.state===post.state && this.state.type===post.ownership ?
                                    <>
                                    <td>{post.state}</td>
                                    <td style={{fontSize:"12px"}}>{post.name}</td>
                                    <td>{post.city}</td>
                                    <td>{post.ownership}</td>
                                    <td>{post.admissionCapacity}</td>
                                    <td>{post.hospitalBeds}</td></>: null
                                    }
                                    </>):(
                                        <>
                                        <td>{post.state}</td>
                                        <td style={{fontSize:"12px"}}>{post.name}</td>
                                        <td>{post.city}</td>
                                        <td>{post.ownership}</td>
                                        <td>{post.admissionCapacity}</td>
                                        <td>{post.hospitalBeds}</td></>)
                                        }
                                    
                                    

                                </tr>
                        </div>):null

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

export default MedicalCollege
