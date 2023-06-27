import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { DcPage, MarvelPage } from "../heroes/pages";
import { Navbar } from "../ui";
import { LoginPage } from "../auth/Pages/LoginPage";
export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
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
