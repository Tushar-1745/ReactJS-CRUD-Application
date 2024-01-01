import styled from "@emotion/styled";
import { FormControl, FormGroup, InputLabel, Input, Typography, Button} from "@mui/material";

import { useState } from "react";
import { addUser } from "../service/api";
import { Navigate, useNavigate } from "react-router-dom";

const StyledForm = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
    }
`

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
        <StyledForm>
            <Typography>Add New User</Typography>
            <InputLabel>Name</InputLabel>
            <Input name="name" onChange={(e) => onValueChange(e)} />

            <InputLabel>Username</InputLabel>
            <Input name="username" onChange={(e) => onValueChange(e)} />

            <InputLabel>Email</InputLabel>
            <Input name="email" onChange={(e) => onValueChange(e)} />

            <InputLabel>Phone</InputLabel>
            <Input name="phone" onChange={(e) => onValueChange(e)} />

            <Button variant="contained" onClick={() => addUserDetails(user)}>
                Add User
            </Button>
        </StyledForm>
    );
}
