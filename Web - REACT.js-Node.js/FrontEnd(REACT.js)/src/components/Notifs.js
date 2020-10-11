import React, { Component } from 'react'
import axios from 'axios'
import './Notif.css'
import { Card,Row,Col } from 'react-bootstrap';

class Notifs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             errorMsg:''
        }
    }
    componentDidMount(){
        axios.get('https://api.rootnet.in/covid19-in/notifications')
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
        const {posts,errorMsg} = this.state;
        return (
            <div><br /><br />
                <p>Click on the below mentioned Notifications and advisories to got to that website.</p>
                
                {
                    posts?.data?.notifications?.length?
                    posts.data.notifications.map((post,i) =>
                        <>
                        <Row style={{width:"1000px",marginLeft:"270px",marginRight:"20px"}}>
                            <Col>
                            <Card >
                            <Card.Body>
                                <Card.Title><a key={i} href={post.link}>{post.title}</a></Card.Title>
                                <Card.Text>
                                
                                </Card.Text><br />
                                
                            </Card.Body>
                            </Card>
                            </Col>
                        </Row>
                        </>):
                    null
                }
                  
                {
                    errorMsg?<div>{errorMsg}</div>:null
                }
            </div>
        )
    }
}

export default Notifs
