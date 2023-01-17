import React from "react";
function Home() {
    return (
        <main class="max-w-4xl mx-auto">
            <section id="hero" className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height">
                <article className="sm:w-1/2">
                    <h2 className="max-w-md text-4xl font-bold text-center sm:text-5sl sm:text-left text-slate-900 dark:text-white">
                        When You Give, <span class=" text-indigo-700 dark:text-indigo-300">
                        You Also Recieve! </span>
                    </h2>
                    <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400"> Ready to give back to the community in a unique way?</p>
                    <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">add later</p>
                </article>
                <img src={require("../assets/img/hero.png")} className="w-1/2" alt="hero"></img>
            </section>
        <hr className="mx-auto bg-black dark:bg-white"></hr>
            <section id="orgs" className="p-6 my-12">
                <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white"> Browse Our Organizations.</h2>
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
            <section id="testimonials" className="p-6 my-12">
                <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white"> Our Story.</h2>
                <figure className="my-12>">
                    <p></p>
                </figure>
            </section>
        <hr className="mx-auto bg-black dark:bg-white"></hr>
            <section id="contact"
                className="p-6 my-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height">
                <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                    Contact Us
                </h2>
                <form action="" className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4">
                    <label for="subject">Subject:</label>
                    
                    <input type="text" id="subject" name="subject" required minLength="3" maxLength="60"
                        placeholder="Your Subject"
                        className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none" 
                    />
                    <label for="message">Message:</label>

                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message" required
                        className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none">
                    </textarea>
                    <button
                        className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none">Submit
                    </button>
                </form>
            </section>
        </main>
    );
}

export default Home;

