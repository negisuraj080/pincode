import React, { useEffect, useState } from 'react'
 import Input from "./Components/Input"
import AfterClick from './Components/AfterClick';


 function App() {

  const[value,setValue]=useState("");
  const [btnClick,setBtnClick]=useState(false);
  const[urlData,setUrlData]=useState([]);
  

  let url= `https://api.postalpincode.in/pincode/${value}`
    
  const datFetch=async () => {
    try{
      const response=await fetch(url)
    const data = await response.json();
    setUrlData(data);  
    } 
    catch(err){
      console.log(err);
      
    }
  }

  useEffect(()=>{
    datFetch();
  },[value])
  
  
  return (
    <div className= "h-[100vh] flex justify-center" >
      {btnClick?<AfterClick urlData={urlData} value={value} />:<Input  value={value} setValue={setValue} btnClick={btnClick} setBtnClick={setBtnClick}/>}
    </div>
  )
}

export default App