import { use, useState, useEffect  } from "react";

function Add() {
  const [count, setcount] = useState(0);

  const Increment = () => {
    setcount(count + 1);
  };

  const Decrement = () => {
    setcount(count - 1);
  };
  const reset = () => {
    setcount(0);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={Increment}>Incrment</button>
      <br />
      <button onClick={Decrement}>Decrement</button>
      <button onClick={reset}>reset</button>
      <Name />
    </>
  );
}

export default Add;

function Name() {
  const [Name, Lastname] = useState("---");

  const Name1 = () => {
    Lastname("atharva");
  };

  const Lastname1 = () => {
    Lastname(Name + "chaudhari");
  };

  return (
    <>
      <h1>{Name}</h1>
      <button onClick={Name1}>name</button>
      <button onClick={Lastname1}>last name</button>
      <Date />
    </>
  );
}


function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h2>Time: {seconds}</h2>;
}


function Date() {
  const [name, lastname] = useState("---");
  const [name1, lastname1] = useState("---");

  const fi = () => {
    lastname("sarthak");
  };

  return (
    <>
      <h1>
        {name} {name1}
      </h1>
      <button onClick={fi}>name</button>
      <button onClick={() => lastname1("Aarkhade")}>last name</button>
      <button onClick={() => lastname ("---")}>reset</button>
      <On />
    </>
  );
}

function On() {
  const [num, number] = useState(10);

  const pic = () => {
    number(num + 1);
  };

  const pic2 = () => {
    number(num - 1);
  };

  const pic3 = () => {
    number(0);
  };

  return (
    <>
      <h1>{num}</h1>
      <button onClick={pic}>+</button>
      <button onClick={pic2}>-</button>
      <button onClick={pic3}>reset</button>
      <BTN />
    <BTN2 />
       <Timer />
       <Text />
       <CheckNumber />
    </>
  );
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    


function BTN() {
  const [color, setColor] = useState("white");

  return (
    <div style={{ backgroundColor: color, height: "20vh" }}>
      <button onClick={() => {setColor(color === "red" ? "white" : "red");}}>Change </button>
    </div>
  );


}


function BTN2(){
  const [set ,setes] = useState("white")

  return(
    <div style={{backgroundColor:set, height:"20vh"}}>

      <button onClick={()=>{setes(set=="green"? "red":"green")}}>Change color</button>

    </div>
  );
}









function Text(){
  const [color , changecolor]=useState("black")

  
  return(
    <div>
      <h1 style={{color:color}}>atharva </h1>
      <button onClick={()=>{changecolor("blue")}}>heyy..!!!</button>
    </div>
  )

}





function CheckNumber() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const checkNumber = () => {
    const num = Number(number);

    if (num > 0) {
      setResult("Number is Positive");
    } else if (num < 0) {
      setResult("Number is Negative");
    } else if (num === 0) {
      setResult("Number is Zero");
    } else {
      setResult("Please enter a valid number");
    }
  };

  return (
    <div>
      <h2>Positive or Negative Number Checker</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />

      <button onClick={checkNumber}>Check</button>

      <h3>{result}</h3>
    </div>
  );
}









