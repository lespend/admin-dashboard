import React from 'react';
import { Box, Button } from '@mui/material';
import PageTitle from '../../components/PageTitle';
import * as yup from 'yup';
import { Formik } from 'formik';
import {Grid, TextField} from '@mui/material';

const Form = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
    }

    const phoneRegexp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    const userSchema = yup.object({
        firstName: yup.string().required('Обязательное поле'),
        lastName: yup.string().required('Обязательное поле'),
        email: yup.string().email('Некорректный адрес почты').required('Обязательное поле'),
        phone: yup.string().matches(phoneRegexp, 'Некорректный номер телефона').required('Обязательное поле'),
        address1: yup.string().required('Обязательное поле'),
        address2: yup.string(),
    })

    const handleFormSubmit = (values) => {
        console.log(values)
    }

    return (
        <Box p={2}>
            <PageTitle title='Новый пользователь' subtitle='Форма для создания нового пользователя' />
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}
            >
                {({values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit} style={{ marginTop: '48px' }}>
                        <Grid container spacing={2} justifyContent='center'>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    fullWidth
                                    variant='filled'
                                    type='text'
                                    label='Имя'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.firstName}
                                    name='firstName'
                                    error={!!touched.firstName && !!errors.firstName}
                                    helperText={touched.firstName && errors.firstName}
                                />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    fullWidth
                                    variant='filled'
                                    type='text'
                                    label='Фамилия'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.lastName}
                                    name='lastName'
                                    error={!!touched.lastName && !!errors.lastName}
                                    helperText={touched.lastName && errors.lastName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    variant='filled'
                                    type='email'
                                    label='Email'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.email}
                                    name='email'
                                    error={!!touched.email && !!errors.email}
                                    helperText={touched.email && errors.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    variant='filled'
                                    type='tel'
                                    label='Телефон'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.phone}
                                    name='phone'
                                    error={!!touched.phone && !!errors.phone}
                                    helperText={touched.phone && errors.phone}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    variant='filled'
                                    type='text'
                                    label='Адрес 1'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.address1}
                                    name='address1'
                                    error={!!touched.address1 && !!errors.address1}
                                    helperText={touched.address1 && errors.address1}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    variant='filled'
                                    type='text'
                                    label='Адрес 2'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.address2}
                                    name='address2'
                                    error={!!touched.address2 && !!errors.address2}
                                    helperText={touched.address2 && errors.address2}
                                />
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <Button fullWidth type='submit' color='secondary' variant='contained'>
                                    Создать
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </Box>
    );
}

export default Form;
