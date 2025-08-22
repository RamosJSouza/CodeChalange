import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Container, Typography, Box } from '@mui/material';
import FormField from '../../components/FormField/FormField';
import { registrationSchema } from '../../utils/validationSchema';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationPage = () => {
  const { register, handleSubmit, formState: { errors, isValid }, watch } = useForm({
    resolver: yupResolver(registrationSchema),
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    toast.success(`Data submitted successfully! Details: ${JSON.stringify(data)}`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>Registration Form</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField name="firstName" label="First Name" register={register} errors={errors} watch={watch} />
          <FormField name="lastName" label="Last Name" register={register} errors={errors} watch={watch} />
          <FormField name="email" label="Email" register={register} errors={errors} watch={watch} />
          <FormField name="password" label="Password" register={register} errors={errors} watch={watch} visible={true} />
          <FormField name="confirmPassword" label="Confirm Password" register={register} errors={errors} watch={watch} visible={true} />
          <Button type="submit" variant="contained" fullWidth disabled={!isValid}>
            Submit
          </Button>
        </form>
      </Box>
      <ToastContainer />
    </Container>
  );
};

export default RegistrationPage;