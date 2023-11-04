// import logo from './logo.svg';
// import './App.css';

function App() {
  const chargerElements = [];
var ab=1
var k=-1
var j=0
var tot=52
var m=Math.ceil(tot/8)
console.log(m)
  for (let i = 0; i <=tot; i++) {
    // for (let i = 9; i >=0; i--) {
      var z=i%4
      
      // if(z%16==0){
      //   z=0
        
      // }
      if(i%4<=0){
        j++;
      }
      if(i%16==0){
        j=0
        ++k
      }

      const element = (
        <>
        
        <div
          key={`charger${ab}`} 
          id={`charger${ab}`}
          style={{
            // Add other styles here
            backgroundColor: '#cbcbcb',
            // border: '5px',
            // borderStyle: 'solid',
            color: 'white',
            // zIndex: 
            textAlign:'right',
          
            // borderColor:'#FCE205',
            fontSize:"18px",
            position: 'absolute',
            width: '5%',
            borderRadius:10,
            height:'25px',
            // Set the width and position based on j and i
            left: `${i/8==2?(18+(j * 8)):(18+(j * 8))}%`, // Adjust this according to your needs
            top: `${(2+(z * 5))+k*(30)}%`,
          }}
        >
          {i%2!=0?<div style={{height:10,width:10,margin:'auto',backgroundColor:'blue',marginTop:'-25px'}}></div>:null}
          
          {i%2!=0?<p>{ab}</p>:<>{ab}</>}
          {/* {ab} */}
          {/* {i==9?<div style={{width:'120%',height:1,border:'solid 2px black',marginBottom:'-25px'}}/>:null} */}
          
        
          {/* {j}{i} */}
        </div>
        {m%2==0?<div id={'zx'}>sdfgh</div>:null}
        </>
      );
  ab+=1
      chargerElements.push(element);
    }
    <hr style={{width:'100%',top:60}}/>
  // }
  return (
    <div className="App">
{chargerElements}
    </div>
  );
}

export default App;