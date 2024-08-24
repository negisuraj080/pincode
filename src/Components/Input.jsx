const Input = ({value,setValue,btnClick,setBtnClick}) => {

    
    return (
      <div className='flex flex-col gap-5 w-[80%]  py-6  items-start '>
          <div className='flex flex-col text-black gap-4 w-full'>
              <label htmlFor='input' className='font-bold'>Enter Pincode</label>
              <input className='border-2 border-black p-2 rounded-lg w-[]' type='text' placeholder='Pincode' value={value} onChange={(e)=>{setValue(e.target.value)}}/>
          </div>
          <button className='text-white bg-black px-7 py-2 rounded-lg'
            onClick={()=>{setBtnClick(true)}}>Lookup</button>
      </div>
    )
  }
  
  export default Input