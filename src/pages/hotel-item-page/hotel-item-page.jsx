// src/components/HotelDetailsPage.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import ModalBooking from "../../components/modals-submit/ModalBooking";
import ModalPhone from "../../components/modals-submit/ModalPhone";
import IncludedItemsModal from "../../components/included-modal/IncludedModal"; // We'll define minimal CSS below

function HotelItemPage() {
    const navigate = useNavigate();
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showIncludedModal, setShowIncludedModal] = useState(false);

    const openModal1 = () => {
        setShowModal1(true);
        setShowModal2(false);
    };

    const handleSubmitModal1 = () => {
        setShowModal1(false);
        setShowModal2(true);
    };

    const closeAll = () => {
        setShowModal1(false);
        setShowModal2(false);
    };
    const { state } = useLocation();

    // hotelData: full object from the List
    // cityFrom, cityTo, startDate, endDate, nights, travelers for the top bar
    const {
        hotelData,
        cityFrom = "Алматы",
        cityTo = "Джидда",
        startDate = "1 нояб.",
        endDate = "16 нояб.",
        nights = 15,
        travelers = 3,
    } = state || {};

    // Example: “Мекка” / “Медина” toggle
    const [selectedCity, setSelectedCity] = useState("Мекка");

    if (!hotelData) {
        return (
            <div style={{ padding: "20px" }}>
                <h2>Отель не найден</h2>
                <button onClick={() => navigate(-1)}>Вернуться назад</button>
            </div>
        );
    }

    // For example, you could display the first price you want
    // In your screenshot, it shows "450 000 ₸" - you can pick from hotelData.prices
    // This is just an example picking: .prices.sixDays.threePeople
    const displayedPrice = hotelData.prices?.sixDays?.threePeople + " $";

    return (
       <>
           <div className="hotel-details-page">
               {/* Header with route info */}
               <div className="details-header">
                   <button className="back-button" onClick={() => navigate(-1)}>
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

               {/* City toggle */}
               <div className="city-toggle">
                   <button
                       className={selectedCity === "Мекка" ? "toggle-btn active" : "toggle-btn"}
                       onClick={() => setSelectedCity("Мекка")}
                   >
                       Мекка
                   </button>
                   <button
                       className={selectedCity === "Медина" ? "toggle-btn active" : "toggle-btn"}
                       onClick={() => setSelectedCity("Медина")}
                   >
                       Медина
                   </button>
               </div>

               {/* Hotel main image placeholder */}
               <div className="hotel-image">
                   <img src={hotelData.img} alt={hotelData.name} />
               </div>

               {/* Hotel info row */}
               <div className="hotel-info-row">
                   <div className="hotel-info-left">
                       <h3>{hotelData.name}</h3>
                       <p className="location">
                           {hotelData.inMekka} {/* or inMedina, depending on logic */}
                       </p>
                       {/* example star rating + reviews */}
                       <p className="rating">
                           ⭐️⭐️⭐️⭐️⭐️ ({hotelData.revCount} отзывов)
                       </p>
                       <p className="distance">700 м. от мечети Аль-Харам</p>
                   </div>
                   <div className="hotel-info-right">
                       {/* Heart/favorite button */}
                       <button className="heart-btn">
                           <span>❤️</span>
                       </button>
                   </div>
               </div>

               {/* Price row */}
               <div className="price-row">
                   <p>
                       {startDate}–{endDate}, {nights} ночей <br />
                       перелет включен
                   </p>
                   <p className="price">{displayedPrice}</p>
                   {/* Example: “Забронировать” button */}
                   <button className="reserve-button" onClick={openModal1}>Забронировать</button>
               </div>

               {/* What is included */}
               <div className="block-section">
                   <h4>Что входит в стоимость тура?</h4>
                   <p>
                       В тур входит проживание, трансфер, питание на выбор, перелет,
                       мед.страховка, поддержка 24/7, служба гида, фирменный мерч
                   </p>
                   <button className="more-btn" onClick={() => setShowIncludedModal(true)}>Подробнее</button>
               </div>

               {/* “Об отеле” section */}
               <div className="block-section">
                   <h4>Об отеле</h4>
                   <ul className="hotel-features">
                       <li>
                           <strong>Отель Raffles Makkah</strong>
                           <br />
                           Отель находится на территории мечети Аль-Харам. До священной Каабы 300
                           метров
                           <button className="feature-details" onClick={() => setShowIncludedModal(true)}>Подробнее</button>
                       </li>
                       <li>
                           <strong>Территория Аль-Харама</strong>
                           <br />
                           Отель находится на территории мечети Аль-Харам. До священной Каабы 300
                           метров
                           <button className="feature-details" onClick={() => setShowIncludedModal(true)}>Подробнее</button>
                       </li>
                       <li>
                           <strong>Spa и детская зона</strong>
                           <br />
                           Отель находится на территории мечети Аль-Харам. До священной Каабы 300
                           метров
                           <button className="feature-details" onClick={() => setShowIncludedModal(true)}>Подробнее</button>
                       </li>
                       <li>
                           <strong>Спорт и развлечения</strong>
                           <br />
                           Отель находится на территории мечети Аль-Харам. До священной Каабы 300
                           метров
                           <button className="feature-details" onClick={() => setShowIncludedModal(true)}>Подробнее</button>
                       </li>
                       <li>
                           <strong>6 ресторанов</strong>
                           <br />
                           Отель находится на территории мечети Аль-Харам. До священной Каабы 300
                           метров
                           <button className="feature-details" onClick={() => setShowIncludedModal(true)}>Подробнее</button>
                       </li>
                   </ul>
               </div>
           </div>
           {showModal1 && (
               <ModalPhone
                   onClose={closeAll}
                   onSubmit={handleSubmitModal1}
               />
           )}

           {/* Second Modal (booking sum) */}
           {showModal2 && (
               <ModalBooking
                   onClose={closeAll}
               />
           )}
           {showIncludedModal && (
               <IncludedItemsModal onClose={() => setShowIncludedModal(false)} />
           )}
       </>
    );
}

export default HotelItemPage;
