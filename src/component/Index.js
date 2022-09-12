import React, { useState } from 'react'

export default function Index() {
  const [input, setInput]= useState()
  
  //menentukan angka yang akan dirubbah
  var a = []
  for (let i=1; i<=input; i++){
    if(i === parseInt(input)){
      a=input
      console.log('fizBuzz');
    } else if (i%3 === 0) {
      a="fress"
      console.log('buzz');
    } else {
      a=i
      console.log(i);
    }
  }
  
  //mengurutkan nilai di dalam array
  let arr = [2,6,3,5,8,9,1]
  arr.sort(function(a,b){ return a-b})
  
  console.log(arr);
  return (
   <div>
      <div className='flex-col'>
        <div className='mb-2'>Product Name</div>
        <input onChange={(x)=> setInput(x.target.value)}
          className="shadow bg-amber-100 border-2 border-orange-900 rounded py-2 px-1" 
          />
      </div>
      
   </div>
  )
}
