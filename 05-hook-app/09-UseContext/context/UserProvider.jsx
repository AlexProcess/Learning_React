import React from "react";

export const UserProvider = ({ children }) => {
    const user = {
        id: 123,
        name: "Fernando Herrera",
        email: "fernando@google.com",
    };

    return (
        <>
            <UserContext.Provider value={{ hola: "Mundo" }}>
                {children}
            </UserContext.Provider>
        </>
    );
};
