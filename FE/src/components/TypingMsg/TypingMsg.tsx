import React from 'react'
import './index.css'

const TypingMsg = () => {
  return (
    <div className="chat-bubble">
      <div className="typing">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
    </div>
  )
}

export default TypingMsg
