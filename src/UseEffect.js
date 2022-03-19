import React, { useEffect, useState } from "react";

function UseEffect(){
     
     const[count,setcount]= useState(0)
    useEffect(()=>{

        document.title = `Message{${count}}`
    })
    console.log("these is outside ")
    

    return(
        <center>
         <React.Fragment>
           <h1>{count}</h1>
           <button onClick={()=>setcount(count+1)}>Clickme</button>
           
         </React.Fragment>
         </center>
         
    )
};
export default UseEffect;