import { RegisterForm } from '@/features/auth/components/register-form';

function RegisterPage() {
  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <RegisterForm />
    </main>
  );
}

export default RegisterPage;
