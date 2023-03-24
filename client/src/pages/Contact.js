import React, { useState } from "react";
import { useMutation } from "@apollo/client";

// Contact Form mutation
import { SUBMIT_CONTACT_FORM } from "../utils/mutations";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [submitContactForm] = useMutation(SUBMIT_CONTACT_FORM, {
    onCompleted: () => setIsSubmitted(true),
    onError: (error) => console.log(error),
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    submitContactForm({ variables: { name, email, message } });
  };

  const handleNewForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitted(false);
  };

  return (
    <section className="bg-teal-50 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-md py-8 px-4 lg:py-16">
        <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
          Have any questions? We'd be happy to hear from you!
        </p>
        {!isSubmitted && (
        <form action="#" className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="YourName@mail.com"
              required
            ></input>
          </div>
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="Your name"
              required
            ></input>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows="6"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="mr-2 mb-2 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
          >
            Send Message
          </button>
        </form>
        )}
        {isSubmitted && (
          <div className="text-center">
            <p className="mb-8 text-center font-bold text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
              Thank you for submitting your message!
            </p>
            <button
              className="mx-auto mr-2 mb-2 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
              onClick={handleNewForm}
            >
              Submit NEW message
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
