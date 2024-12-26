// src/components/FavoritesPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import {useFavorites} from "../../context/FavoritesContext"; // We'll define CSS below

function FavoritesPage() {
    const navigate = useNavigate();
    const { favorites, toggleFavorite, isFavorited } = useFavorites();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="favorites-page">

            {/* Header */}
            <div className="favorites-header">
                <button className="back-button" onClick={handleBack}>
                    &larr;
                </button>
                <h1>Избранное</h1>
            </div>

            {/* If no favorites, show a placeholder */}
            {favorites.length === 0 ? (
                <div className="no-favorites">
                    <p>У вас пока нет избранных отелей.</p>
                </div>
            ) : (
                <div className="favorites-list">
                    {favorites.map((hotel, idx) => {
                        const favorited = isFavorited(hotel);

                        return (
                            <div
                                className="favorite-card"
                                key={idx}
                                onClick={() =>
                                    navigate("/hotel-details", {
                                        state: { hotelData: hotel },
                                    })
                                }
                            >
                                {/* Image / Heart icon */}
                                <div className="image-container">
                                    <img
                                        src={hotel.img}
                                        alt={hotel.name}
                                        className="favorite-image"
                                    />
                                    <button
                                        className="heart-icon"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleFavorite(hotel);
                                        }}
                                    >
                                        {favorited ? "❤️" : "🤍"}
                                    </button>
                                </div>

                                {/* Hotel info */}
                                <div className="hotel-info">
                                    <h3 className="hotel-name">{hotel.name}</h3>
                                    <p className="hotel-location">Мекка, Саудовская Аравия</p>
                                    <p className="hotel-rating">
                                        ⭐️⭐️⭐️⭐️⭐️ ({hotel.revCount} отзывов)
                                    </p>
                                    <p className="distance">700 м. от мечети Аль-Харам</p>
                                </div>

                                {/* Price row */}
                                <div className="price-row">
                                    <p className="dates">
                                        1 нояб–16 нояб, 15 ночей <br />
                                        перелет включен
                                    </p>
                                    <p className="price">450 000 ₸</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default FavoritesPage;
