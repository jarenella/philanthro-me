import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-teal-50 dark:bg-gray-900">
      <main className="mx-auto dark:bg-gray-900 min-h-screen container ">
        <section
          id="hero"
          className="flex scroll-mt-50 flex-col-reverse items-center justify-center gap-1 bg-teal-50 bg-white px:0 dark:bg-gray-900 sm:flex-row ">
          <article className="xs:w-1/3 sm:w-1/2">
            <h2 className="sm:text-4xl text-slate-900 max-w-md text-center text-4xl font-bold hover:motion-safe:animate-bounce dark:text-white sm:text-left">
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
            className="xs: w-1/2 sm:w-1/4"
            alt="hero"
          ></img>
        </section>
        <hr className="mx-auto bg-black dark:bg-white m-3"></hr>
        <section id="orgs" className="p-4">
          <Link to="/SearchOrgs">
            <h2 className="text-slate-900 mb-6 text-center text-4xl font-bold hover:motion-safe:animate-bounce dark:text-white ">
              Browse Organizations
            </h2>
          </Link>
          <ul className=" flex list-none items-center justify-center gap-8 sm:flex-row">
            <li >
              <Link
                to="/SearchOrgs"
                className="flex transform flex-col items-center rounded-3xl border border-solid bg-white py-6 px-2 shadow-lg transition duration-300 hover:-translate-y-4 hover:shadow-xl dark:border-gray-100 dark:bg-black"
              >
                <img
                  src={require("../assets/img/brain.png")}
                  alt="imageBrain"
                  className="w-1/2 xs:w-3/4"
                ></img>
                <p className="text-slate-900 dark:text-slate-500 mt-2 text-center text-lg lg:text-3xl dark:text-white hidden sm:block">
                  Mental Health
                </p>
              </Link>
            </li>
            <li >
              <Link
                to="/SearchOrgs"
                className="flex transform flex-col items-center rounded-3xl border border-solid bg-white py-6 px-2 shadow-lg transition duration-300 hover:-translate-y-4 hover:shadow-xl dark:border-gray-100 dark:bg-black"
              >
                <img
                  src={require("../assets/img/earth.png")}
                  alt="imageEarth"
                  className="w-1/2  xs:w-3/4"
                ></img>
                <p className="text-slate-900 dark:text-slate-500 mt-2 text-center text-lg lg:text-3xl dark:text-white hidden sm:block">
                  Conservation
                </p>
              </Link>
            </li>

            <li >
              <Link
                to="/SearchOrgs"
                className="flex transform flex-col items-center rounded-3xl border border-solid bg-white py-6 px-2 shadow-lg transition duration-300 hover:-translate-y-4 hover:shadow-xl dark:border-gray-100 dark:bg-black"
              >
                <img
                  src={require("../assets/img/puzzle.png")}
                  alt="imagePuzzle"
                  className="w-1/2  xs:w-3/4"
                ></img>
                <p className="text-slate-700 dark:text-slate-500 mt-2 text-center text-lg lg:text-3xl dark:text-white hidden sm:block">
                  Education
                </p>
              </Link>
            </li>
          </ul>
        </section>
        <hr className="mx-auto bg-black dark:bg-white m-6"></hr>
      </main>
    </div>
  );
}

export default Home;
