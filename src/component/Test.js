import axios from 'axios';
import React, { useState } from 'react'

export default function Test() {

  const options = {
    method: 'POST',
    url: 'http://34.101.70.83:5200/mobile/user/v1/auth/signin',
    headers: {
      'Content-Type': 'application/json', 
      'X-API-KEY': 'l!nt@h-B@!k'
    },
    data: {username: 'bestada', password: '12345678'}
  };
  
  // useState
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  
  return (
    <div>Test</div>
  )
}
