import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Link to='login' className='link'>Login Page(Task 1)</Link><br /><hr />
      <Link to='video' className='link'>Video Player(Task 2)</Link><br /><hr />
      <Link to='date' className='link'>Date(Task 3)</Link><br /><hr />
    </div>
  )
}

export default Home
