import { ChatMessageList } from './ChatMessageList';
import { ChatUserList } from './ChatUserList';

export function Chat() {
  return (
    <div className="chat">
      <ChatUserList />
      <ChatMessageList />
    </div>
  );
}
