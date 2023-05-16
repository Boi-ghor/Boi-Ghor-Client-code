import React from "react";
import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <div className="px-4 py-6 mx-auto max-w-7xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary">Contact Us</h2>
        <p className="mt-2 text-primary">
          Have any questions or suggestions? Feel free to contact us!
        </p>
      </div>
      <form class="space-y-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="col-span-2">
            <label class="block font-bold mb-2 text-primary" for="name">
              Name <span class="text-red-500">*</span>
            </label>
            <input
              class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div class="col-span-2">
            <label class="block font-bold mb-2 text-primary" for="email">
              Email <span class="text-red-500">*</span>
            </label>
            <input
              class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div class="col-span-2">
            <label class="block font-bold mb-2 text-primary" for="subject">
              Subject <span class="text-red-500">*</span>
            </label>
            <input
              class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
              type="text"
              id="subject"
              name="subject"
              required
            />
          </div>
          <div class="col-span-2">
            <label class="block font-bold mb-2 text-primary" for="message">
              Message <span class="text-red-500">*</span>
            </label>
            <textarea
              class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
              id="message"
              name="message"
              rows="6"
              required
            ></textarea>
          </div>
        </div>
        <div class="text-right">
          <button
            class="bg-primary text-white py-2 px-6 rounded-lg hover:bg-red-600 focus:outline-none focus:bg-blue-600"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <div class="divider"></div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div className="bg-primary p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <span className="flex-shrink-0 w-12 h-12 bg-white rounded-lg text-white flex justify-center items-center">
              <i className="bx bx-envelope"></i>
            </span>
            <div className="ml-4">
              <h3 className="font-semibold text-lg text-primary-content">Email Us</h3>
              <p className="text-primary-content mt-1">
                Send us an email at{" "}
                <Link to="mailto:contact@ecommercebookshop.com" className="underline">
                  contact@ecommercebookshop.com
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-primary p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <span className="flex-shrink-0 w-12 h-12 bg-white rounded-lg text-white flex justify-center items-center">
              <i className="bx bx-phone"></i>
            </span>
            <div className="ml-4">
              <h3 className="font-semibold text-lg text-primary-content">Call Us</h3>
              <p className="text-primary-content mt-1">
                Call us at{" "}
                <Link to="tel:+1-800-123-4567" className="underline">
                  +1-800-123-4567
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-primary p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <span className="flex-shrink-0 w-12 h-12 bg-white rounded-lg text-white flex justify-center items-center">
              <i className="bx bx-map"></i>
            </span>
            <div className="ml-4">
              <h3 className="font-semibold text-lg text-primary-content">Visit Us</h3>
              <p className="text-primary-content mt-1">
                Come visit us at our store at: <br />
                123 Main Street, New York, NY 10001
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
