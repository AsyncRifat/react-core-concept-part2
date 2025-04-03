import { use } from 'react';
import './App.css';
import Friend from './Friend';

export default function Friends({ friendsPromise }) {
  const friends = use(friendsPromise);

  return (
    <div className="universe-border">
      <h3>Friends: {friends.length}</h3>
      {
        friends.map(friend=><Friend key={friend.id} friend={friend}></Friend>)
      }
    </div>
  );
}
