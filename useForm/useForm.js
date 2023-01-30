import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
    const [formState, setFormState] = useState( initialForm );
    
    const onInputChange = ( { target }) => { 
        const { name, value } = target;

        // Primero destructurar todas las props por que pueden ser cientos
        setFormState( {
            ...formState,
            [name]: value,
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        onInputChange,
        onResetForm
    }
};