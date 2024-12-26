import React from "react";
import "./style.css";

function IncludedItemsModal({ onClose }) {
    // Example data array. You can store this in a separate file or fetch from an API.
    const items = [
        {
            icon: "/icons/hotel-transfer.png",
            title: "Проживание и трансфер",
            description: "Вас встретят в аэропорту и отвезут в отель и обратно",
        },
        {
            icon: "/icons/food.png",
            title: "Питание на выбор",
            description: "Зависит от выбранного тура",
        },
        {
            icon: "/icons/plane.png",
            title: "Перелет",
            description: "Билеты на самолет туда и обратно",
        },
        {
            icon: "/icons/insurance.png",
            title: "Медицинская страховка",
            description:
                "Страхование жизни и здоровья на время пребывания за границей. Сумма страховки зависит от выбранного тура",
        },
        {
            icon: "/icons/support.png",
            title: "Поддержка 24/7",
            description: "Ответим на ваши вопросы через колл-центр 2211",
        },
        {
            icon: "/icons/excursion.png",
            title: "Экскурсия",
            description:
                "Мечеть Кибла, Сад Рауда, Завод Курана, Город Медина, Мечеть Пророка (С.А.С)",
        },
        {
            icon: "/icons/merch.png",
            title: "Мерч",
            description: "Фирменный чемодан, кепка, жилет, брюки, футболка, барсетка",
        },
        {
            icon: "/icons/visa.png",
            title: "Виза",
            description: "Виза на 1 год",
        },
    ];

    return (
        <div className="overlay">
            <div className="included-modal">
                <div className="modal-header">
                    <h2>Что входит в стоимость тура?</h2>
                    <button className="close-btn" onClick={onClose}>
                        <img src="/icons/close.png" alt="close"/>
                    </button>
                </div>
                <div className="modal-body">
                    {items.map((item, index) => (
                        <div key={index} className="item-row">
                            <img src={item.icon} alt={item.title} className="item-icon" />
                            <div className="item-text">
                                <p className="item-title">{item.title}</p>
                                <p className="item-desc">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default IncludedItemsModal;
