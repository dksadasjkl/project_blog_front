import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import SelectPackageOrStore from '../pages/SelectPackageOrStore/SelectPackageOrStore';
import MenuPage from '../pages/MenuPage/MenuPage';
import PointAccumulation from '../pages/PointAccumulation/PointAccumulation';
import FeedbackChoicePage from '../pages/FeedbackChoicePage/FeedbackChoicePage';
import FeedbackWritePage from '../pages/FeedbackWritePage/FeedbackWritePage';
import FeedbackOkPage from '../pages/FeedbackOkPage/FeedbackOkPage';
import PlayRecPage from '../pages/PlayRecPage/PlayRecPage';
import PlayListPage from '../pages/PlayListPage/PlayListPage';

function MenuRoute(props) {
    return (
        <Routes>
            <Route path="/main" element={<HomePage />} />
            <Route path="/select" element={<SelectPackageOrStore />} />
            <Route path="/menuall/*" element={<MenuPage />} />
            <Route path="/point" element={<PointAccumulation />} />
            <Route path="/feedbackChoice" element={<FeedbackChoicePage />} />
            <Route path="/feedback" element={<FeedbackWritePage />} />
            <Route path="/feedback/ok" element={<FeedbackOkPage />} />
            <Route path="/play" element={<PlayRecPage />} />
            <Route path="/playlist/*" element={<PlayListPage />} />
        </Routes>
    );
}

export default MenuRoute;