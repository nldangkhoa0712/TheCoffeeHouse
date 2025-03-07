import { Send } from '@mui/icons-material'
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useChatWithAI } from '../../hooks/chatbox.api'
import { useDebounce } from '../../utils/useDebounce'
import { ChatBoxModel } from '../../api/services/chatbox.service'
import { Link } from 'react-router-dom'
import TypingMsg from '../../components/TypingMsg/TypingMsg'

interface MessageModel {
  id: number
  text: any
  sender: string
}

const ChatBox = () => {
  const [messages, setMessages] = useState<MessageModel[]>([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'bot' },
    { id: 2, text: 'Hi! I have a question.', sender: 'user' },
  ])
  const [newMessage, setNewMessage] = useState('')
  const [botMessage, setBotMessage] = useState<ChatBoxModel[]>([])
  const { mutateAsync: mutateChatAI, isLoading } = useChatWithAI()
  const chatEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: newMessage, sender: 'user' },
      ])
      const messageBot = await mutateChatAI(newMessage)
      setNewMessage('')
      setBotMessage(messageBot)
    }
  }

  useEffect(() => {
    if (botMessage) {
      const messageBot = botMessage.map((item: ChatBoxModel) => {
        return {
          id: messages.length + 1,
          text: (
            <>
              {item.message}{' '}
              {item.isRelated && (
                <Link
                  style={{ color: 'blue', textDecoration: 'underline' }}
                  to="/"
                >
                  {item.productName}
                </Link>
              )}
            </>
          ),
          sender: 'bot',
        }
      })
      setMessages([...messages, ...messageBot])
    }
  }, [botMessage])

  return (
    <div className="mx-auto flex h-screen max-w-2xl flex-col p-4">
      {/* Chat header */}
      <div className="bg-primary-foreground border-b p-4">
        <h1 className="text-xl font-bold">Chat With AI</h1>
      </div>

      {/* Messages container */}
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isLoading && <TypingMsg />}
        <div ref={chatEndRef}></div>
      </div>

      {/* Message input */}
      <form
        onSubmit={handleSubmit}
        className="bg-primary-foreground border-t p-4"
      >
        <div className="flex space-x-2">
          <input
            disabled={isLoading}
            type="text"
            value={isLoading ? '' : newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-lg border p-2 focus:border-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-lg bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600"
          >
            <Send />
          </button>
        </div>
      </form>
    </div>
  )
}

export default ChatBox
