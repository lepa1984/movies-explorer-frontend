import { useState, useCallback } from 'react';

function useForm() {
    const [values, setValues] = useState({ name: '', email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setValues({ ...values, [name]: value });

        setErrors({ ...errors, [name]: e.target.validationMessage });

        setIsValid(e.target.closest('form').checkValidity());
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return {
        values,
        setValues,
        handleChange,
        errors,
        isValid,
        setIsValid,
        resetForm,
    };
}
export default useForm;
