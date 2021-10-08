import { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppBar, Toolbar, Box, TableContainer, Table, TableBody, TableRow, TableCell,} from '@material-ui/core';

export default function ViewUser(props) {
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const response = await axios.get("http://localhost:8000/")
        return setUsers(response.data)
    }
    fetchUsers()

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
                <Card class="shadow-lg p-15 mb-5 bg-white rounded " style={{ width: '35rem', padding: "50px" }}>
                    <Card.Body>
                        <Card.Title>View User</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Here is a list of all the users</Card.Subtitle>
                        <TableContainer>
                            
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Password</TableCell>
                                        
                                    </TableRow>

                                    {users.map((row) => (

                                        <TableRow key={row.id}>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>{row.email}</TableCell>
                                            <TableCell>{row.password}</TableCell>
                                            
                                        </TableRow>
                                    ))}

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}