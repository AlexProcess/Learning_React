import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState({
        username: "",
        email: "",
        password: "",
    });

    const onResetForm = () => {
        setFormState(initialForm);
    };

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return {
        ...formState,
        useForm,
        formState,
        onInputChange,
        onResetForm,
    };
};