'use server';

export const login = async (user: {email: string, password: string}) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    if (!API_URL) {
        throw new Error('API_URL environment variable is not defined');
    }

    const endpoint = `${API_URL}/users/signIn`;

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return { error: `Error: ${response.status} - ${errorData.message || response.statusText}` };
        }

        // Return the parsed JSON data
        return await response.json();
    } catch (error) {
        console.error('Sign in error:', error);

        // Ensure `error` is of type `Error`
        if (error instanceof Error) {
            return { error: `Sign in failed: ${error.message}` };
        }

        // Return a message if the error is not an instance of `Error`
        return { error: 'An unexpected error occurred during sign in' };
    }
};
