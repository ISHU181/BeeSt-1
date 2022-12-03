import { useState } from "react";
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material";
import { addUser } from "../services/api";
import { useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)`
    width: 35%;
    margin: 5% auto 0 auto;
    & > div{
        margin-top: 20px;
    }
`;

const BootstrapButton = styled(Button)`
    width: 35%;
    margin: auto;
`;

const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const Register = () =>{

    const [user, setUser] = useState(defaultValue);
    const {name,username,email,phone} = user;
    const navigate = useNavigate();

    const onValueChange = (e) =>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]: e.target.value})
    }

    const addUserDetails = async ()=>{
        await addUser(user);
        navigate('/lis');
    }

    return(
        <Container>
            <Typography variant="h4" sx={{fontFamily: 'Pacifico'}}>Register New User</Typography>
            <FormControl>
                <InputLabel sx={{fontFamily: 'Pacifico'}}>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name" value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel sx={{fontFamily: 'Pacifico'}}>Username</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="username" value={username}/>
            </FormControl>
            <FormControl>
                <InputLabel sx={{fontFamily: 'Pacifico'}}>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="email" value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel sx={{fontFamily: 'Pacifico'}}>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="phone" value={phone}/>
            </FormControl>
            <FormControl>
                <BootstrapButton variant="contained" onClick={()=>addUserDetails()} color="success">Submit</BootstrapButton>
            </FormControl>
        </Container>
    )
}

export default Register;