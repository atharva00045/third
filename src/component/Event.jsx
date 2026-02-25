function Handling() {

  function Button() {
    alert("OTP:123");
  }
  return (
    <>
     <b
     utton onClick={Button}>click me</b>
<Handling1 />
<Handling2 />
    </>
 
  );
  
}


function Handling1() {
  function Button() {
    alert("OTP:12354");
  }   
  return (<button onClick={Button}>click me</button>);
}

function Handling2() {
  function Button() {
    alert("OTP:123");
  }
  return (<button onMouseOver={Button}>click me</button>);
}

export default Handling;


