// src/context/FavoritesContext.jsx
import React, { createContext, useState, useContext } from 'react';

// 1) Create the context
const FavoritesContext = createContext();

// 2) Custom hook to use the context easily
export function useFavorites() {
    return useContext(FavoritesContext);
}

// 3) Provider component
export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    // Check if a hotel is already in favorites
    const isFavorited = (hotel) =>
        favorites.some((fav) => fav.name === hotel.name);

    const toggleFavorite = (hotel) => {
        // If hotel is already favorited, remove it. Otherwise add it.
        setFavorites((prev) => {
            if (isFavorited(hotel)) {
                return prev.filter((fav) => fav.name !== hotel.name);
            } else {
                return [...prev, hotel];
            }
        });
    };

    const value = {
        favorites,
        toggleFavorite,
        isFavorited,
    };

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
}
