import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { API } from "../../../config/API";
import { useNavigate } from "react-router-dom";

export const AddFriend = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    gender: "",
    age: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const body = JSON.stringify(form);
      const response = await API.post("/addfriend", body, config);
      console.log(response);
      navigate("/datafriends");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="w-80">
          <div className="font-bold text-orange-900">Add Friend</div>
          <form onSubmit={handleSubmit}>
            <div className="">
              <div className="mb-10 my-5">
                <input type="text" placeholder="Name" name="name" value={form.name} required onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                <select name="gender" value={form.gender} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 my-4 px-3 leading-tight focus:outline-none focus:shadow-outline">
                  <option value="asd" hidden selected>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <input type="number" name="age" placeholder="Age" value={form.age} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="flex items-center justify-center">
                <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 font-semibold font-md rounded focus:outline-none focus:shadow-outline w-1/2" type="submit">
                  Add Product
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
