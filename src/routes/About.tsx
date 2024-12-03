import { useUser } from '@/hooks/useUser';
import React from 'react';

const AboutScreen: React.FC = () => {
  const { user } = useUser();

  return (
    <div style={{ padding: 40 }}>
      <p>Halo, nama saya {user.name}. saya di halaman about</p>
    </div>
  );
};

export default AboutScreen;
