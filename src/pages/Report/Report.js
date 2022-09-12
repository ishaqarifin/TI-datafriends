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
      setData(response.data.data.datas);
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
  }, []);

  console.log({ data });
  return (
    <>
      <Navbar />
      <div className="mx-20 my-5">
        <div ref={component}>
          <div className="font-bold text-orange-900">Data Report</div>
          <Chart />
          <Table data={data} />
        </div>
        <div className="flex items-center justify-center mt-10">
          <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 font-semibold font-md rounded focus:outline-none focus:shadow-outline w-1/2" onClick={handlePrint}>
            Download Data
          </button>
        </div>
      </div>
    </>
  );
};
