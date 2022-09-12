import React, { useEffect, useState } from 'react'

export default function FetchData() {
  const [dataList, setDataList] = useState([])
  const getData = async ()=> {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    setDataList(data)
  }
  useEffect(()=> {
    getData()
  },[])
  return (
    <div>
      <div>
        <button className='p-2 bg-slate-600 rounded-md m-5'>Tampilkan</button>
      </div>
      <table className="table-auto w-3/4">
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
          {dataList.map((data, item)=> {
            return (

              <tbody className='divide-y divide-gray-200'>
          <tr>
            <td>{data.id}</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
        </tbody>
          )
          })}
      </table>
    </div>
  )
}
