import React from "react";
import "./style.css";

function ModalBooking({ onClose }) {
    const handleBook = () => {
        // do booking logic
        alert("Booking confirmed!");
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>

                <h2>Забронировать умра тур</h2>

                <p className="booking-amount">150$</p>
                <p className="booking-desc">
                    За сумму бронирования вы приобретаете годовую визу <br />
                    в Саудовскую Аравию
                </p>

                <label>
                    <input type="checkbox" disabled />
                    Оплата за бронирование возврату не подлежит
                </label>

                <button className="submit-btn" onClick={handleBook}>
                    Забронировать
                </button>
            </div>
        </div>
    );
}

export default ModalBooking;
