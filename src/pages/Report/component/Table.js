import React, { useEffect, useState } from "react";
import { API } from "../../../config/API";

export const Table = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await API.get("/getfriends");
      // console.log(response.data.data.datas);
      setData(response.data.data.datas);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <table className="w-full table-auto mt-10">
        <thead className="text-left bg-stone-200 border-1 border-black uppercase">
          <tr className="border-b">
            <th scope="col" className="px-6 py-3 border-2 border-black">
              No
            </th>
            <th scope="col" className="px-6 py-3 border-2 border-black">
              Name
            </th>
            <th scope="col" className="px-6 py-3 border-2 border-black">
              Gender
            </th>
            <th scope="col" className="px-6 py-3 border-2 border-black">
              Age
            </th>
          </tr>
        </thead>
        <tbody className="">
          {data?.map((item, index) => (
            <tr className="border-b bg-stone-100">
              <td className="px-6 py-2 border-2 border-black">{item.id}</td>
              <td className="px-6 py-2 border-2 border-black">{item.name}</td>
              <td className="px-6 py-2 border-2 border-black">{item.gender}</td>
              <td className="px-6 py-2 border-2 border-black">{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
