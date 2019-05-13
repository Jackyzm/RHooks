import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = props => {
  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(1);
  const [form, setForm] = useState({ user: 'admin', pwd: '111111' });
  const { user, pwd } = form;
  const count = useSelector(state => state.example.count);
  return (
    <div>
      <p>Home</p>
      <p>{count}</p>
      <p>You clicked {count} times</p>
      {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
      <p>
        {user} | {pwd}
      </p>
      <button
        onClick={() => {
          // dispatch({ type: 'increment' });
          setForm({ ...form, user: 'user' });
        }}
      >
        Click me
      </button>
      <Link to="/">to Example</Link>
    </div>
  );
};

export default Home;
