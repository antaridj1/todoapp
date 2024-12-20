"use client"

import { useEffect, useState } from "react";
import BoxRounded from "./BoxRounded";
import Link from "next/link";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode])
    
    return (
        <div className="fixed w-full p-3 top-0 z-50 start-0 animate-fade animate-once">
            <BoxRounded>
				<div className="flex flex-wrap items-center justify-between py-4 px-2">
                    <h1 className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="nav-title self-center text-xl font-bold whitespace-nowrap dark:text-white">
                            <span className="text-black dark:text-white">Todo</span>
                            <span className="text-[#6C5FE5] dark:text-[#B9B1FF]">day</span>
                        </span>
                    </h1>
                    <div onClick={() => setDarkMode(!darkMode)} className="cursor-pointer">
                        {darkMode ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                            </svg> 
                        )}
                    </div>
                    
                </div> 
            </BoxRounded>
        </div>
    );
}