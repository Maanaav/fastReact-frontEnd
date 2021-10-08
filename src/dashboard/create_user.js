import { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppBar, Toolbar, Box, TableContainer, Table, TableBody, TableRow, TableCell, } from '@material-ui/core';

export default function CreateUser(props) {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})

    const fetchUsers = async () => {
        const response = await axios.get("http://localhost:8000/")
        return setUsers(response.data)
    }
    fetchUsers()

    const fetchUser = async (id) => {
        const response = await axios.get(`http://localhost:8000/${id}`)
        return setUser(response.data)
    }

    const createOrEditUser = async () => {
        if (user.id) {
            await axios.put(`http://localhost:8000/${user.id}`, user)
        } else {
            await axios.post(`http://localhost:8000/`, user)
        }
        await fetchUsers()
        await setUser({ id: 0, name: '', email: '', password: '' })
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8000/${id}`)
        await fetchUsers()
    }

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
                <Card class="shadow-lg p-15 mb-5 bg-white rounded " style={{ width: '60rem', padding: "50px" }}>
                    <Card.Body>
                        <Card.Title>Add User</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Add new users</Card.Subtitle>
                        <TableContainer>
                            <TextField value={user.id} type="hidden" />
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableBody>

                                    <TableRow>
                                        <TableCell><TextField style={{ width: "10rem" }} value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} id="outlined-basic" label="Name" variant="outlined" /></TableCell>
                                        <TableCell><TextField style={{ width: "10rem" }} value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} id="outlined-basic" label="Email" variant="outlined" /></TableCell>
                                        <TableCell><TextField style={{ width: "10rem" }} value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} id="outlined-basic" label="Password" variant="outlined" /></TableCell>
                                        <TableCell><Button onClick={() => createOrEditUser()} variant="outlined">Submit</Button></TableCell>
                                    </TableRow>

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