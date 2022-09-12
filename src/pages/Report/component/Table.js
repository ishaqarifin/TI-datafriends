import React from "react";

export const Table = ({ data }) => {
  console.log({ data });
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
            <tr key={index} className="border-b bg-stone-100">
              <td className="px-6 py-2 border-2 border-black">{index + 1}</td>
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
