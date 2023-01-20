import React from "react";
function Home() {
    return (
        <body className="bg-gradient-to-r from-green-100 to-teal-50 dark:bg-gray-900">
            <main className="mx-auto dark:bg-gray-900">
                <section id="hero" className="bg-gradient-to-r from-green-100 to-teal-50 flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height bg-white dark:bg-gray-900">
                    <article className="sm:w-1/2">
                        <h2 className="max-w-md text-4xl font-bold text-center sm:text-5sl sm:text-left text-slate-900 dark:text-white hover:motion-safe:animate-bounce">
                            When You Give, <span class=" text-indigo-700 dark:text-indigo-300">
                            You Also Recieve! </span>
                        </h2>
                        <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400"> Ready to give back to the community in a unique way?</p>
                        <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400"></p>
                    </article>
                    <img src={require("../assets/img/hero.png")} className="w-1/2" alt="hero"></img>
                </section>
            <hr className="mx-auto bg-black dark:bg-white"></hr>
                <section id="orgs" className="p-6 my-12">
                    <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white"> Browse Our Organizations</h2>
                    <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
                        <li className="w-2/3 sm: w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-3xl shadow-xl dark:bg-black">
                            <img src={require("../assets/img/brain.png")} alt="yeh" class="w-1/2 mb-6"></img>
                            <h3 className="hidden text-3xl text-center text-slate-500 dark:text-white"> Mental Health</h3>
                            <p className="text-3xl text-center text-slate-900 mt-2 dark:text-slate-500"> Mental Health</p>
                            <p className="sm:hidden text-2xl text-cente text-slate-900 mt-2 dark:text-slate-500"> View All</p>
                        </li>
                        <li className="w-2/3 sm: w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-3xl shadow-xl dark:bg-black">
                            <img src={require("../assets/img/earth.png")}alt="yeh" class="w-1/2 mb-6"></img>
                            <h3 className="hidden text-3xl text-center text-slate-500 dark:text-white"> Mental Health</h3>
                            <p className="text-3xl text-center text-slate-900 mt-2 dark:text-slate-500"> Conservation</p>
                            <p className="sm:hidden text-2xl text-cente text-slate-900 mt-2 dark:text-slate-500"> View All</p>
                        </li>
                        <li class="w-2/3 sm: w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-3xl shadow-xl dark:bg-black">
                            <img src={require("../assets/img/puzzle.png")} alt="yeh" class="w-1/2 mb-6"></img>
                            <h3 className="hidden text-3xl text-center text-slate-500 dark:text-white"> Mental Health</h3>
                            <p className="text-3xl text-center text-slate-900 mt-2 dark:text-slate-500"> Education</p>
                            <p className="sm:hidden text-2xl text-cente text-slate-900 mt-2 dark:text-slate-500"> View All</p>
                        </li>
                    </ul>
                </section>
            <hr className="mx-auto bg-black dark:bg-white"></hr>
            </main>
        </body>
    );
}

export default Home;

