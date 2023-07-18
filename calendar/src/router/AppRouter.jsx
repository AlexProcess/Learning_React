import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CalendarPage } from "../calendar";
import { LoginPage } from "../auth";

export const AppRouter = () => {
    const authStatus = "authenticated";

    return (
        <BrowserRouter>
            <Routes>
                {authStatus === "not authorized" ? (
                    <Route path="/auth/*" element={<LoginPage />} />
                ) : (
                    <Route path="/*" element={<CalendarPage />} />
                )}

                <Route path="/auth/*" Navigate to="/auth/login" />
            </Routes>
            s
        </BrowserRouter>
    );
};
