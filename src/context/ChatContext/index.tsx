import { ReactNode, useCallback, useState } from 'react';
import { createContext } from 'use-context-selector';
import { v4 as uuid } from 'uuid';

interface IMessage {
  id: string;
  author: string;
  content: string;
}

interface IUser {
  id: string;
  name: string;
}

interface IChatContext {
  messages: IMessage[];
  onlineUsers: IUser[];
  setNewMessage(message: Omit<IMessage, 'id'>): void;
  setNewOnlineUser(name: string): void;
}

interface IChatProvider {
  children: ReactNode;
}

export const ChatContext = createContext({} as IChatContext);

export function ChatProvider({ children }: IChatProvider) {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<IUser[]>([]);

  const setNewMessage = useCallback(
    ({ author, content }: Omit<IMessage, 'id'>): void => {
      const id = uuid();

      const message: IMessage = {
        id,
        author,
        content,
      };

      setMessages((state) => [...state, message]);
    },
    []
  );

  const setNewOnlineUser = useCallback((name: string): void => {
    const id = uuid();

    const user: IUser = {
      id,
      name,
    };

    setOnlineUsers((state) => [...state, user]);
  }, []);

  return (
    <ChatContext.Provider
      value={{ messages, onlineUsers, setNewMessage, setNewOnlineUser }}
    >
      {children}
    </ChatContext.Provider>
  );
}
