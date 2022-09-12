import React, { useState } from 'react'

export default function Psbb() {
  
  // let family = 4;
  // let members = [2,5,6,4]
  // let totalfamily = 0
  const [famili, setFamily] = useState()
  const [members, setMembers] = useState()
  // const [total, setTotal] = useState(0)
console.log(members);
  const handleinputchange = (e) => {
    setFamily(e.target.value);
  };
  const handleinput = (i) => {
    setMembers(i.target.value);
  };
  console.log(famili);
  console.log(members);
  
  let totalfamily = 0
  var total = 0
  
  // if (family !== members.length) {
  //   console.log("Input must be equal with count of family");
  // } else {
  //   for (let x = 0; x < members.length; x++) {
  //     totalfamily += members[x]
  //   }
  //   var as = (Math.floor((totalfamily/4)+1));
  // }


  

  return (
    <div className='flex flex-col justify-center p-5 w-screen'>
      <form className='space-x-4 justify-center'>
        <input 
          className='border-2' 
          type= 'number' 
          onChange={(e) => handleinputchange(e)}
          />
        <input 
          className='border-2' 
          type= 'name' 
          onChange={(i) => handleinput(i)}
          />
        <button className='bg-sky-700 p-2 rounded' 
        // onClick={handleclick()}
        >Submit</button>
      </form>
      <div>Minimum require bus : {total} </div>
    </div>
  )
}
