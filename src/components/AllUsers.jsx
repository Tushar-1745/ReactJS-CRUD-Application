import React from 'react'
import { Table, TableRow, TableCell, TableHead, TableBody, styled, Button } from '@mui/material';
import { getUsers } from '../service/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteUser } from '../service/api';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 70px;
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

const AllUsers = () => {
  
  const[users, setUsers] = useState([])

  const getUsersDetails= async()=>{
    
      let response = await getUsers();
      console.log(response)
      setUsers(response.data)
    
  }

  const deleteUserData = async(id)=>{
    await deleteUser(id);
    getUsersDetails();
  }
  useEffect(() => {
    getUsersDetails();
  }, []);

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>name</TableCell>
          <TableCell>username</TableCell>
          <TableCell>email</TableCell>
          <TableCell>phone</TableCell>
          <TableCell>operations</TableCell>
        </THead>
      </TableHead>
      <TableBody>
          {users.map((user) => (
            <TRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button variant='contained' color='secondary' style={{marginRight: 10}} component={Link} to={`/update/${user.id}`}>Update</Button>
                <Button variant='contained' color='primary' onClick={()=>deleteUserData(user.id)}>Delete</Button>
              </TableCell>
            </TRow>
          ))}
        </TableBody>
      </StyledTable>
  )
}

export default AllUsers;
