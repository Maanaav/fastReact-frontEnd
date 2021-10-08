import { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard(props) {

    return (
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
                <Card onClick={()=>props.history.push("/create")} class="shadow-lg p-15 mb-5 bg-white rounded " style={{ width: '15rem', height: '10rem', padding: "40px", margin: "10px"  }}>
                    <Card.Body>
                        <Card.Title>Create user</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Add new users</Card.Subtitle>
                    </Card.Body>
                </Card>

                <Card onClick={() => props.history.push("/edit")} class="shadow-lg p-15 mb-5 bg-white rounded " style={{ width: '15rem', height: '10rem', padding: "40px", margin: "10px"  }}>
                    <Card.Body>
                        <Card.Title>Edit user</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Edit all users</Card.Subtitle>
                    </Card.Body>
                </Card>

                <Card onClick={() => props.history.push("/view")} class="shadow-lg p-15 mb-5 bg-white rounded " style={{ width: '15rem', height: '10rem', padding: "40px", margin: "10px"  }}>
                    <Card.Body>
                        <Card.Title>View user</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">View all users</Card.Subtitle>
                    </Card.Body>
                </Card>
                
            </div>
        </div>
    );
}