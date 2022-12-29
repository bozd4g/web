import React from "react";
import Social from "../components/social";

const HomePage = () => {
    return (
        <main className="w-screen h-screen">
            <div className="h-full flex flex-col justify-center items-center">
                <p className="font-serif text-zinc-700">it's furkan.</p>
                <Social className="mt-8"/>
            </div>
        </main>
    )
}

export default HomePage;