import React from "react";
import Social from "../components/social";

const HomePage = () => {
    return (
        <main className="w-full">
            <div className="relative w-full p-8 lg:w-1/2 lg:p-16">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h1 className="font-sans text-5xl text-zinc-800">Hey, I am Furkan 👋</h1>
                <h1 className="font-sans text-5xl mt-2 text-zinc-800">Software Engineer, Bibliophile and Enthusiastic.</h1>
                <p className="font-serif text-lg mt-12 text-zinc-600">
                    I write blog posts about software and other topics I am passionate
                    about. Also creating some open source projects to share my knowledge
                    with the community.
                </p>

                <Social className="mt-8"/>
            </div>
        </main>
    )
}

export default HomePage;
