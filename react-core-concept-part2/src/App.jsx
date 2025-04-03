import reactLogo from './assets/react.svg';
import './App.css';
import Counter from './Counter';
import Batsman from './Batsman';
import Users from './Users';
import { Suspense } from 'react';
import Friends from './Friends';
import Posts from './Posts';

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(
//   res => res.json()
// );

// const fetchFriends = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// };

const posts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};

function App() {
  // const friendsPromise = fetchFriends();
  const published = posts();

  function handleClick() {
    alert('i am clicker');
  }
  const handleClick3 = () => {
    alert('click3');
  };

  const handleClick5 = num => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2 style={{ color: 'aqua' }}>React part Two</h2>

      <div className="gap">
        <button onClick={handleClick}>No.1</button>

        <button
          onClick={function handleClick2() {
            alert('click2');
          }}
        >
          No.2
        </button>

        <button onClick={handleClick3}>No.3</button>

        <button
          onClick={() => {
            alert('click4');
          }}
        >
          No.4
        </button>

        <button onClick={() => handleClick5(5)}>No.5</button>
      </div>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      {/* <Counter></Counter>
      <Batsman></Batsman> */}

      <Suspense fallback={<p>Post coming</p>}>
        <Posts published={published}></Posts>
      </Suspense>

      {/* <Suspense fallback={<p>Writing massage...</p>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}
    </>
  );
}

export default App;
