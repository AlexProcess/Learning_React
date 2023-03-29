import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
    const defaultValue = 20;
    const [counter, setCounter] = useState(defaultValue);

    const handleAdd = () => {
        setCounter(counter + 1);
    };

    const handleSubstract = () => {
        setCounter(counter - 1);
    };

    const handleReset = () => {
        setCounter(defaultValue);
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter}</h2>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubstract}>-1</button>
            <button onClick={handleReset}>reset</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
    value: "No hay valor",
};
