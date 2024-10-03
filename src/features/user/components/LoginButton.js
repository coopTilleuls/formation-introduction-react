import {useAtom} from 'jotai';
import {UserContext} from '../../../contexts';

export const LoginButton = () => {
  const [userStore, dispatch] = useAtom(UserContext);

  if (userStore.isConnected) {
    return <button onClick={() => dispatch({type: 'logout'})}>Se déconnecter</button>
  }

  return <button onClick={() => dispatch({type: 'login'})}>Se connecter</button>
}
