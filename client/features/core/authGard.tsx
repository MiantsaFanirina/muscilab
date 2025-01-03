'use client'
import {redirect, useRouter} from "next/navigation";
import {useEffect} from "react";

const AuthGard = () => {
    const router = useRouter();
    useEffect(() => {
        const authToken = localStorage.getItem("authToken");
        if (!authToken) {
            redirect('/login');
        }
    }, [router]);
    return null;
}
export {AuthGard}