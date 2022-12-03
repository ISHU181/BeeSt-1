import { useEffect, useState} from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, styled, Button } from "@mui/material";
import { getUsers, deleteUser } from "../services/api";
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 5% auto 0 auto;
`;

const Thead = styled(TableRow)`
    background: #000000;
    & > th {
        color: #ffffff;
        font-family: 'Monospace';
        font-size: 24px;
    }
`;

const Tbody = styled(TableRow)`
    & > td {
        font-family: 'Fantasy';
        font-size: 20px;
    }
`;

const Lists = () =>{
    
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        getAllUser();
    }, []);

    const getAllUser = async ()=>{
        let response = await getUsers();
        console.log(response.data)
        setUsers(response.data)
    }
    
    const deleteUserDetails = async (id) =>{
        await deleteUser(id);
        getAllUser();
    }
    return(
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Usrname</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    users && users.map(user => (
                        <Tbody key={user._id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="success" style={{marginRight: 10}} component={Link} to={`/edt/${user._id}`}>
                                    Edit
                                </Button>
                                <Button variant="contained" style={{backgroundColor: 'red'}} onClick={()=>deleteUserDetails(user._id)}>
                                    Delete
                                </Button>
                            </TableCell>
                        </Tbody>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default Lists;