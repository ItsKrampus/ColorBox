import { useState } from "react";
export default function ColorBox({ colors }) {
  function RandomColor(colors) {
    const num = Math.floor(Math.random() * colors.length);
    const color = colors[num];

    return color;
  }
  
  const [color, setColor]=useState(RandomColor(colors))
  const handleClick= ()=>{
    setColor(RandomColor(colors))
  }


  return(
    <div  onClick={handleClick} style={{backgroundColor:color, width:"75px", height:"75px", userSelect:'none'}}>
          
    </div>
  )
}
