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
