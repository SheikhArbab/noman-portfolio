import React, { useEffect } from 'react';
import { Spinner } from "@/components/index";

const Loading: React.FC = () => {
    useEffect(() => {
        const body: HTMLElement | null = document.querySelector("body");
        if (body) {
            body.style.overflow = "hidden";
        }

        return () => {
            if (body) {
                body.style.overflow = "auto";
            }
        };
    }, []);

    return (
        <main className='w-full min-h-screen flex items-center justify-center'>
            <Spinner className='' size='9' />
        </main>
    );
}

export default Loading;
