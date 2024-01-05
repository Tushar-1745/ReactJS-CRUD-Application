
import React from 'react'
import { Table, TableRow, TableCell, TableHead, TableBody, styled, Button } from '@mui/material';
import { getUsers } from '../service/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteUser } from '../service/api';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 20px 0 0 70px;
`;
const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const TCell = styled(TableCell)`
    text-align: center
  `
const headingStyle={textAlign: 'center', marginTop: '10px', fontStyle: 'italic', justifyContent: 'center', fontSize: "50px", fontType: 'bold', textDecoration: 'underline'}

const AllUsers = () => {
  
  const[users, setUsers] = useState([])

  const getUsersDetails = async () => {
    try {
      const response = await getUsers();
      console.log(response); // Log the entire response object

      if(response){
        console.log(response);
        setUsers(response.data);
      }
      else{
        console.log("did not got the response")
      }
      
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  

  const deleteUserData = async(id)=>{
    await deleteUser(id);
    getUsersDetails();
  }
  useEffect(() => {
    getUsersDetails();
  }, []);

  return (
    <>
    <div style={headingStyle}>All Users</div>
    <StyledTable>
      <TableHead>
        <THead>
          <TCell >Id</TCell>
          <TCell>name</TCell>
          <TCell>username</TCell>
          <TCell>email</TCell>
          <TCell>phone</TCell>
          <TCell>operations</TCell>
        </THead>
      </TableHead>
      <TableBody>
          {users.map((user) => (
            <TRow key={user.id}>
              <TCell>{user.id}</TCell>
              <TCell>{user.name}</TCell>
              <TCell>{user.username}</TCell>
              <TCell>{user.email}</TCell>
              <TCell>{user.phone}</TCell>
              <TCell>
                <Button variant='contained' color='secondary' style={{marginRight: 10}} component={Link} to={`/update/${user.id}`}>Update</Button>
                <Button variant='contained' color='primary' onClick={()=>deleteUserData(user.id)}>Delete</Button>
              </TCell>
            </TRow>
          ))}
        </TableBody>
      </StyledTable>
      </>
  )
}
export default AllUsers;
