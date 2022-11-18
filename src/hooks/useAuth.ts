import { useContext } from 'react';
import { AuthContext } from '../provider/auth';

export default function useAuth() {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('useAuth must be used insade a AuthContext Provider');
  }

  return authContext;
}
