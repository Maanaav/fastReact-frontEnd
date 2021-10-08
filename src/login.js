import { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login(props) {

    const [textuser, textsetUser] = useState({})
    const [dbuser, dbsetUser] = useState({})

    const submitted = async () => {

        if (textuser.email) {
            const response = await axios.post(`http://localhost:8000/getPass`, textuser)
            if (response.data != null){
                dbsetUser(response.data)
                if (response.data.password != undefined) {
                    if (textuser.password == response.data.password) {
                        props.history.push("/dashboard")
                    }
                }
            }
            else{
                dbsetUser({ email: "Not found" })
            }
        }
        else{
            dbsetUser({email: "None"})
        }
    }

    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: '#f25c53',
            height: "100vh", 
            width: "100%"
        }} class="justify-content-center align-self-center">
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }} class="text-center justify-content-center align-self-center">
                    <Card class="shadow-lg p-15 mb-5 bg-white rounded " style={{ width: '35rem', padding: "50px"}}>
                        <Card.Body>
                            <Card.Title>Login</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Enter your email & password</Card.Subtitle>
                            <TextField style={{marginTop: "15px"}} value={textuser.email} onChange={(e) => textsetUser({ ...textuser, email: e.target.value })} id="outlined-basic" label="Email" variant="outlined" />
                            <br></br>
                            <TextField style={{marginTop: "10px"}} type="password" value={textuser.password} onChange={(e) => textsetUser({ ...textuser, password: e.target.value })} id="outlined-basic" label="Password" variant="outlined" />
                            <br></br>
                            <Button style={{marginTop: "20px"}} onClick={() => submitted()} variant="outlined">Submit</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
    );
}