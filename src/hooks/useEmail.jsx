import { useState, useEffect } from 'react';

const useEmail = (initialValue = '') => {
    const [email, setEmail] = useState(initialValue);
    const [error, setError] = useState('');
    
    useEffect(() => {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === '') {
            setError(' The email cannot be empty');
        }else if(!regexEmail.test(email)) {
            setError(' Invalid email address');
        } else {
            setError('');
        }
    }, [email]);
    return { email, setEmail, error };
};
export default useEmail;