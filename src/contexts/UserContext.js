import {atomWithReducer, useAtomCallback} from 'jotai/utils';


const userReducer = (state, action) => {
    switch (action.type) {
        case 'login': {
            return {
                ...state,
                isConnected: true,
                user: {firstName: 'Grégory', lastName: 'Copin'},
            };
        }
        case 'logout': {
            return {...state, user: null, isConnected: false,};
        }
        case 'toggleInWishList': {
            if (state.wishlist.includes(action.id)) {
                return {
                    ...state,
                    wishlist: state.wishlist.filter(item => item !== action.id)
                }
            }
            return {...state, wishlist: [...state.wishlist, action.id]}
        }
        default:
            throw new Error('Unknown action');
    }
}

export const UserContext = atomWithReducer(
  {user: null, isConnected: false, wishlist: []},
  userReducer
);

/**
import {createContext, useContext, useState} from 'react';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    const toggleInWishlist = (value) => {
        setWishlist(
            wishlist.includes(value) ?
                wishlist.filter(item => item !== value) :
                [...wishlist, value]
        )
    }

    return (
        <UserContext.Provider value={{toggleInWishlist, wishlist}}>
            {children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => useContext(UserContext);
*/
