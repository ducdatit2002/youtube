import React,{ useState }  from 'react'
import { io } from "socket.io-client";

const DemoSocket = () => {
    //đối tượng socket client

    let socket = io("ws://localhost:8080");

    socket.on("fe-connect", (data) => {
      //setData(data + "Đã kết nối");
      document.querySelector("#noiDung").innerHTML += data + "Đã kết nố </br>";
    })
  return (
    <div className='text-white' id="noiDung">
      {data}
    </div>
  )
}

export default DemoSocket
