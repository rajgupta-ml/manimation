"use client"
import { Send } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"
import { IChat } from "./types"
import { Badge } from "../ui/badge"

interface ChatInterfaceProps {
  selectedScene: number | null
  isCollapsed: boolean
}

const ChatInterface = ({ selectedScene, isCollapsed }: ChatInterfaceProps) => {
  const [chat, setChat] = useState<IChat[]>([
    {
      userChat: {
        message: "Hello! Tell me about yourself.",
      },
      ai: {
        message: "Hi, I am an AI assistant here to help you. What can I do for you today?",
      },
    },
    {
      userChat: {
        message: "Can you explain the concept of quantum entanglement?",
      },
      ai: {
        message:
          "Quantum entanglement is a phenomenon where two or more particles become linked in such a way that they share the same quantum state, even when separated by vast distances.",
      },
    },
    {
      userChat: {
        message: "Can you explain the concept of quantum entanglement?",
      },
      ai: {
        message:
          "Quantum entanglement is a phenomenon where two or more particles become linked in such a way that they share the same quantum state, even when separated by vast distances.",
      },
    },
    {
      userChat: {
        message: "Can you explain the concept of quantum entanglement?",
      },
      ai: {
        message:
          "Quantum entanglement is a phenomenon where two or more particles become linked in such a way that they share the same quantum state, even when separated by vast distances.",
      },
    },
    {
      userChat: {
        message: "Can you explain the concept of quantum entanglement?",
      },
      ai: {
        message:
          "Quantum entanglement is a phenomenon where two or more particles become linked in such a way that they share the same quantum state, even when separated by vast distances.",
      },
    },
    {
      userChat: {
        message: "Can you explain the concept of quantum entanglement?",
      },
      ai: {
        message:
          "Quantum entanglement is a phenomenon where two or more particles become linked in such a way that they share the same quantum state, even when separated by vast distances.",
      },
    },
    {
      userChat: {
        message: "Can you explain the concept of quantum entanglement?",
      },
      ai: {
        message:
          "Quantum entanglement is a phenomenon where two or more particles become linked in such a way that they share the same quantum state, even when separated by vast distances.",
      },
    },

  ])

  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newChat: IChat = {
        userChat: { message: inputValue },
        ai: { message: `Response to: ${inputValue}` },
      }
      setChat([...chat, newChat])
      setInputValue("")
    }
  }


  return (
    <div className="flex flex-col h-full ">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">Chat Interface</h3>
          {selectedScene && <Badge variant="secondary">@Scene {selectedScene} selected</Badge>}
        </div>
        {/* <Button variant="ghost" size="sm" onClick={onToggleCollapse}> */}
          {/* <ChevronLeft className="w-4 h-4" /> */}
        {/* </Button> */}
      </div>

      <div className="flex-1 flex flex-col p-4 overflow-hidden">
        <div className="flex-1 overflow-y-auto no-scrollbar pr-2 mb-4 space-y-4">
          {chat.map((chatPair: IChat, index: number) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-end">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[80%] break-words">
                  {chatPair.userChat.message}
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-muted p-3 rounded-lg max-w-[80%] break-words">{chatPair.ai.message}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="border rounded-lg p-3 bg-muted/30">
          <div className="flex items-end gap-2 bg-muted/40  rounded-lg p-2">
            <textarea
              placeholder={selectedScene ? `Prompt for Scene ${selectedScene}...` : "Type your message..."}
              className="flex-1 resize-none bg-transparent outline-none"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSendMessage()
                }
              }}
            />
            <Button size="sm" onClick={handleSendMessage} disabled={!inputValue.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ChatInterface