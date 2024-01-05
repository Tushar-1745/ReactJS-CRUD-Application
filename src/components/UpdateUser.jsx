import styled from "@emotion/styled";
import { FormControl, FormGroup, InputLabel, Input, Typography, Button} from "@mui/material";

import { useState, useEffect } from "react";
import { getUser, updateUser } from "../service/api";
import { Navigate, useNavigate, useParams } from "react-router-dom";

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

export default function UpdateUser() {
    const [user, setUser] = useState(initialValue);
    let navigate = useNavigate();
    const {id} = useParams();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const getUserData = async()=>{
        let response = await getUser(id);
        console.log(response)
        setUser(response.data)

    }

    useEffect(()=>{
        getUserData();
    }, [])
    
    const updateUserDetails = async () => {
        await updateUser(id, user);
        navigate("/all")
    };

    return (
        <StyledForm>
            <Typography>Update New User</Typography>
            <InputLabel>Name</InputLabel>
            <Input name="name" value={user.name} onChange={(e) => onValueChange(e)} />

            <InputLabel>Username</InputLabel>
            <Input name="username" value={user.username} onChange={(e) => onValueChange(e)} />

            <InputLabel>Email</InputLabel>
            <Input name="email" value={user.email} onChange={(e) => onValueChange(e)} />

            <InputLabel>Phone</InputLabel>
            <Input name="phone" value={user.phone} onChange={(e) => onValueChange(e)} />

            <Button variant="contained" onClick={() => updateUserDetails()}>
                Update User
            </Button>
        </StyledForm>
    );
}