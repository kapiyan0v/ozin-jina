import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { hotels } from '../../shared/hotels';
import './style.css';
import {useFavorites} from "../../context/FavoritesContext"; // We'll define minimal CSS below

// A generic dropdown filter component (for demonstration)
function FilterDropdown({ label, options = [] }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('');

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
        // In a real app, you'd trigger some "setFilter" callback here
    };

    return (
        <div className="filter-dropdown">
            <button className="dropdown-trigger" onClick={toggleDropdown}>
                {label}
                {selected && `: ${selected}`}
                <span className="arrow">▾</span>
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {options.map((opt) => (
                        <li key={opt} onClick={() => handleSelect(opt)}>
                            {opt}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

function ComfortListPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { favorites, toggleFavorite, isFavorited } = useFavorites();

    const [price, setPrice] = useState()

    // Extract filters from location.state (passed from previous page),
    // or default to placeholders
    const {
        cityFrom = 'Алматы',
        cityTo = 'Джидда',
        startDate = '1 нояб.',
        endDate = '16 нояб.',
        nights = 15,
        travelers = 3,
    } = location.state || {};

    // A simple back button handler
    const handleBack = () => {
        navigate(-1);
    };

    // Example filter toggles or placeholders for actual logic
    const [plusMinusDays, setPlusMinusDays] = useState(false);

    // We’ll keep the hotel list logic super simple—just a direct map over `hotels`.
    // Real filters (price range, rating, etc.) would be applied here.

    return (
        <div className="comfort-list-page">
            {/* Header row */}
            <div className="list-header">
                <button className="back-button" onClick={handleBack}>
                    &larr;
                </button>
                <div className="header-info">
                    <h2>
                        {cityFrom} – {cityTo}
                    </h2>
                    <p>
                        {startDate} – {endDate}, {nights} ночей, {travelers} паломника
                    </p>
                </div>
            </div>

            {/* FILTER CHIPS ROW */}
            <div className="filters-row">
                {/* 1) Вылет ± 3 дня */}
                <button
                    className={`chip-button ${plusMinusDays ? 'active' : ''}`}
                    onClick={() => setPlusMinusDays(!plusMinusDays)}
                >
                    Вылет ± 3 дня
                </button>

                {/* 2) Популярные */}
                <FilterDropdown
                    label="Популярные"
                    options={['По убыванию цены', 'По возрастанию цены', 'По рейтингу']}
                />

                {/* 3) Цена */}
                <FilterDropdown
                    label="Цена"
                    options={['До 1000$', '1000$–2000$', '2000$+']}
                />

                {/* 4) Питание */}
                <FilterDropdown
                    label="Питание"
                    options={['Завтрак', 'Полупансион', 'Все включено']}
                />

                {/* 5) Рейтинг отеля */}
                <FilterDropdown
                    label="Рейтинг отеля"
                    options={['3 звезды', '4 звезды', '5 звезд']}
                />

                {/* 6) Класс отеля */}
                <FilterDropdown
                    label="Класс отеля"
                    options={['Стандарт', 'Люкс', 'Супер-люкс']}
                />

                {/* 7) Удобства отеля */}
                <FilterDropdown
                    label="Удобства отеля"
                    options={['WiFi', 'Бассейн', 'Парковка']}
                />

                {/* 8) Удобства для детей */}
                <FilterDropdown
                    label="Удобства для детей"
                    options={['Игровая площадка', 'Детская анимация', 'Бассейн']}
                />
            </div>

            {/* HOTEL LIST */}
            <div className="hotel-list">
                {hotels.map((hotel, idx) => {
                    const favorited = isFavorited(hotel);

                    return (
                        <div
                            className="hotel-card"
                            key={idx}
                            // If you want the entire card to navigate except the heart,
                            // move the onClick to an inner button or something.
                            onClick={() =>
                                navigate('/tour-info', {
                                    state: {
                                        hotelData: hotel,
                                        cityFrom,
                                        cityTo,
                                        startDate,
                                        endDate,
                                        nights,
                                        travelers,
                                    },
                                })
                            }
                        >
                            <div className="hotel-image-container">
                                <img src={hotel.img} alt={hotel.name} className="hotel-image" />

                                {/* Heart icon: stop event propagation so it doesn't trigger navigate */}
                                <button
                                    className="favorite-icon"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleFavorite(hotel);
                                    }}
                                >
                                    {favorited ? '❤️' : '🤍'}
                                </button>
                            </div>
                            <div className="hotel-info">
                                <h3>{hotel.name}</h3>
                                <p className="hotel-location">{hotel.inMekka}</p>
                                <p className="hotel-rating">
                                    ⭐️⭐️⭐️⭐️⭐️ ({hotel.revCount} отзывов)
                                </p>
                                {/* Price row (example) */}
                                <div className="hotel-price-row">
                                    <p>
                                        {startDate} – {endDate}, {nights} ночей
                                        <br />
                                        перелет включен
                                    </p>
                                    <p className="hotel-price">
                                        {hotel.prices?.sixDays?.threePeople} 000 ₸
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ComfortListPage;
