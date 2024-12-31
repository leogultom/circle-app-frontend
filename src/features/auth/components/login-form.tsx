import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { fetchLogin } from '../services/auth-service';
import useUserStore from '@/hooks/userStore';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { COLOR_GRAY, COLOR_PRIMARY, COLOR_WHITE } from '@/utils/constants';
import { Box } from '@chakra-ui/react';

const loginSchema = z.object({
  username: z.string().min(6, 'Username must be at least 6 characters long'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });
  const navigate = useNavigate();

  const { setUser } = useUserStore();

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    fetchLogin(data)
      .then((res) => {
        console.log(res);
        if (res.token) {
          setUser(res.user);
          localStorage.setItem('user', JSON.stringify(res.user));
          // localStorage.setItem('token', res.token);
          Cookies.set('token', res.token);
          navigate('/');
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div style={{ width: '30%' }}>
      <img
        src="logo.png"
        alt="app-logo"
        width={80}
        style={{ marginBottom: 10 }}
      />
      <h1
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          // textAlign: 'center',
          color: 'white',
          marginBottom: 20,
        }}
      >
        Login to Circle
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          width: '100%',
        }}
      >
        <input
          {...register('username')}
          placeholder="Username"
          style={{
            padding: 10,
            backgroundColor: 'transparent',
            color: COLOR_WHITE,
            outline: 'none',
            border: `1px solid ${COLOR_GRAY}`,
            borderRadius: 5,
            caretColor: COLOR_WHITE,
          }}
        />
        {errors.username && (
          <p style={{ color: 'red', margin: 0 }}>{errors.username.message}</p>
        )}

        <input
          {...register('password')}
          placeholder="Password"
          type="password"
          style={{
            padding: 10,
            backgroundColor: 'transparent',
            color: 'black',
            outline: 'none',
            border: `1px solid ${COLOR_GRAY}`,
            borderRadius: 5,
            caretColor: COLOR_WHITE,
          }}
        />
        {errors.password && (
          <p style={{ color: 'red', margin: 0 }}>{errors.password.message}</p>
        )}

        <Box textAlign={'right'}>
          <Link to={'/forgot-password'} style={{ color: COLOR_WHITE }}>
            Forgot password?
          </Link>
        </Box>
        <button
          type="submit"
          style={{
            backgroundColor: COLOR_PRIMARY,
            padding: 10,
            color: 'white',
            fontWeight: 'bold',
            fontSize: 14,
            borderRadius: 5,
          }}
        >
          Login
        </button>
        <p style={{ color: COLOR_WHITE }}>
          Don't have an account yet?{' '}
          <a href="" style={{ color: COLOR_PRIMARY }}>
            Create account
          </a>
        </p>
      </form>
    </div>
  );
}
