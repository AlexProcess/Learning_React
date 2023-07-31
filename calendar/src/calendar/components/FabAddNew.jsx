import React from "react";
import { useCalendarStore, useUiStore } from "../../hooks";
import { addHours } from "date-fns";

export const FabAddNew = () => {
    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore();

    const handleClickcNew = () => {
        setActiveEvent({
            _id: new Date().getTime(),
            title: "Hola",
            notes: "mundo",
            start: new Date(),
            end: addHours(new Date(), 2),
            bgColor: "fafafa",
            user: {
                _id: "123",
                name: "alex",
            },
        });
        openDateModal();
    };

    return (
        <>
            <button onClick={handleClickcNew} className="btn btn-primary fab">
                <i className="fas fa-plus" />
            </button>
        </>
    );
};
