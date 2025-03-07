import { useMutation } from '@tanstack/react-query'
import { ChatBoxService } from '../api/services'

export const useChatWithAI = () => {
  return useMutation(ChatBoxService.chatWithAI)
}
