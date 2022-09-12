import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { API } from "../../config/API";
import Swal from "sweetalert2";

export const Frend = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const handleEdit = (id) => {
    navigate(`/editfriend/${id}`);
  };

  const fetchData = async () => {
    try {
      const response = await API.get("/getfriends");
      console.log(response.data.data.datas);
      setData(response.data.data.datas);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFriend = async (id) => {
    try {
      // API delete
      const response = await API.delete("/deletefriend/" + id);

      // response
      if (response.data.data.status === "Success") {
        Swal.fire(response.data.status, response.data.message, "success");
        // getData();
        // setId(null);
      } else {
        Swal.fire(response.data.status, response.data.message, "error");
      }
      fetchData();
      navigate("/datafriends");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete this data?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */

      if (result.isConfirmed) {
        deleteFriend(id);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, [navigate]);
  return (
    <div className="w-screen">
      <Navbar />
      <div className="flex justify-between items-center px-20">
        <div className="text-2xl font-bold">Friends data</div>
        <Link to="/addfriend">
          <button
            // onClick={() => handleApprove(item.id)}
            className="border px-2 hover:bg-slate-200 text-2xl font-bold py-1 rounded-sm focus:shadow-outline"
            type="button"
          >
            Add Friend
          </button>
        </Link>
      </div>
      <div className="mx-20 my-5">
        <table className="w-full table-auto">
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

              <th scope="col" className="px-6 py-3 border-2 border-black">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((item, index) => (
              <tr className="border bg-stone-100">
                <td className="px-6 py-2 border-2 border-black">{item.id}</td>
                <td className="px-6 py-2 border-2 border-black">{item.name}</td>
                <td className="px-6 py-2 border-2 border-black">{item.gender}</td>
                <td className="px-6 py-2 border-2 border-black">{item.age}</td>
                <td className=" flex-auto items-center justify-center space-x-2 py-2 border-2 border-black">
                  <button
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                    className="bg-red-500 text-white ml-4 font-bold hover:bg-red-700 py-1 w-24 rounded-md focus:outline-none focus:shadow-outline"
                  >
                    Delete
                  </button>
                  <button onClick={() => handleEdit(item.id)} className="bg-green-400 hover:bg-green-700 text-white font-bold py-1 w-24 rounded-md focus:outline-none focus:shadow-outline" type="button">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
