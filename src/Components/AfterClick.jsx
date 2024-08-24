import React, { useState } from 'react'

const AfterClick = ({urlData,value}) => {
const[filteInput,setFilterInput]=useState("")

    const filterData=urlData[0].PostOffice.filter((filter)=>filter.Name.toLowerCase().includes(filteInput.toLowerCase()))

    console.log();
    
  return (
    <div className=' w-[80%] flex flex-col gap-5 py-5'>
        <h2 className='font-bold'>Pincode : {value} </h2>
        <div><b>Message : </b> Number of pincode(s) found: </div>
        <input type='text' placeholder='Filter'
        value={filteInput} onChange={(e)=>{setFilterInput(e.target.value)}} 
        className='border-2 border-black rounded-lg w-[100%] p-2'/>
        <div className=' flex flex-wrap gap-5 justify-center'>
            {filterData.map((item,index)=>{
                return(<div key={index} className='border border-black w-[49%] p-5 flex flex-col gap-2 rounded-xl' >
                    <p>Name: {item.Name}</p>
                    <p>Branch Type: {item.BranchType}</p>
                    <p>Delivery Status: {item.DeliveryStatus}</p>
                    <p>District :{item.District}</p>
                    <p>Division :{item.Division}</p>
                </div>)
            })}
        </div>
    </div>
  )
}

export default AfterClick