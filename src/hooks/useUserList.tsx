import { useContextSelector } from 'use-context-selector';
import { ChatContext } from '../context/ChatContext';

export function useUserList() {
  const onlineUsers = useContextSelector(
    ChatContext,
    (chat) => chat.onlineUsers
  );

  const setNewOnlineUser = useContextSelector(
    ChatContext,
    (chat) => chat.setNewOnlineUser
  );

  return {
    onlineUsers,
    setNewOnlineUser,
  };
}
