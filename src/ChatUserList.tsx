import { faker } from '@faker-js/faker';
import { useUserList } from './hooks/useUserList';

export function ChatUserList() {
  const { onlineUsers, setNewOnlineUser } = useUserList();

  return (
    <div className="chat__userlist">
      <button
        className="button"
        onClick={() => setNewOnlineUser(faker.name.fullName())}
      >
        Adicionar novo usuário
      </button>
      <ul className="chat__userlist__list">
        {onlineUsers.map((user) => (
          <li key={user.id} className="chat__userlist__user">
            <h3>{user.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
