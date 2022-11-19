import { Logout } from '@mui/icons-material';
import { Header, IMG } from './styleds';
import logo from '../../assets/ngcash-logo.png';
import useAuth from '../../hooks/useAuth';

export default function HeaderPages() {
  const { signOut } = useAuth();

  return (
    <Header>
        <IMG src={logo} alt='logo'/>
        <Logout sx={{ fontSize: 40, color: 'white' }} onClick={signOut}/>
    </Header>
  );
}
