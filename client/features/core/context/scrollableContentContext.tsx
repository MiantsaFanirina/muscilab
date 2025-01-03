'use client';
import { createContext, useState, ReactNode, useContext } from "react";

// Define the shape of the context data
interface ScrollableContentContextType {
    itemsNumber: number;
    setItemsNumber: (value: number) => void;
}

// Create the context with a default value
const ScrollableContentContext = createContext<ScrollableContentContextType | undefined>(undefined);

// Create the provider component
interface MyContextProviderProps {
    children: ReactNode;
}

export const ScrollableContentContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
    const [itemsNumber, setItemsNumber] = useState<number>(0);

    return (
        <ScrollableContentContext.Provider value={{ itemsNumber, setItemsNumber }}>
            {children}
        </ScrollableContentContext.Provider>
    );
};

export const useScrollableContentContext = (): ScrollableContentContextType => {
    const context = useContext(ScrollableContentContext);
    if (!context) {
        throw new Error("useMyContext must be used within a ScrollableContentContextProvider");
    }
    return context;
};
