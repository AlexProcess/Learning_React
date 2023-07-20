import { addHours } from "date-fns";
import { useState } from "react";
import ReactModal from "react-modal";
import DatePicker from "react-datepicker";

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

    const [formValues, setFormValues] = useState({
        title: "Alex",
        notes: "Tercero",
        start: new Date(),
        end: addHours(new Date(), 2),
    });

    const onInputChanged = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value,
        });
    };

    const onDateChanged = (event, changing) => {
        setFormValues({
            ...formValues,
            [changing]: event,
        });
    };

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            overlayClassName={"modal-fondo"}
            closeTimeoutMS={200}
        >
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container">
                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label>
                    <DatePicker
                        selected={formValues.start}
                        onChange={(event) => onDateChanged(event, "start")}
                        className="form-control"
                        dateFormat="Pp"
                    />
                    <input
                        className="form-control"
                        placeholder="Fecha inicio"
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <input
                        className="form-control"
                        placeholder="Fecha inicio"
                    />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={formValues.title}
                        onChange={onInputChanged}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        Una descripción corta
                    </small>
                </div>

                <div className="form-group mb-2">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={formValues.notes}
                        onChange={onInputChanged}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">
                        Información adicional
                    </small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>
            </form>
        </ReactModal>
    );
};
