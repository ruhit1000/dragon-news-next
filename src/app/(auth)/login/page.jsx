'use client';

import Link from 'next/link';
import React from 'react';
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { toast, ToastContainer } from 'react-toastify';


const LoginPage = () => {

    const {
        register,
        handleSubmit,
    } = useForm();

    const handleFormSubmit = async (data) => {
        const { email, password } = data;
        const { data: res, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "http://localhost:3000"
        })

        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Login successful!");
        }
    }

    return (
        <div className='min-h-[90vh] flex items-center justify-center bg-slate-100'>
            <div className='bg-base-100 p-8 lg:p-16'>
                <h2 className='text-2xl font-semibold mb-4 text-center'>Login to your account</h2>
                <hr className='border-base-300 my-6' />

                <Form className="flex w-96 flex-col gap-4" onSubmit={handleSubmit(handleFormSubmit)}>
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
                        Login
                    </Button>
                </Form>

                <p className="text-center text-sm text-muted-foreground mt-6">
                    Don't have an account?{' '}
                    <Link href="/register" className="text-primary hover:underline">
                        Register
                    </Link>
                </p>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={true}
            />
        </div>
    );
};

export default LoginPage;