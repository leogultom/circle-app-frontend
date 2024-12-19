import { LoginForm } from '@/features/auth/components/login-form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { COLOR_BLACK } from '@/utils/constants';

function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('token');

    if (token) {
      navigate('/');
    }
  }, []);

  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: COLOR_BLACK,
      }}
    >
      <LoginForm />
    </main>
  );
}

export default LoginPage;
