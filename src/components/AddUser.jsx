import styled from "@emotion/styled";
import {FormGroup, InputLabel, Input, Button} from "@mui/material";

import { useState } from "react";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";

const StyledForm = styled(FormGroup)`
    width: 50%;
    margin: 15px 0 0 25%;
    & > div {
        margin-top: 20px;
    }
`

const headingStyle={
    fontSize: '40px', fontType: 'bold', fontStyle: 'italic', marginLeft: '380px', textDecoration: 'underline'
}

const initialValue={
    name: '',
    username:'',
    email:'',
    phone:''
}

export default function AddUser() {
    const [user, setUser] = useState(initialValue);

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    let navigate = useNavigate();
    
    const addUserDetails = async (user) => {
        await addUser(user);
        navigate("/all")
    };

    return (
        <>
        <h2 style={headingStyle}>Add New User</h2>
        <StyledForm>
            <InputLabel>Name</InputLabel>
            <Input name="name" onChange={(e) => onValueChange(e)} />

            <InputLabel>Username</InputLabel>
            <Input name="username" onChange={(e) => onValueChange(e)} />

            <InputLabel>Email</InputLabel>
            <Input name="email" onChange={(e) => onValueChange(e)} />

            <InputLabel>Phone</InputLabel>
            <Input name="phone" onChange={(e) => onValueChange(e)} />

            <Button variant="contained"style={{ marginTop: '10px' }} onClick={() => addUserDetails(user)}>
                Add User
            </Button>
        </StyledForm>
        </>
    );
}
