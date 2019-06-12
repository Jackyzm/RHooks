import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '@/actions/example';

const Example = () => {
  // console.log(props);
  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(1);
  const [form, setForm] = useState({ user: 'admin', pwd: '111111' });
  
  const { user, pwd } = form;

  const count = useSelector(state => state.example.count);

  const dispatch = useDispatch();

  const incrementAction = useCallback(() => dispatch(increment(form)));

  return (
    <div>
      <p>Example</p>
      <p>{count}</p>
      <p>You clicked {count} times</p>
      <button onClick={() => dispatch(increment(form))}>Click me</button>
      <br />
      <button onClick={() => increment(form)(dispatch)}>Click me</button>
      <br />
      <button onClick={() => incrementAction()}>Click me</button>
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
