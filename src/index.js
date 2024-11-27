import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router";
import ComfortPage from "./pages/comfort-page/comfort-page";
import FavouritesPage from "./pages/favourites-page/favourites-page";
import HotToursPage from "./pages/hot-tours-page/hot-tours-page";

const root = document.getElementById('root')
ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route path="/comfort" index element={<ComfortPage />} />
                <Route path="/favourites" element={<FavouritesPage />} />
                <Route path="/hot-tours" element={<HotToursPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

