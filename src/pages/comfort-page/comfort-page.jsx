import './style.css';
import { Navigate, useNavigate } from 'react-router';
import { useState, useMemo } from 'react';
import { Input } from '@ozen-ui/kit/Input';
import { SearchIcon } from '@ozen-ui/icons';
import { citiesList, hotels } from '../../shared/hotels';
import SideDrawer from "../../components/side-drawer/SideDrawer";

// =============================================
// 1) DATE UTILS
// =============================================

const RUSSIAN_MONTHS = [
    'Янв.', 'Февр.', 'Март', 'Апр.', 'Май', 'Июнь',
    'Июль', 'Авг.', 'Сент.', 'Окт.', 'Нояб.', 'Дек.'
];

const WEEKDAYS_SHORT = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

// Format date as "dd MMM, ddd" (e.g., "15 дек ср")
function formatDate(dateObj) {
    if (!dateObj) return '';
    const day = dateObj.getDate();
    const month = RUSSIAN_MONTHS[dateObj.getMonth()];
    // getDay() => Sunday=0, shift to Monday=0
    const dayOfWeekIndex = (dateObj.getDay() + 6) % 7;
    const weekdayShort = WEEKDAYS_SHORT[dayOfWeekIndex];
    return `${day} ${month} ${weekdayShort.toLowerCase()}`;
}

// Calculate difference in full days between two Date objects
function diffInDays(date1, date2) {
    if (!date1 || !date2) return 0;
    const msPerDay = 1000 * 60 * 60 * 24;
    return Math.round((date2 - date1) / msPerDay);
}

// =============================================
// 2) MAIN COMPONENT
// =============================================

