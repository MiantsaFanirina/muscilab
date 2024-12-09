'use client';
import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { User } from '@/features/register/types/types';

interface RegisterDataContextType {
    user: User;
    setUser: Dispatch<SetStateAction<User>>;
}

// Create the context with a default undefined value
export const RegisterDataContext = createContext<RegisterDataContextType | undefined>(undefined);

interface RegisterDataContextProviderProps {
    children: ReactNode;
}

export const RegisterDataContextProvider = ({ children }: RegisterDataContextProviderProps) => {
    const [user, setUser] = useState<User>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmedPassword: '',
        description: '',
        interest: '',
    });

    return <RegisterDataContext.Provider value={{ user, setUser }}>{children}</RegisterDataContext.Provider>;
};
