import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '@components/Sidebar';
import ForgotPass from '@authComponents/forgot-pass';
import { getAllUsers } from '@/features/dashboard/services/users.services';
import { getAllThreads } from '@/features/dashboard/services/thread.services';
import { ThreadsType } from '@/types/threads.types';
import { Card } from '@chakra-ui/react';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Cookies from 'js-cookie';
import useUserStore from '@/hooks/userStore';
import { useNavigate } from 'react-router-dom';
// import { RegisterFormProps } from '@authTypes/AuthTypes/AuthTypes';

// let formProps: RegisterFormProps;

const HomeScreen: React.FC = () => {
  const { user, setUser } = useUserStore();

  const navigate = useNavigate();

  const [threads, setThreads] = useState<ThreadsType[]>([]);

  useEffect(() => {
    retrieveAllThreads();
  }, []);

  const retrieveAllThreads = async () => {
    const token = Cookies.get('token');
    console.log('token :', token);
    // getAllUsers(token);
    try {
      const threads = await getAllThreads(token);
      console.log('list all threads', threads);
      setThreads(threads);
    } catch (error) {
      console.log(error);
    }
  };

  const onLogout = () => {
    Cookies.remove('token');
    navigate('/login');
  };

  return (
    <div style={{ padding: 20 }}>
      {/* <ForgotPass />
      <Sidebar /> */}
      <p>Welcome back, {user?.username}</p>

      <Button onClick={onLogout} size="lg">
        Logout
      </Button>

      <div style={{ display: 'flex', flexDirection: 'column', rowGap: 30 }}>
        {threads.length > 0 &&
          threads.map((thread) => (
            <Card.Root width="50%">
              <Card.Body gap="2">
                <Avatar
                  src="https://picsum.photos/200/300"
                  name="Nue Camp"
                  size="lg"
                  shape="rounded"
                />
                <Card.Title mt="2">Nue Camp</Card.Title>
                <Card.Description>{thread.content}</Card.Description>
              </Card.Body>
              <Card.Footer justifyContent="flex-end">
                {/* <Button variant="outline">View</Button>
                <Button>Join</Button> */}
              </Card.Footer>
            </Card.Root>
          ))}
      </div>
    </div>
  );
};

export default HomeScreen;
