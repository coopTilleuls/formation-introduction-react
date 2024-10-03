import styles from './AddToWishlist.module.css';
import {useAtom} from 'jotai';
import {UserContext} from '../../../../contexts';

export const AddToWishlist = ({ className, id }) => {
    const [userStore, dispatch] = useAtom(UserContext);
    const {isConnected, wishlist} = userStore;

    const handleWishListClick = (e, id) => {
        e.preventDefault();
        dispatch({type: 'toggleInWishList', id})
    }

    return (
        <button
            className={`${styles.wishlist}  ${className}`}
            onClick={(e) => handleWishListClick(e, id)}
            disabled={!isConnected}
        >
            <span className={styles.icon}>❤</span>
            {wishlist.includes(id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        </button>
    );
}
