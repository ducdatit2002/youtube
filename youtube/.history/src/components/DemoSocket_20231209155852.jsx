import React from 'react'
import { io } from "socket.io-client";

const DemoSocket = () => {
    //đối tượng socket client
    let socket = io("ws://localhost:8080");

    socket.on("fe-connect", (data) => {

    })
  return (
    <div className='text-white'>
      Socket
    </div>
  )
}

export default DemoSocket
