import { useState, useEffect } from "react";
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material";
import { editUser, getUser } from "../services/api";
import { useNavigate, useParams } from 'react-router-dom';

const Container = styled(FormGroup)`
    width: 40%;
    margin: 5% auto 0 auto;
    & > div{
        margin-top: 20px;
    }
`;

const BootstrapButton = styled(Button)`
    width: 40%;
    margin: auto;
`;

const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const EditUser = () =>{

    const [user, setUser] = useState(defaultValue);
    // const {name,username,email,phone} = user;
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        loadUserDetails();
    },[])

    const loadUserDetails =async () =>{
        const response = await getUser(id);
        setUser(response.data);
    }

    const onValueChange = (e) =>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]: e.target.value})
    }

    const editUserDetails = async ()=>{
        await editUser(id, user);
        navigate('/lis');
    }

    return(
        <Container>
            <Typography variant="h4" sx={{fontFamily: 'Pacifico'}}>Edit User</Typography>
            <FormControl>
                <InputLabel sx={{fontFamily: 'Pacifico'}}>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name" value={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel sx={{fontFamily: 'Pacifico'}}>Username</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="username" value={user.username}/>
            </FormControl>
            <FormControl>
                <InputLabel sx={{fontFamily: 'Pacifico'}}>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="email" value={user.email}/>
            </FormControl>
            <FormControl>
                <InputLabel sx={{fontFamily: 'Pacifico'}}>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="phone" value={user.phone}/>
            </FormControl>
            <FormControl>
                <BootstrapButton variant="contained" onClick={()=>editUserDetails()} color="success">Edit</BootstrapButton>
            </FormControl>
        </Container>
    )
}

export default EditUser;