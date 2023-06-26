import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { HeroesApp } from "../heroes/Pages/HeroesApp";
import { MarvelPage } from "../heroes/Pages/MarvelPage";
import { DcPage } from "../heroes/Pages/DcPage";
import { LoginPage } from "../auth/Pages/LoginPage";

export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DcPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="/" element={<Navigate to={"marvel"} />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
