import React from "react";

function Contact() {
  return (
    <section className="bg-gradient-to-r from-green-100 to-teal-50 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-md py-8 px-4 lg:py-16">
        <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
          Have any questions? We'd be happy to hear from you!
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              for="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="YourName@mail.com"
              required
            ></input>
          </div>
          <div>
            <label
              for="subject"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="Let us know how we can help you!"
              required
            ></input>
          </div>
          <div className="sm:col-span-2">
            <label
              for="message"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="6"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
