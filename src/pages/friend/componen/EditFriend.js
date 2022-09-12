import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { API } from "../../../config/API";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const EditFriend = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formEdit, setFormEdit] = useState({
    name: "",
    gender: "",
    age: "",
  });

  const handleChangeEdit = (e) => {
    setFormEdit({
      ...formEdit,
      [e.target.name]: e.target.value,
    });
  };

  const fetchfriend = async () => {
    try {
      const res = await API.get("/getfriend/" + id);
      // console.log(res.data.data.data);
      setFormEdit({
        ...formEdit,
        name: res.data.data.data.name,
        gender: res.data.data.data.gender,
        age: res.data.data.data.age,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (e) => {
    try {
      e.preventDefault();

      // config
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // data
      const body = JSON.stringify(formEdit);

      // API register
      const response = await API.patch("/updatefriend/" + id, body, config);

      // response
      if (response.data.data.status === "Success") {
        Swal.fire(response.data.status, response.data.message, "success");
      } else {
        Swal.fire(response.data.status, response.data.message, "success");
      }
      navigate("/datafriends");
    } catch (error) {
      console.log(error);
    }
  };

  console.log({ formEdit });
  useEffect(() => {
    fetchfriend();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="w-80">
          <div className="font-bold text-orange-900">Edit Data Friend</div>
          <form onSubmit={handleEdit}>
            <div className="">
              <div className="mb-10 my-5">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formEdit.name}
                  required
                  onChange={handleChangeEdit}
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                <select name="gender" value={formEdit.gender} onChange={handleChangeEdit} className="shadow appearance-none border rounded w-full py-2 my-4 px-3 leading-tight focus:outline-none focus:shadow-outline">
                  <option value="asd" hidden selected>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <input type="number" name="age" placeholder="Age" value={formEdit.age} onChange={handleChangeEdit} className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="flex items-center justify-center">
                <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 font-semibold font-md rounded focus:outline-none focus:shadow-outline w-1/2" type="submit">
                  Update Friend
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
