import { useContextSelector } from 'use-context-selector';
import { ChatContext } from '../context/ChatContext';

export function useMessageList() {
  const messages = useContextSelector(ChatContext, (chat) => chat.messages);

  const setNewMessage = useContextSelector(
    ChatContext,
    (chat) => chat.setNewMessage
  );

  return {
    messages,
    setNewMessage,
  };
}
