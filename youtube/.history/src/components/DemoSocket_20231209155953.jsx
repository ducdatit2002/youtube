import React,{ useState }  from 'react'
import { io } from "socket.io-client";

const DemoSocket = () => {
    //đối tượng socket client
    const [data, setData] = useState("");
    let socket = io("ws://localhost:8080");

    socket.on("fe-connect", (data) => {
      setData()
    })
  return (
    <div className='text-white'>
      Socket
    </div>
  )
}

export default DemoSocket
