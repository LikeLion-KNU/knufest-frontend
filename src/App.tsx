import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { MainLayout } from "@/components/layout/MainLayout";

import BoothDetailPage from "@/pages/BoothDetailPage";
import BoothListPage from "@/pages/BoothListPage";
import ContributorPage from "@/pages/ContributorPage";
import HomePage from "@/pages/HomePage";
import SpecialGuestPage from "@/pages/SpecialGuestPage";
import TimeTablePage from "@/pages/TimeTablePage";

import { GlobalStyle } from "./styles/globals";
import { store } from "@/store/store";

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index path="/" element={<HomePage />} />
                        <Route path="/timetable" element={<TimeTablePage />}></Route>
                        <Route path="/booth" element={<BoothListPage />}></Route>
                        <Route path="/booth/:id" element={<BoothDetailPage />}></Route>
                        <Route path="/guests" element={<SpecialGuestPage />}></Route>
                        <Route path="/contributors" element={<ContributorPage />}></Route>
                    </Route>
                </Routes>
            </Provider>
        </>
    );
};

export default App;
