import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";

export const AppRouter = () => {
    const authStatus = "not authorized";
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
        </BrowserRouter>
    );
};
