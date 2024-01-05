import { Container } from '@mui/material';
import React from 'react'

const DevelopwithTM = () => {

  const bodyStyle = {
    backgroundImage: 'url("https://images.pexels.com/photos/1804035/pexels-photo-1804035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    // other background properties as needed
  };

  const h1Style = {
    // color: 'blue',
    margin: '5px 20px auto 20px',
    padding: '20px',
    textAlign: 'center',
    textDecoration: 'underline',
    fontStyle: 'italic',
    fontSize: '70px',
    color: '0 2px 5px rgba(0, 0, 0, 0.1)',

  };


  return (
    <>
      <div style={bodyStyle}>
        <h1 style={h1Style}>Full Stack Project: CRUD Operations</h1>

        <div style={{padding: '20px', marginLeft: '40px', height: '500px', width: '90%'}}>
          <span style={{ fontSize: '50px', fontWeight: 'bold', marginLeft: '200px' }}>Front-End</span>
          <span style={{ fontSize: '50px', fontWeight: 'bold', marginLeft: '400px' }}>Back-End</span>
          <br></br>
          <span style={{ fontSize: '40px', fontWeight: 'plain', fontStyle: 'italic', marginLeft: '250px' }}>->ReactJS</span>
          <span style={{ fontSize: '40px', fontWeight: 'plain', fontStyle: 'italic', marginLeft: '470px' }}>->SpringBoot</span>
          <br></br>
          <span style={{ fontSize: '40px', fontWeight: 'plain', fontStyle: 'italic', marginLeft: '250px' }}>->MaterialUI</span>
          <span style={{ fontSize: '40px', fontWeight: 'plain', fontStyle: 'italic', marginLeft: '415px' }}>->Hibernate</span>
          <br></br>
          <br></br>
          <br></br>
          <span style={{ fontSize: '50px', fontWeight: 'bold', marginLeft: '200px', marginTop: '1000px' }}>Languages</span>
          <span style={{ fontSize: '50px', fontWeight: 'bold', marginLeft: '380px' }}>Database</span>
          <br></br>
          <span style={{ fontSize: '40px', fontWeight: 'plain', fontStyle: 'italic', marginLeft: '250px' }}>->Java</span>
          <span style={{ fontSize: '40px', fontWeight: 'plain', fontStyle: 'italic', marginLeft: '520px' }}>->Mysql</span>
          <br></br>
          <span style={{ fontSize: '40px', fontWeight: 'plain', fontStyle: 'italic', marginLeft: '250px' }}>->HTML</span>
          <br></br>
          <span style={{ fontSize: '40px', fontWeight: 'plain', fontStyle: 'italic', marginLeft: '250px' }}>->CSS</span>
          <br></br>
          <span style={{ fontSize: '40px', fontWeight: 'plain', fontStyle: 'italic', marginLeft: '250px' }}>->Javascript</span>
        </div>
      </div>
    </>

  )
}

export default DevelopwithTM;
{/* <div style={containerStyle}>

           */}

// </div>
{/* <div style={{marginTop: '5px', marginLeft: '15px', width: '40%', border: '5px solid black', 
          height: '200px', backgroundColor: 'pink'}}>
            <h2 style={{fontSize: '50px'}}>Front-End: </h2>
            <ol type='none'>
              <li>ReactJs</li>
              <li>Material UI</li>
            </ol>
          </div>
          
          <div style={{textAlign:'center', marginTop: '-200px', marginLeft: '775px', width: '40%', border: '5px solid black', height: '200px', 
          backgroundColor: 'pink'}}>
            <h2 style={{fontSize: '50px'}}>Back-End: </h2>
            <ol style={{fontSize: '30px', marginTop: '-5px'}}>
              <li>SpringBoot</li>
              <li>Hibernate</li>
            </ol>
          </div>

          <div style={{marginTop: '60px', marginLeft: '15px', width: '40%', border: '5px solid black', height: '200px', 
          backgroundColor: 'pink'}}>
            <h2 style={{fontSize: '50px'}}>Database: </h2>
            <ol>
              <li>MySQL</li>
            </ol>
          </div>
          
          <div style={{marginTop:'-200px', marginLeft: '775px', width: '40%', border: '5px solid black', height: '200px', 
          backgroundColor: 'pink'}}>
          <h2 style={{fontSize: '50px'}}>Languages: </h2>
            <ol>
              <li>Java</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ol>
          </div> */}
