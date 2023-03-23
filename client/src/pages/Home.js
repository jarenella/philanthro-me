import React from "react";
function Home() {
  return (
    <div className="bg-teal-50 dark:bg-gray-900">
      <main className="mx-auto dark:bg-gray-900">
        <section
          id="hero"
          className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 bg-teal-50 bg-white p-6 dark:bg-gray-900 sm:flex-row"
        >
          <article className="sm:w-1/2">
            <h2 className="sm:text-5sl text-slate-900 max-w-md text-center text-4xl font-bold hover:motion-safe:animate-bounce dark:text-white sm:text-left">
              When You Give,{" "}
              <span className=" text-indigo-700 dark:text-indigo-300">
                You Also Receive!{" "}
              </span>
            </h2>
            <p className="text-slate-700 dark:text-slate-400 mt-4 max-w-md text-center text-2xl sm:text-left">
              {" "}
              Ready to give back to the community in an unique way?
            </p>
            <p className="text-slate-700 dark:text-slate-400 mt-4 max-w-md text-center text-2xl sm:text-left"></p>
          </article>
          <img
            src={require("../assets/img/hero.png")}
            className="w-1/2"
            alt="hero"
          ></img>
        </section>
        <hr className="mx-auto bg-black dark:bg-white"></hr>
        <section id="orgs" className="my-12 p-6">
          <a href="/SearchOrgs">
            <h2 className="text-slate-900 mb-6 text-center text-4xl font-bold hover:motion-safe:animate-bounce dark:text-white sm:text-5xl">
              {" "}
              Browse Organizations
            </h2>
          </a>
          <ul className="mx-auto my-12 flex list-none flex-col items-center justify-center gap-8 sm:flex-row">
            <li className="sm:flex sm:w-2/3">
              <a
                href="/SearchOrgs"
                className="flex transform flex-col items-center rounded-3xl border border-solid bg-white py-6 px-2 shadow-lg transition duration-300 hover:-translate-y-4 hover:shadow-xl dark:border-gray-100 dark:bg-black"
              >
                <img
                  src={require("../assets/img/brain.png")}
                  alt="imageBrain"
                  className="mb-6 w-1/2"
                ></img>
                <h3 className="text-slate-500 hidden text-center text-3xl dark:text-white">
                  {" "}
                  Mental Health
                </h3>
                <p className="text-slate-900 dark:text-slate-500 mt-2 text-center text-3xl">
                  {" "}
                  Mental Health
                </p>
                <p className="text-slate-900 dark:text-slate-500 mt-2 text-center text-2xl sm:hidden">
                  {" "}
                  View All
                </p>
              </a>
            </li>
            <li className="sm:flex sm:w-2/3">
              <a
                href="/SearchOrgs"
                className="flex transform flex-col items-center rounded-3xl border border-solid bg-white py-6 px-2 shadow-lg transition duration-300 hover:-translate-y-4 hover:shadow-xl dark:border-gray-100 dark:bg-black"
              >
                <img
                  src={require("../assets/img/earth.png")}
                  alt="imageEarth"
                  className="mb-6 w-1/2"
                ></img>
                <h3 className="text-slate-500 hidden text-center text-3xl dark:text-white">
                  {" "}
                  Mental Health
                </h3>
                <p className="text-slate-900 dark:text-slate-500 mt-2 text-center text-3xl">
                  {" "}
                  Conservation
                </p>
                <p className="text-cente text-slate-900 dark:text-slate-500 mt-2 text-2xl sm:hidden">
                  {" "}
                  View All
                </p>
              </a>
            </li>

            <li className="sm:flex sm:w-2/3">
              <a
                href="/SearchOrgs"
                className="flex transform flex-col items-center rounded-3xl border border-solid bg-white py-6 px-2 shadow-lg transition duration-300 hover:-translate-y-4 hover:shadow-xl dark:border-gray-100 dark:bg-black"
              >
                <img
                  src={require("../assets/img/puzzle.png")}
                  alt="imagePuzzle"
                  className="mb-6 w-1/2"
                ></img>
                <h3 className="text-slate-500 hidden text-center text-3xl dark:text-white">
                  {" "}
                  Mental Health
                </h3>
                <p className="text-slate-900 dark:text-slate-500 mt-2 text-center text-3xl">
                  {" "}
                  Education
                </p>
                <p className="text-cente text-slate-900 dark:text-slate-500 mt-2 text-2xl sm:hidden">
                  {" "}
                  View All
                </p>
              </a>
            </li>
          </ul>
        </section>
        <hr className="mx-auto bg-black dark:bg-white"></hr>
      </main>
    </div>
  );
}

export default Home;
