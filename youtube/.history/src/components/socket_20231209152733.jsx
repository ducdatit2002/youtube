import React from 'react'
import { io } from 'socket.io-client'

const Socket = () => {
    //đối tượng socket client
    let socket = io("localhost:8080");
  return (
    <div>
      Socket
    </div>
  )
}

export default Socket
