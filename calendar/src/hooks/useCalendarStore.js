import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onSetActiveEvent, onUpdateEvent } from "../store";

export const useCalendarStore = () => {
    const { events, activeEvent } = useSelector((state) => state.calendar);

    const dispatch = useDispatch();

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    };

    const startSavingEvent = async (calendarEvent) => {
        // TODO: llegar al backend

        if (calendarEvent._id) {
            dispatch(onUpdateEvent({ ...calendarEvent }));
            //actualizando
        } else {
            //Creando
            dispatch(
                onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() })
            );
        }
    };

    return {
        //propiedades
        events,
        activeEvent,
        //Metodos
        setActiveEvent,
        startSavingEvent,
    };
};
