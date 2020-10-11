import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {Dropdown,Row,Col, Button} from 'react-bootstrap';
import axios from 'axios'
import './Graph.css'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
class Graph extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             state:'Andhra Pradesh',
             ageEstimate:'0-9',
             gender:'Male',
             start:'2020-10-01',
             end:'2020-10-08',
             postsdata:' ',
             finaldata:' ',
             year:'',
             month:'',
             day:'',
             email:'',
             showModal:false
        }
    }
    
    stateChange = event =>{
        this.setState({
            state:event.target.value
        })
    }
    genderChange =event =>{
        this.setState({
            gender:event.target.value
        })
    }
    ageChange =event =>{
        this.setState({
            ageEstimate:event.target.value
        })
    }
    startChange =event =>{
        this.setState({
            start:event.target.value
        })
    }

    endChange =event =>{
        this.setState({
            end:event.target.value
        })
    }
    clickSubmit=()=>{
        console.log("clicked submit")
        this.setState({
            showModal:true
        })
    }
    closeSubmit =()=>{
        this.setState({
            showModal:false
        })
    }
    emailChange =event =>{
        this.setState({
            email:event.target.vallue
        })
    }
    sendEmail =event =>{
        event.preventDefault();
    }
    
    submitHandler = event=>{
        event.preventDefault();
        const data ={
            start:{
                year:this.state.start.substring(0,4),
                month:this.state.start.substring(5,7),
                day:this.state.start.substring(8,10)
            },
            end:{
                year:this.state.end.substring(0,4),
                month:this.state.end.substring(5,7),
                day:this.state.end.substring(8,10)
            },
            filter:{
                state: this.state.state,
                ageEstimate:'[' + this.state.ageEstimate + ']',
                gender:this.state.gender,    
            }
            
        }
        console.log("sending post request");

        axios.post('https://vithack2020-covid-problems.herokuapp.com/get_filtered_data', { data})
        .then(response =>{
            console.log(response.data);
            this.setState({postsdata:response.data})
        })
        .catch(error =>{
            console.log(error);
            this.setState({errorMsg:"Error retreiving graph data"})
        })
    }
   
    clickDownload(){
        console.log("Clicked Download");
        var a = document.body.appendChild(
            document.createElement("a")
        );
        a.download = "export";
        a.href = "data:application/pdf," + document.getElementsByClassName("d-flex align-items-center justify-content-center graph").innerHTML;
        a.click();
    }
  render() {
   
    const data = [
        {
          date: '30/01/2020', deaths:4000  
        },
        {
          date: '02/02/2020', deaths:1000   
        },
        {
          date: '03/02/2020', deaths:3100   
        },
        {
          date: '02/03/2020', deaths:1230   
        },
        {
          date: '04/03/2020', deaths:1200
        },
        {
          date: '05/03/2020', deaths:1900 
        },
        {
          date: '06/03/2020', deaths:2530
        }
      ];
      const {finaldata}=this.state;
    return (
        <div style={{height:"100vh",overflowX:"hidden"}}>
            <form onSubmit={this.submitHandler}>

                <br /><br />
            <Row>
                
            <Col>
                    <label>State</label><br />
                    <select value={this.state.state} onChange={this.stateChange}>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Odisha">Odisha</option>
                    </select>
            </Col>

             <Col>
                    <label>Age Groups</label><br />
                    <select value={this.state.ageEstimate} onChange={this.ageChange}>

                    <option value="0-9">0-9</option>
                    <option value="10-19">10-19</option>
                    <option value="20-29">20-29</option>
                    <option value="30-39">30-39</option>
                    <option value="40-49">40-49</option>
                    <option value="50-59">50-59</option>
                    <option value="60-69">60-69</option>
                    <option value="70+">70+</option>
                    </select>
               
             </Col>   

             <Col>
                    <label>Gender</label><br />
                    <select value={this.state.gender} onChange={this.genderChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
            </Col>
            
            </Row><br />
            <Row>
                    <Col>
                        <label for="start">Start Date</label><br />
                        <input type="date" value={this.state.start} onChange={this.startChange} name="start" />
                    </Col>

                    <Col>
                        <label for="end">To Date</label><br />
                        <input type="date" value={this.state.end} onChange={this.endChange} name="end" />
                    </Col>
                </Row><br />
            <button type="submit"variant="success" >Apply Filters</button>
            </form>
            <br />            
            <br />
            <Row  >
                <Col>
            <div class="d-flex align-items-center justify-content-center graph" >
                
                <LineChart 
                    width={1000}
                    height={300}
                    data = {data}
                    
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="deaths" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart><br />
                </div>
                </Col>
      </Row>
        
      <Row>
          <Col>
            <button onClick={this.clickDownload}>Download</button>
          </Col>

          <Col>
          <button onClick={this.clickSubmit}>Send Mail</button>
          <Modal classNames={{
                                animationIn: 'customEnterAnimation',
                                animationOut: 'customLeaveAnimation',
                                }} animationDuration={1000}  open={this.state.showModal} onClose={this.closeSubmit} blockScroll={false} center  >
                            <br />
                            <h2>Enter your E-Mail</h2><br />
                            <form onSubmit={this.sendEmail}>
                                <input type="text" value={this.state.email} onChange={this.emailChange} /><br /><br />
                                <button>Submit</button>
                            </form>
                    </Modal>
          </Col>
      </Row>
      
      </div>
    );
  }
}

export default Graph