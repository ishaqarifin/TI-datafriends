import React, { useEffect, useState } from "react";
import * as chartJS from "chart.js";
import { Bar } from "react-chartjs-2";
import { API } from "../../../config/API";

chartJS.Chart.register(chartJS.ArcElement, chartJS.BarElement, chartJS.CategoryScale, chartJS.Legend, chartJS.LinearScale, chartJS.Title, chartJS.Tooltip);
export const Chart = () => {
  const [friend, setFriend] = useState([]);
  const getFriend = async () => {
    try {
      const response = await API.get("/getfriends");
      setFriend(response.data.data.datas);
      // if (response.data.status === "Success") {
      // }
    } catch (error) {
      console.log(error);
    }
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Friend presentase by gender and age",
      },
    },
  };

  console.log(friend);

  let femaleUnder19 = [];
  let maleUnder19 = [];
  let femaleOver19 = [];
  let maleOver19 = [];

  friend.map((item) => {
    if (item.gender === "Female" && item.age <= 19) {
      femaleUnder19.push(femaleUnder19.length + 1);
    }
    if (item.gender === "Male" && item.age <= 19) {
      maleUnder19.push(maleUnder19.length + 1);
    }
    if (item.gender === "Female" && item.age > 19) {
      femaleOver19.push(femaleOver19.length + 1);
    }
    if (item.gender === "Male" && item.age > 19) {
      maleOver19.push(maleOver19.length + 1);
    }
  });

  const data = {
    labels: ["Female under 19 years old", "Male under 19 years old", "Female over 19 years old", "Male over 19 years old"],
    datasets: [
      {
        data: [femaleUnder19.length, maleUnder19.length, femaleOver19.length, maleOver19.length],
        backgroundColor: ["#FFC4DD", "#72FFFF", "#F73D93", "#0096FF"],
      },
    ],
  };

  useEffect(() => {
    getFriend();
  }, []);
  return <Bar options={options} data={data} className="" />;
};
