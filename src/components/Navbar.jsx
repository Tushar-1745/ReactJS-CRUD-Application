import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    Background:#111111;
  `

const Tabs = styled(NavLink)`
    font-size:20px;
    margin-right: 20px;
    color: inherit;
    text-decoration: none;
  `
  const Navbar = () => {
    return (
      <Header position='static'>
        <Toolbar>
        <Tabs to="/">
          <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdrxvgDj6Y-fRVeRIkZtJbs3o-dhOHps78tA&usqp=CAU" alt="Logo" style={{ marginRight: '8px', height:'60px', width: '60px' }} />
          </div>
        </Tabs>
          {/* <Tabs to="/">DevelopwithTM</Tabs> */}
          <Tabs to="/all">All Users</Tabs>
          <Tabs to="/add">Add User</Tabs>
        </Toolbar>
      </Header>
    );
  };

export default Navbar;