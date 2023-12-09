import React,{ useState }  from 'react'
import { io } from "socket.io-client";

const DemoSocket = () => {
    //đối tượng socket client

    let socket = io("ws://localhost:8080");

    socket.on("fe-connect", (data) => {
      //setData(data + "Đã kết nối");
      //document.querySelector("#noiDung").innerHTML += data + "Đã kết nối </br>";
    })
    socket.on("fe-number", (data) => {})
  return (
    <div className='text-white'>
      <h1  id="noiDung">

      </h1>
      <button className="btn btn-success"
        onClick={() => {
          socket.emit("fe-send", "Đã kết nối");
        }}
      >Click</button>
    </div>
  )
}

export default DemoSocket
