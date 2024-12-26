import React, { useState } from "react";
import "./style.css"; // We'll define some minimal styling

function ModalPhone({ onClose, onSubmit }) {
    const [phone, setPhone] = useState("");

    const handleSubmit = () => {
        // Optionally, validate phone or store it
        // Then call onSubmit
        onSubmit();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {/* Close "x" button */}
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>

                <h2>Забронировать умра тур</h2>
                <p>Оставьте свой номер телефона</p>

                <input
                    type="text"
                    placeholder="+7 777 777 7777"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="phone-input"
                />

                <button className="submit-btn" onClick={handleSubmit}>
                    Далее
                </button>
            </div>
        </div>
    );
}

export default ModalPhone;
