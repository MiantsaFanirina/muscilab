'use server';
import { User } from '@/features/register/types/types';

export const register = async (user: User) => {
    const { firstName, lastName, email, password, description, interest } = user;
    const userWithoutConfirmedPassword = {firstName, lastName, email, password, description, interest};

    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    if (!API_URL) {
        throw new Error('API_URL environment variable is not defined');
    }

    const endpoint = `${API_URL}/users/register`;

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userWithoutConfirmedPassword),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return { error: `Error: ${response.status} - ${errorData.message || response.statusText}` };
        }

        // Return the parsed JSON data directly without storing it in a redundant variable
        return await response.json();
    } catch (error) {
        console.error('Registration error:', error);

        // Ensure `error` is of type `Error`
        if (error instanceof Error) {
            return { error: `Registration failed: ${error.message}` };
        }

        // Return a structured error message if the error is not an instance of `Error`
        return { error: 'An unexpected error occurred during registration' };
    }
};
