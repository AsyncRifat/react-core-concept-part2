import { use } from 'react';

export default function Users({fetchUsers}) {
  const users = use(fetchUsers);
  console.log(users);
  return (
    <div
      style={{
        border: '1.5px solid gold',
        marginTop: '10px',
        borderRadius: '15px',
        padding: '8px',
      }}
    >
      <p>Users:{users.length}</p>
    </div>
  );
}
