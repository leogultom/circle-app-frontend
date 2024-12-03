import React, { createContext, useState } from 'react';

type UserType = {
  name: string;
  age: number;
};

export type UserContextType = {
  user: UserType;
  setUser: (user: UserType) => void;
};

export const UserContext = createContext<UserContextType>();

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType>({ name: 'Leo G', age: 20 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
