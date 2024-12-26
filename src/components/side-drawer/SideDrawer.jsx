import React from "react";
import "./style.css";

function SideDrawer({ isOpen, onClose }) {
    return (
        <>
            {/* Overlay */}
            <div
                className={`drawer-overlay ${isOpen ? "open" : ""}`}
                onClick={onClose}
            />

            {/* Drawer Panel */}
            <div className={`drawer ${isOpen ? "open" : ""}`}>
                {/* Close button (top-right “×”) */}
                <button className="drawer-close" onClick={onClose}>
                    <img src="/icons/close.png" alt=""/>
                </button>

                {/* Logo or Title */}
                <div className="drawer-header">
                    <h2>OZIN JINA</h2>
                </div>

                {/* Menu Items */}
                <div className="drawer-body">
                    <div className="drawer-item">
                        <img src="/icons/call-center.png" alt="call" />
                        <span>Служба поддержки</span>
                    </div>

                    <div className="drawer-item">
                        <img src="/icons/whatsapp.png" alt="whatsapp" />
                        <span>Написать в чат</span>
                    </div>

                </div>
            </div>
        </>
    );
}

export default SideDrawer;
