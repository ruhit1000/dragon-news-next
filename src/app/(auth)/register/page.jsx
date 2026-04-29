'use client';

import Link from 'next/link';
import React from 'react';
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { toast, ToastContainer } from 'react-toastify';


const RegisterPage = () => {

    const {
        register,
        handleSubmit,
    } = useForm();

    const handleFormSubmit = async (data) => {
        const { name, photoURL, email, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image: photoURL,
            callbackURL: process.env.BETTER_AUTH_URL
        })

        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Registration successful! Please check your email to verify your account.");
        }

    }

    return (
        <div className='min-h-[90vh] flex items-center justify-center bg-slate-100'>
            <div className='bg-base-100 p-8 lg:p-16'>
                <h2 className='text-2xl font-semibold mb-4 text-center'>Register for an account</h2>
                <hr className='border-base-300 my-6' />

                <Form className="flex w-96 flex-col gap-4" onSubmit={handleSubmit(handleFormSubmit)}>
                    <TextField
                        isRequired
                        name='name'
                        type="text"
                        validate={(value) => {
                            if (!value.trim()) {
                                return "Name is required";
                            }
                            return null;
                        }}
                    >
                        <Label>Name</Label>
                        <Input
                            className="w-full"
                            {...register('name')}
                            placeholder="John Doe"
                        />
                        <FieldError />
                    </TextField>
                    <TextField
                        name='photoURL'
                        type="text"
                        validate={(value) => {
                            if (!value.trim()) {
                                return "Photo URL is required";
                            }
                            return null;
                        }}
                    >
                        <Label>PhotoURL</Label>
                        <Input
                            className="w-full"
                            {...register('photoURL')}
                            placeholder="https://example.com/photo.jpg"
                        />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name='email'
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input
                            className="w-full"
                            {...register('email')}
                            placeholder="john@example.com"
                        />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name='password'
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input
                            className="w-full"
                            placeholder="Enter your password"
                            {...register('password')}
                        />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <Button className="w-full" type="submit">
                        <Check />
                        Register
                    </Button>
                </Form>

                <p className="text-center text-sm text-muted-foreground mt-6">
                    Already have an account?{' '}
                    <Link href="/login" className="text-primary hover:underline">
                        Login
                    </Link>
                </p>
            </div>
            <ToastContainer 
                position='top-center'
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default RegisterPage;