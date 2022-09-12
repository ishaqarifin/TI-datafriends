import React, { useEffect, useRef, useState } from "react";
import { API } from "../../config/API";
import { Navbar } from "../components/Navbar";
import { useReactToPrint } from "react-to-print";
import { Chart } from "./component/Chart";
import { Table } from "./component/Table";

export const Report = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await API.get("/getfriends");
      if (response.data.status === "Success") {
        setData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const component = useRef();
  const handlePrint = useReactToPrint({
    content: () => component.current,
  });

  useEffect(() => {
    getData();
  });

  return (
    <>
      <Navbar />
      <div className="mx-20 my-5">
        <div ref={component}>
          <div className="font-bold text-orange-900">Data Report</div>
          <Chart />
          <Table />
        </div>
        <div className="flex items-center justify-center mt-10">
          <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 font-semibold font-md rounded focus:outline-none focus:shadow-outline w-1/2" type="submit">
            Download Data
          </button>
        </div>

        {/* <table className="w-full table-auto">
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
            {/* {transactions?.map((item, index) => (
                <tr className="border-b bg-stone-100">
                  <td className="px-6 py-2 border-2 border-black">{item?.id}</td>
                  <td className="px-6 py-2 border-2 border-black">{item.buyer.name}</td>
                  <td className="px-6 py-2 border-2 border-black">{item.buyer.address}</td>
                  <td className="px-6 py-2 border-2 border-black">{item.buyer.codePost}</td>
                  <td className="px-6 py-2 border-2 border-black">{item?.product?.name}</td>
                  <td className="px-6 py-2 border-2 border-black">{item?.status}</td>
                  <td className="items-center space-x-2 py-2 border-2 border-black">
                      <button
                        // onClick={()=> {
                        //   handleEdit(item.id)
                        // }}
                        className="bg-red-500 text-white ml-4 font-bold hover:bg-red-700 py-1 w-24 rounded-xl focus:outline-none focus:shadow-outline"
                      >
                        Cencel
                      </button>
                    <button 
                    // onClick={() => handleApprove(item.id)}
                    className="bg-green-400 hover:bg-green-700 text-white font-bold py-1 w-24 rounded-xl focus:outline-none focus:shadow-outline" type="button">
                      Approve
                    </button>
                  </td>
                </tr>
              ))} 
             <tr className="border bg-stone-100">
              <td className="px-6 py-2 border-2 border-black">1</td>
              <td className="px-6 py-2 border-2 border-black">user</td>
              <td className="px-6 py-2 border-2 border-black">Laki-Laki</td>
              <td className="px-6 py-2 border-2 border-black">35</td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </>
  );
};
