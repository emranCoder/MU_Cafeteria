import React, { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="order-section p-5 ">
<<<<<<< HEAD
      <div className="container  rounded-xl px-10 py-10 max-sm:p-5 md:px-5 bg-white">
        <div className="container-row max-sm:justify-center">
          <div className="col-lg-6 col-md-6 col-sm-12 pr-1">
            <div className="contact-box p-10 flex items-center h-full ">
              <ul className="space-y-12 ">
                <li className="flex gap-x-5 items-center">
                  <div className="cnt-icon text-red-600 text-2xl">
                    <FaPhoneAlt />
                  </div>
                  <p className="text-slate-600 text-lg border-l-4 border-red-600">
                    <span className="ml-4"> +8801800000000</span>
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <div className="cnt-icon text-red-600 text-2xl">
                    <IoMdMail />
                  </div>
                  <p className="text-slate-600 text-lg border-l-4 border-red-600">
                    <span className="ml-4">contact@mail.com</span>
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <div className="cnt-icon text-red-600 text-2xl ">
                    <FaLocationDot />
                  </div>
                  <p className="text-slate-600 text-lg border-l-4 border-red-600">
                    <span className="ml-4">Sylhet,Bangladesh</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 pl-1">
            <form
              action="#"
              className="space-y-2 border rounded-xl shadow p-10"
=======
      <div className="container  rounded-xl px-10 py-10 max-sm:p-5 max-md:px-5 bg-white">
        <div className="container-row justify-center">
          <div className="col-lg-12 mb-5">
            <h3 className="flex justify-center text-4xl font-semibold text-slate-600">
              Contact Us
            </h3>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 pr-1">
            <div className="contact-box p-10 flex items-center h-full ">
              <ul className="lg:space-y-12 lg:space-x-0 md:space-y-0 md:space-x-5 flex lg:flex-col md:flex-row space-y-12 flex-col">
                <li className="flex gap-x-5  items-center">
                  <div className="cnt-icon text-red-600 text-2xl">
                    <FaPhoneAlt />
                  </div>
                  <p className="text-slate-600 text-lg border-l-4 border-red-600">
                    <span className="ml-4"> +8801800000000</span>
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <div className="cnt-icon text-red-600 text-2xl">
                    <IoMdMail />
                  </div>
                  <p className="text-slate-600 text-lg border-l-4 border-red-600">
                    <span className="ml-4">contact@mail.com</span>
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <div className="cnt-icon text-red-600 text-2xl ">
                    <FaLocationDot />
                  </div>
                  <p className="text-slate-600 text-lg border-l-4 border-red-600">
                    <span className="ml-4">Sylhet,Bangladesh</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 pl-1 md:mt-10">
            <form
              action="#"
              className="space-y-2 p-10 rounded-xl border shadow"
>>>>>>> 252cb2136af2df9dc14d9e842d695a612de49e1c
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                >
                  Your email
                </label>

                <input
                  type="email"
                  placeholder="Email.."
<<<<<<< HEAD
                  className="input input-bordered w-full input-md text-slate-700 focus-within:border-red-500 focus-within:outline-none 
=======
                  className="input input-bordered w-full input-md text-slate-700 focus-within:border-slate-500 focus-within:outline-none 
>>>>>>> 252cb2136af2df9dc14d9e842d695a612de49e1c
                  bg-gray-50"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                >
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Subject..."
<<<<<<< HEAD
                  className="input input-bordered w-full input-md text-slate-700 focus-within:border-red-500 focus-within:outline-none 
=======
                  className="input input-bordered w-full input-md text-slate-700 focus-within:border-slate-500 focus-within:outline-none 
>>>>>>> 252cb2136af2df9dc14d9e842d695a612de49e1c
                  bg-gray-50"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
<<<<<<< HEAD
                  className="textarea textarea-bordered w-full text-slate-700 focus-within:border-red-500 !outline-none bg-gray-50"
=======
                  className="textarea textarea-bordered w-full text-slate-700 focus-within:border-slate-500 !outline-none bg-gray-50"
                  rows={3}
>>>>>>> 252cb2136af2df9dc14d9e842d695a612de49e1c
                  placeholder="Leave Comment.."
                ></textarea>
              </div>
              <button
                type="submit"
<<<<<<< HEAD
                className="btn  min-h-full  h-full py-3 px-5 rounded-full border-red-600 bg-transparent hover:bg-red-500 hover:text-white text-red-500"
=======
                className="btn mt-5  min-h-full  h-full py-3 px-5 rounded-full border-slate-600 bg-transparent hover:bg-slate-500 hover:text-white text-slate-500"
>>>>>>> 252cb2136af2df9dc14d9e842d695a612de49e1c
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
