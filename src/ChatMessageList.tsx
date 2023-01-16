import { faker } from '@faker-js/faker';
import { useMessageList } from './hooks/useMessageList';

export function ChatMessageList() {
  const { messages, setNewMessage } = useMessageList();

  return (
    <div className="chat__messagelist">
      <button
        className="button"
        onClick={() =>
          setNewMessage({
            author: faker.name.fullName(),
            content: faker.lorem.paragraph(),
          })
        }
      >
        Adicionar nova mensagem
      </button>
      {messages.map((message) => (
        <div key={message.id} className="chat__messagelist__item">
          <div className="chat__messagelist__item__content">
            <h3>{message.author}</h3>
            <p>{message.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
