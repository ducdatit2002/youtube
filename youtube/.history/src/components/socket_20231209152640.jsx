import React from 'react'
import { io } from 'socket.io-client'

const Socket = () => {

    let socket = io.createSocket
  return (
    <div>
      Socket
    </div>
  )
}

export default Socket
