import { useUser } from '@/hooks/useUser';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomeScreen: React.FC = () => {
  const { user, setUser } = useUser();
  const [name, setName] = useState('');

  return (
    <div style={{ padding: 20 }}>
      <p>Halo, nama saya {user.name}</p>
      <input
        style={{
          marginTop: 10,
          marginBottom: 10,
          border: '1px solid black',
          display: 'block',
        }}
        type="text"
        value={name}
        onChange={(e) => {
          console.log(e.target.value);
          setName(e.target.value);
        }}
      />
      <button
        style={{ display: 'block' }}
        onClick={() => setUser({ name: name, age: 20 })}
      >
        Ganti namanya
      </button>
      <Link to={'/about'}>About</Link>
    </div>
  );
};

export default HomeScreen;