function ComfortPage() {
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleOpenDrawer = () => {
        setDrawerOpen(true);
    };

    const handleCloseDrawer = () => {
        setDrawerOpen(false);
    };

    // 2.1: Cities
    const [citiesFilter, setCitiesFilter] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [cityResult, setCityResult] = useState('Алматы'); // default city or any

    const filteredData = useMemo(() => {
        return citiesList.filter((city) =>
            city.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    // 2.2: Travelers
    const [travelersFilter, setTravelersFilter] = useState(false);
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState([]);
    const [selectedChildAge, setSelectedChildAge] = useState(1);

    const addChild = () => {
        setChildren((prev) => [...prev, selectedChildAge]);
        setSelectedChildAge(1);
    };

    const removeChild = (index) => {
        setChildren((prev) => prev.filter((_, i) => i !== index));
    };

    // 2.3: Calendar
    const [showCalendar, setShowCalendar] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    // NEW: track displayed month (initially today’s month/year)
    const today = new Date();
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // 0=Jan, 11=Dec

    // Generate days for currentYear/currentMonth
    // 1) First day of the month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    // 2) Monday-based index of that day
    const firstDayIndex = (firstDayOfMonth.getDay() + 6) % 7;
    // 3) Number of days in that month
    const daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Build an array for all the days we need to show in the grid
    const calendarDays = [];
    // placeholders for days before the 1st
    for (let i = 0; i < firstDayIndex; i++) {
        calendarDays.push(null);
    }
    // actual days in the month
    for (let d = 1; d <= daysInCurrentMonth; d++) {
        calendarDays.push(d);
    }

    // Functions to move to prev/next month
    const handlePrevMonth = () => {
        const prev = new Date(currentYear, currentMonth - 1, 1);
        setCurrentYear(prev.getFullYear());
        setCurrentMonth(prev.getMonth());
    };

    const handleNextMonth = () => {
        const next = new Date(currentYear, currentMonth + 1, 1);
        setCurrentYear(next.getFullYear());
        setCurrentMonth(next.getMonth());
    };

    // When user clicks a day
    const handleDayClick = (day) => {
        if (!day) return; // ignore placeholders
        const clickedDate = new Date(currentYear, currentMonth, day);

        if (!startDate) {
            // no start => set start
            setStartDate(clickedDate);
            setEndDate(null);
        } else if (startDate && !endDate) {
            // if start but no end
            if (clickedDate >= startDate) {
                setEndDate(clickedDate);
            } else {
                // swap
                setEndDate(startDate);
                setStartDate(clickedDate);
            }
        } else {
            // reset
            setStartDate(clickedDate);
            setEndDate(null);
        }
    };

    // Clear
    const clearStart = () => setStartDate(null);
    const clearEnd = () => setEndDate(null);

    // Check if day is in the selected range
    const isDayInRange = (day) => {
        if (!startDate || !endDate || !day) return false;
        const d = new Date(currentYear, currentMonth, day);
        return d >= startDate && d <= endDate;
    };

    const isStartDay = (day) => {
        if (!startDate || !day) return false;
        const d = new Date(currentYear, currentMonth, day);
        return (
            d.getTime() === startDate.getTime()
        );
    };

    const isEndDay = (day) => {
        if (!endDate || !day) return false;
        const d = new Date(currentYear, currentMonth, day);
        return (
            d.getTime() === endDate.getTime()
        );
    };

    // Footer text
    const totalNights = diffInDays(startDate, endDate);
    let footerText = 'Выбрать';
    if (startDate && endDate) {
        footerText = `Выбрать ${formatDate(startDate)} – ${formatDate(endDate)}, ${totalNights} ночей`;
    } else if (startDate) {
        footerText = `Выбрать ${formatDate(startDate)}`;
    }

    // For the top labels in the calendar
    const startLabel = startDate ? formatDate(startDate) : 'Вылет туда';
    const endLabel = endDate ? formatDate(endDate) : 'Обратно';

    const handleCloseCalendar = () => setShowCalendar(false);
    const handleFooterClick = () => {
        setShowCalendar(false);
    };

    // 2.4: “Find Tours”
    const handleFindTours = () => {
        navigate('/list', {
            state: {
                cityFrom: cityResult,
                cityTo: 'Джидда',
                startDate: formatDate(startDate),
                endDate: formatDate(endDate),
                nights: totalNights,
                travelers: adults + children.length,
            },
        });
    };

    return (
        <div>
            {/* HEADER */}
            <div className="comfort">
                <div className="header">
                    <img src="/icons/logo.png" alt="logo"/>
                    <button onClick={handleOpenDrawer}>
                        <img src="/icons/menu.png" alt="menu" />
                    </button>
                </div>
                <h1 className="comfort-title">
                    Комфортные <br />
                    умра туры
                </h1>
            </div>

            {/* FILTER CARD */}
            <div className="filter-card">
                {/* City */}
                <div className="filter-item">
                    <div className="filter-icon">
                        <img src="/icons/location.png" alt="location" />
                    </div>
                    <div>
                        <p className="filter-subtitle">Откуда</p>
                        <p
                            className="filter-title"
                            onClick={() => setCitiesFilter(true)}
                        >
                            {cityResult}
                        </p>
                    </div>
                </div>
                <div className="divider"></div>

                {/* Calendar */}
                <div
                    className="filter-item"
                    onClick={() => setShowCalendar(true)}
                >
                    <div className="filter-icon">
                        <img src="/icons/calendar.png" alt="calendar" />
                    </div>
                    <div>
                        <p className="filter-subtitle">Даты поездки</p>
                        <p className="filter-title">
                            {startLabel} → {endLabel}
                            {totalNights ? `, ${totalNights} ночей` : ''}
                        </p>
                    </div>
                </div>

                {/* Travelers */}
                <div
                    className="filter-item"
                    onClick={() => setTravelersFilter(!travelersFilter)}
                >
                    <div className="filter-icon">
                        <img src="/icons/persons.png" alt="persons" />
                    </div>
                    <div>
                        <p className="filter-title">
                            {adults} взрослых, {children.length} детей
                        </p>
                    </div>
                </div>

                {/* Search button */}
                <button className="filter-button" onClick={handleFindTours}>
                    Найти туры
                </button>
            </div>

            {/* BEST OFFERS */}
            <div className="best-offers">
                <p className="best-offers-title">Лучшие предложения по турам</p>
                <div className="offers">
                    {hotels.map((item) => (
                        <div className="offers-item" key={item.id || item.name}>
                            <img src={item.img} alt={item.name} />
                            <p className="offers-title">{item.name}</p>
                            <p className="offers-subtitle">
                                от {item.prices?.sixDays?.threePeople} $
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CITY FILTER MODAL */}
            {citiesFilter && (
                <div className="modal">
                    <div className="modal-inner">
                        <div className="modal-header">
                            <h2>Откуда</h2>
                            <img
                                src="/icons/close.png"
                                alt="close"
                                onClick={() => setCitiesFilter(false)}
                            />
                        </div>
                        <Input
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="modal-search"
                            renderLeft={SearchIcon}
                            placeholder="Город"
                            size="s"
                            style={{ backgroundColor: '#F4F4F4' }}
                        />

                        <h1>Выберите город</h1>
                        <div className="cities-filter">
                            {filteredData.map((city) => (
                                <p
                                    key={city}
                                    onClick={() => {
                                        setCityResult(city);
                                        setCitiesFilter(false);
                                    }}
                                >
                                    {city}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* TRAVELERS FILTER MODAL */}
            {travelersFilter && (
                <div className="modal">
                    <div className="traveler-selector">
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                            <h2>Туристы</h2>
                            <button className="close-btn" onClick={() => setTravelersFilter(false)}>
                                <img src="/icons/close.png" alt=""/>
                            </button>
                        </div>

                        {/* Adults Counter */}
                        <div className="counter">
                            <label>Взрослые</label>
                            <span className="subtext">Старше 16 лет</span>
                            <div className="counter-controls">
                                <button
                                    onClick={() => setAdults(Math.max(1, adults - 1))}
                                >
                                    –
                                </button>
                                <span>{adults}</span>
                                <button onClick={() => setAdults(adults + 1)}>+</button>
                            </div>
                        </div>

                        <hr />

                        {/* Add Child Section */}
                        <div className="add-child">
                            <button onClick={addChild} className="add-button">
                                + Добавить ребенка
                            </button>
                        </div>

                        {/* Child Age & List */}
                        {children.length > 0 && (
                            <>
                                <div className="child-age">
                                    <label>Укажите возраст ребенка</label>
                                    <div className="slider-container">
                                        <input
                                            type="range"
                                            min="1"
                                            max="15"
                                            value={selectedChildAge}
                                            onChange={(e) =>
                                                setSelectedChildAge(Number(e.target.value))
                                            }
                                        />
                                        <span>
                      {selectedChildAge === 1
                          ? 'до 1 года'
                          : `${selectedChildAge} лет`}
                    </span>
                                    </div>
                                </div>

                                {children.map((age, index) => (
                                    <div key={index} className="child-item">
                                        Ребенок {index + 1}:{' '}
                                        {age === 1 ? 'до 1 года' : `${age} лет`}
                                        <button
                                            onClick={() => removeChild(index)}
                                            className="remove-button"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}
                            </>
                        )}

                        {/* Select Button */}
                        <button
                            className="select-button"
                            onClick={() => setTravelersFilter(false)}
                        >
                            Выбрать
                        </button>
                    </div>
                </div>
            )}

            {/* CALENDAR MODAL */}
            {showCalendar && (
                <div className="modal">
                    <div className="modal-inner">
                        {/* Close button */}
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                            <h2>Даты поездки</h2>
                            <button className="close-btn" onClick={handleCloseCalendar}>
                                <img src="/icons/close.png" alt=""/>
                            </button>
                        </div>

                        {/* Top row with date fields */}
                        <div className="date-fields">
                            <div className="date-field">
                                <span>{startLabel}</span>
                                {startDate && (
                                    <button
                                        className="clear-btn"
                                        onClick={clearStart}
                                    >
                                        &times;
                                    </button>
                                )}
                            </div>
                            <div className="date-field">
                                <span>{endLabel}</span>
                                {endDate && (
                                    <button className="clear-btn" onClick={clearEnd}>
                                        &times;
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Month nav */}
                        <div className="month-nav">
                            <button onClick={handlePrevMonth}>&lt;</button>
                            <span>
                {RUSSIAN_MONTHS[currentMonth]} {currentYear}
              </span>
                            <button onClick={handleNextMonth}>&gt;</button>
                        </div>

                        {/* Weekday labels */}
                        <div className="weekday-row">
                            {WEEKDAYS_SHORT.map((wd) => (
                                <div key={wd} className="weekday">
                                    {wd}
                                </div>
                            ))}
                        </div>

                        {/* Calendar grid for currentMonth/currentYear */}
                        <div className="calendar-grid">
                            {calendarDays.map((day, i) => {
                                if (!day) {
                                    return <div key={`empty-${i}`} />;
                                }
                                const inRange = isDayInRange(day);
                                const startDay = isStartDay(day);
                                const endDay = isEndDay(day);

                                let dayClass = 'calendar-day';
                                if (inRange) dayClass += ' in-range';
                                if (startDay) dayClass += ' start-day';
                                if (endDay) dayClass += ' end-day';

                                return (
                                    <div
                                        key={i}
                                        className={dayClass}
                                        onClick={() => handleDayClick(day)}
                                    >
                                        {day}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Footer button */}
                        <button
                            className="footer-btn"
                            onClick={handleFooterClick}
                        >
                            {footerText}
                        </button>
                    </div>
                </div>
            )}

            <SideDrawer isOpen={drawerOpen} onClose={handleCloseDrawer} />
        </div>
    );
}

export default ComfortPage;
