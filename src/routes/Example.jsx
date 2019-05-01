import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useActions } from 'react-redux';
import { increment } from '@/actions/example';

const Example = () => {
  // console.log(props);
  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(1);
  const [form, setForm] = useState({ user: 'admin', pwd: '111111' });
  const { user, pwd } = form;

  const count = useSelector(state => state.example.count);

  const incrementAction = useActions(increment); // success
  // const { incrementAction } = useActions({ incrementAction: increment }); // success
  // const [incrementAction] = useActions([increment]); // success

  return (
    <div>
      <p>Example</p>
      <p>{count}</p>
      <p>You clicked {count} times</p>
      <button onClick={() => incrementAction(form)}>Click me</button>
      <p>
        {user} | {pwd}
      </p>
      <button
        onClick={() => {
          setForm({ ...form, user: 'user' });
        }}
      >
        Click me
      </button>
      <Link to="/home">to Home</Link>
    </div>
  );
};

export default Example;
