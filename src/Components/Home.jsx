import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Home() {
  const [phone, setPhone] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomPhone = data[randomIndex].phone;
        setPhone(randomPhone);
      })
      .catch(err => console.log(err));
  }, []);
  const [show, setShow] = useState(false)
  const handleTestClick = () => {
    setShow(true)
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomPhone = data[randomIndex].phone;
        setPhone(randomPhone);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className="body bg-dark">
        <div>
          <h1 className='text-light'>create by webcoder</h1>
          <div className="div">
            <h4 className='text-light m-3'>{show?phone?phone:'hozircha bazadan ma`lumot topilmadi':'Click random number'}</h4>
            <button className='btn btn-outline-danger' onClick={handleTestClick}>Random Number</button>
            <Link to="/admin">boshqaruv paneliga o'tish</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
