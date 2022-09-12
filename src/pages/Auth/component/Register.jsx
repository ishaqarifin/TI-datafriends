import React from "react";

export default function Register({ isRegister }) {
  return (
    <div className="w-full max-w-xs">
      <form
        className="dark:bg-stone-900 shadow-lg rounded px-8 pt-6 pb-8"
        // onSubmit={(e) => handleSubmit.mutate(e)}
      >
        <span className="text-2xl font-bold">Register</span>
        {/* {message && message} */}
        <div className="my-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="name"
            placeholder="Name"
            name="name"
            // value={email}
            // onChange={handleChange}
          />
        </div>
        <div className="my-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            name="email"
            // value={email}
            // onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="password"
            // value={password}
            type="password"
            placeholder="Password"
            // onChange={handleChange}
          />
        </div>
        <div className="flex-row items-center justify-between">
          {/* <Link to="products"> */}
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
            Sign In
          </button>
          {/* </Link> */}
          <p className="text-center mt-4">
            Don't have an account? Klik{" "}
            <span onClick={isRegister} className="font-bold cursor-pointer">
              Here
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
