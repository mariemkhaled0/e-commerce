import React, { useState } from "react";
import PageHeading from "../common/PageHeading";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // here you could integrate EmailJS, Firebase, or API call
    setSubmitted(true);
  };

  return (
    <section className="mb-20">
      <PageHeading home="Home" pagename="Contact" />
      <div className="w-10/12 m-auto">
        <div className="min-h-screen py-12 px-6">
          <div className="max-w-4xl mx-auto dark:bg-gray-200 bg-white shadow-lg rounded-2xl p-8">
            {!submitted ? (
              <>
                {/* Heading */}
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
                  Contact Us
                </h1>
                <p className="text-gray-600 text-center mb-10">
                  Have questions or need help? We’d love to hear from you. Fill
                  out the form below or reach us through our contact details.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Contact Form */}
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Your email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-600 focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Message
                      </label>
                      <textarea
                        rows="4"
                        placeholder="Write your message..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-600 focus:outline-none"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-orange-600 text-white py-3 rounded-xl font-medium hover:bg-orange-700 transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </form>

                  {/* Contact Info */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        Get in Touch
                      </h2>
                      <p className="text-gray-600">
                        Our team is here to assist you. Whether you have
                        questions about our products, shipping, or anything
                        else, feel free to reach out.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <p className="text-gray-600">
                        📍 <span className="font-medium">Address:</span> 123
                        Main Street, Cairo, Egypt
                      </p>
                      <p className="text-gray-600">
                        📧 <span className="font-medium">Email:</span>{" "}
                        support@yourstore.com
                      </p>
                      <p className="text-gray-600">
                        📞 <span className="font-medium">Phone:</span> +20 123
                        456 7890
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        Business Hours
                      </h2>
                      <p className="text-gray-600">
                        Monday – Friday: 9am – 6pm
                      </p>
                      <p className="text-gray-600">Saturday: 10am – 4pm</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              // Success Message
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-green-600 mb-4">
                  ✅ Message Sent Successfully!
                </h2>
                <p className="text-gray-600">
                  Thank you for reaching out. We’ll get back to you as soon as
                  possible.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
