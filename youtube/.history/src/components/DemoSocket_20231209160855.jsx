import React,{ useState }  from 'react'
import { io } from "socket.io-client";

const DemoSocket = () => {
    //đối tượng socket client

    let socket = io("ws://localhost:8080");

    socket.on("fe-connect", (data) => {
      //setData(data + "Đã kết nối");
      document.querySelector("#noiDung").innerHTML += data + "Đã kết nối </br>";
    })
  return (
    <div className='text-white'>
      <h1  id="noiDung"></h1>
    </div>
  )
}

export default DemoSocket
