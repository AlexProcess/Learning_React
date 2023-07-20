import { useState } from "react";
import ReactModal from "react-modal";

export const CalendarModal = () => {
    const onCloseModal = () => {
        setIsOpen(false);
    };

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };
    ReactModal.setAppElement("#root");

    const [isOpen, setIsOpen] = useState(true);

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            overlayClassName={"modal-fondo"}
            closeTimeoutMS={200}
        >
            <h1>Fakin croissant</h1>
            <hr />
            <p>
                Magna anim eiusmod veniam nisi aliquip ex in aute mollit id
                deserunt. Tempor labore irure ad aute laboris et id adipisicing
                quis esse. Consectetur veniam dolor veniam labore veniam officia
                voluptate tempor. Ea eu ut reprehenderit deserunt fugiat.
                Eiusmod nisi tempor enim est aute mollit.
            </p>
        </ReactModal>
    );
};
