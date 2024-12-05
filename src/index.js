import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import ComfortPage from "./pages/comfort-page/comfort-page";
import FavouritesPage from "./pages/favourites-page/favourites-page";
import HotToursPage from "./pages/hot-tours-page/hot-tours-page";
import ComfortListPage from "./pages/comfort-list/comfort-list-page";
import HotelItemPage from "./pages/hotel-item-page/hotel-item-page";

const root = document.getElementById('root')
ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route index element={<Navigate to="/comfort" replace />}/>
                <Route path="/comfort" element={<ComfortPage />} />
                <Route path="/list" element={<ComfortListPage />}/>
                <Route path="/favourites" element={<FavouritesPage />} />
                <Route path="/hot-tours" element={<HotToursPage />} />
                <Route path="/tour-info" element={<HotelItemPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

