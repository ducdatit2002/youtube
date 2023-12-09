import React from 'react'
import { io } from "socket.io-client";

const DemoSocket = () => {
    //đối tượng socket client
    let socket = io("ws://localhost:8080");

    socket.on("fe-connect")
  return (
    <div>
      Socket
    </div>
  )
}

export default DemoSocket
