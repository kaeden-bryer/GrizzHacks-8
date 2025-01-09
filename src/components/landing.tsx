'use client'
import { useState, useRef, useEffect } from 'react';
import '../styles/landing.css';
const Landing = () => {
    const [rotateDuck, setRotateDuck] = useState(false);
    const [quacks, setQuacks] = useState<string[]>([]);
    const audioRef = useRef<HTMLAudioElement>(null);

    const possibleQuacks: string[] = [
        'absolute -translate-x-8 translate-y-10 text-sm',
        'absolute translate-x-48 translate-y-0 text-sm',
        'absolute translate-x-60 translate-y-10 text-sm',
        'absolute translate-x-60 translate-y-12 text-sm',
        'absolute translate-x-48 translate-y-6 text-sm',
        'absolute translate-x-0 translate-y-6 text-sm',
        'absolute translate-x-4 translate-y-12 text-sm',
        'absolute translate-x-10 translate-y-2 text-sm',
        'absolute translate-x-14 translate-y-0 text-sm',
        'absolute translate-x-24 -translate-y-2 text-sm'
    ];

    const sleep = (milliseconds: number) => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };

    const randomNumbers = (min: number, max: number) => {
        return Math.round(Math.random() * (max - min)) + min;
    };

    const duckClicked = async () => {
        setRotateDuck(true);
        setQuacks(prev => [...prev, possibleQuacks[randomNumbers(0, possibleQuacks.length - 1)]]);
        audioRef.current?.play();
        await sleep(100);
        setRotateDuck(false);
        await sleep(200);
        setQuacks(prev => prev.slice(1));
    };

    return (
        <div className="relative h-screen overflow-hidden flex justify-center bg-light">
            <div className="flex flex-col mt-40 items-center gap-4">
                <div className="relative">
                    <h1 className="inset-0 text-5xl md:text-7xl xl:text-8xl xl:text-[6.5rem] font-bold text-secondary lg:translate-y-1 translate-y-0.5 opacity-50">
                        GrizzHacks 7
                    </h1>
                    <h1 className="inset-0 absolute text-5xl md:text-7xl xl:text-8xl xl:text-[6.5rem] font-bold text-primary">
                        GrizzHacks 7
                    </h1>
                </div>
                <div className="flex gap-5 w-full items-center justify-center">
                    <div className="flex gap-0.5 items-center">
                        <img src="/calendar-blank.svg" alt="calendar" className="sm:w-8 w-7" />
                        <p className="sm:text-xl text-lg">February 8-9th</p>
                    </div>
                    <div className="flex gap-0.5 items-center">
                        <img src="/map-pin.svg" alt="map pin" className="sm:w-8 w-7" />
                        <p className="sm:text-xl text-lg">Oakland University</p>
                    </div>
                </div>
                <div className="flex gap-4 w-full items-center">
                    <a
                        href="https://somewhere.com"
                        className="w-1/2 text-center bg-primary text-light rounded-md p-1 lg:p-2 font-recoleta text-xl font-medium"
                    >
                        Apply Today!
                    </a>
                    <a href="#about" className="text-secondary">Learn more</a>
                </div>
            </div>

            <div className="w-full bottom-0 absolute">
                <div className="relative">
                    <button
                        onClick={duckClicked}
                        className="absolute -top-10 left-32 sm:-top-8 sm:left-36 cursor-pointer scale-75 -translate-y-24 -translate-x-20 lg:scale-100 sm:scale-90 sm:-translate-y-12 lg:-translate-y-7 xl:translate-y-10 2xl:scale-110 2xl:translate-y-12 2xl:translate-x-14"
                    >
                        {quacks.map((quack, index) => (
                            <p key={index} className={`${quack} font-recoleta`}>quack</p>
                        ))}
                        <img 
                            src="duck.svg" 
                            className={`cursor-pointer ${rotateDuck ? '-rotate-6' : ''}`} 
                            alt="" 
                        />
                    </button>
                    <img
                        src="water.svg"
                        className="w-full scale-125 md:scale-110 sm:translate-y-10 lg:translate-y-14 xl:translate-y-28 z-30 "
                        alt=""
                    />
                </div>
                <div className="helpOrSponsor flex absolute md:bottom-5 bottom-1 text-light">
                    <div className="flex gap-5 mx-2">
                        <p className="md:text-lg font-recoleta">
                            Need <a
                                className="underline underline-offset-2 transition-all hover:underline-offset-4"
                                href="mailto:grizzhacksou@gmail.com">help?</a>
                        </p>
                    </div>
                    <p className="text-light md:text-lg font-recoleta">
                        Looking to <a
                            className="underline underline-offset-2 transition-all hover:underline-offset-4"
                            href="mailto:grizzhacksou@gmail.com">sponsor?</a>
                    </p>
                </div>
            </div>
            <audio ref={audioRef} src="/quack.mp3" />
        </div>
    );
};

export default Landing;
