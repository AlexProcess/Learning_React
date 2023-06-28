import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { LoginPage } from "../auth/Pages/LoginPage";
import {} from "module";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="/*" element={<HeroesRoutes />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};