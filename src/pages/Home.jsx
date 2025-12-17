import { useState } from "react";


function Home(){
  const [count, setCount] = useState(0);
   return (
    <div style={{
      fontFamily: "ui-sans-serif",
      background: "#f1f1f1",
    }}>
      <p>Hello! Welcome to my page.</p>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count +1)}
      style={{backgroundColor: "blue", color:"white", border:"none"}}>Increase</button>
    </div>
   )
}

export default Home;