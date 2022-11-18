import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const LOCAL_STORAGE_KEY = 'user';
const persistedLogin = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

export function AuthProvider({ children }) {
  const [user, setUser] = useState(persistedLogin);

  function signIn(userData) {
    setUser(userData);
    localStorage.setItem(LOCAL_STORAGE_KEY, userData);
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
