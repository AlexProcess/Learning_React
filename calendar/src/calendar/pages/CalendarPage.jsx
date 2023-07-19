import { NavBar } from "../components/NavBar";
import { Calendar } from "react-big-calendar";
import { addHours } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getMessagesES, localizer } from "../../helpers";
import { CalendarEvent } from "../components/CalendarEvent";

const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
        backgroundColor: "#347CF7",
        borderRadius: "0px",
        opacity: 0.8,
        color: "white",
    };

    return {
        style,
    };
};

const events = [
    {
        title: "croissant con fokin cafe",
        notes: "hay que comprar el pastel",
        start: new Date(),
        end: addHours(new Date(), 2),
        bgColor: "fafafa",
        user: {
            _id: "123",
            name: "alex",
        },
    },
];

export const CalendarPage = () => {
    return (
        <>
            <NavBar />

            <Calendar
                culture="es"
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: "calc(100vh - 60px)" }}
                messages={getMessagesES()}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEvent,
                }}
            />
        </>
    );
};
