import * as yup from 'yup';

export const registrationSchema = yup.object().shape({
    firstName: yup.string().required('First Name is required').min(3, 'Must be at least 3 characters'),
    lastName: yup.string().required('Last Name is required').min(3, 'Must be at least 3 characters'),
    email: yup.string().required('Email is required').email('Invalid email format'),
    password: yup.string().required('Password is required').min(6, 'Must be at least 6 characters'),
});