// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function Parallel() {
    const [Vehicles,setVechiles]=useState(2)
    const [Vperrow,setvperrow]=useState(4)
    const handleChange = e => {
        console.log(`typed => ${e.target.value}`);
        setvperrow(e.target.value);
      };
      const handleChangeno = e => {
        console.log(`typed => ${e.target.value}`);
        setVechiles(parseInt(e.target.value));
      };
    const chargerElements = [];
    var ab=1
    var i=0
    var z=0
      for (let j = 0; j <Vehicles; j++) {
        z=j%Vperrow;
            if(z==0){
                i++
            }
            
          const element = (
            <>
            
            <div
              key={`charger${ab}`} 
              id={`charger${ab}`}
              style={{
                backgroundColor: '#cbcbcb',
                color: 'white',
                textAlign:'right',
              
                fontSize:"18px",
                position: 'absolute',
                width: '5%',
                borderRadius:10,
                height:'25px',
                left: `${18+(z * 6)}%`, 
                top: (i % 2 === 0) ? `${ (i * 5)}%` : `${ (i * 5)}%`
              }}
            >
              {i%2!=0?<div style={{height:10,width:'120%',margin:'auto',backgroundColor:'blue',marginTop:'34%'}}></div>:null}
              
              {i%2!=0?<p style={{marginTop:'-45%'}}>{ab++}</p>:<>{ab++}</>}
              
            
            </div>
            </>
          );
      
          chargerElements.push(element);
        
        // <hr style={{width:'100%',top:60}}/>
      }
    return (
      <div className="App">
        <Grid container >
        <Grid  xs={10}>
  {chargerElements}
  </Grid>
  <Grid xs={2} style={{backgroundColor:'lightgray',border:'3px solid gray',height:'100vw'}}>

    <Grid style={{backgroundColor:'#3879F6',height:50,marginTop:'-12px',marginTop:'10',padding:'10px',paddingLeft:'80px'}}><h3 style={{color:'white',margin:'auto'}}>CUSTOMISE</h3></Grid>
    <Grid>
<h5 style={{marginLeft:10,color:'gray'}}>ADD VEHICLES + </h5>
<Grid style={{marginLeft:10}}>

<Button variant="outlined" style={{borderColor:'grey',margin:10}} onClick={() => setVechiles(Vehicles+1)}>+1</Button>

<Button variant="outlined" style={{borderColor:'grey',margin:10}} onClick={() => setVechiles(Vehicles-1)}>-1</Button>

<TextField id="outlined-basic" label='nos. vehicles' variant="outlined" style={{borderColor:'grey',margin:10,width:70,height:"20px",fontSize:10}} onChange={handleChangeno}/>
</Grid>
<h5 style={{marginLeft:10,color:'gray'}}>VEHICLES PER ROW </h5>
<Grid style={{marginLeft:10}}>
<TextField id="outlined-basic" label="vehicles per Row" variant="outlined" style={{borderColor:'grey',margin:10}} onChange={handleChange}/>
</Grid>
<h5 style={{marginLeft:10,color:'gray'}}>CHARGER ALLOCATION:</h5>
<Grid style={{marginLeft:10}}>
<Stack spacing={1} direction="column" padding={2}>
<Button variant="contained">Link Charging</Button>
<Button variant="contained">D-link Charging</Button>
<Button variant="contained">No Charging</Button>
</Stack>
</Grid>
<Grid>
<h5 style={{marginLeft:10,color:'gray'}}>TOTAL NUMBERS OF VEHICLES: {Vehicles}</h5>
</Grid>
    </Grid>
  </Grid>
  </Grid>

      </div>
    );
  }
  
  export default Parallel;