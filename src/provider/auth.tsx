import { createContext, useState } from 'react';

interface IAuthContext {
  user: UserData | null;
  signIn: (userData: UserData) => void;
  signOut: () => void;
}

interface Props {
  children: React.ReactNode;
}

interface UserData {
  username: string;
  userId: number;
  token: string;
}

export const AuthContext = createContext<IAuthContext | null>(null);

const LOCAL_STORAGE_KEY = 'user_ngcash';
const loginDataExists = localStorage.getItem(LOCAL_STORAGE_KEY);
let persistedLogin: null = null;
if (loginDataExists) {
  persistedLogin = JSON.parse(loginDataExists);
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState(persistedLogin);

  function signIn(userData: any) {
    setUser(userData);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userData));
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      { children }
    </AuthContext.Provider>
  );
}
