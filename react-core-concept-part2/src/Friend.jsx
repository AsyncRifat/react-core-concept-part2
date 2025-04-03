export default function Friend({ friend }) {

  const { name, email, phone, username} = friend
  console.log(friend);

  return (
    <div className="universe-border">
      <h3>Name:{name}</h3>
      <p>Username: {username}</p>
      <p>Mail: {email}</p>
      <p>Phone: {phone}</p>
      <p>company: {friend.company?.name}</p>
    </div>
  );
}
