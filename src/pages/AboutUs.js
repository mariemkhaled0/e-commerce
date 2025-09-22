import React from "react";
import PageHeading from "../common/PageHeading";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="mb-20 dark:bg-black dark:text-white">
      <PageHeading home="Home" pagename="About" />
      <div className="w-10/12 m-auto dark:bg-black dark:text-white">
        <div className="max-w-4xl mx-auto bg-white  rounded-2xl p-8 dark:bg-black dark:text-white">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
            About Us
          </h1>

          {/* Intro */}
          <p className="text-gray-600 text-lg text-center mb-10 dark:bg-black dark:text-white">
            Welcome to <span className="font-semibold">Our E-Commerce</span> —
            where shopping meets trust, quality, and care.
          </p>

          {/* Sections */}
          <div className="space-y-8">
            {/* Our Story */}
            <section className="dark:bg-black dark:text-white">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Our Story
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2024, we started with a simple idea: to make home
                essentials accessible, reliable, and affordable for everyone.
                What began as a small passion project has grown into a trusted
                online store serving customers across country/world.
              </p>
            </section>

            {/* Mission */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Our Mission
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>High-quality products at fair prices</li>
                <li>A seamless and secure shopping experience</li>
                <li>Excellent customer service every step of the way</li>
              </ul>
            </section>

            {/* Why Choose Us */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Why Choose Us?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
                <p>🚚 Fast & reliable delivery</p>
                <p>🌱 Eco-friendly packaging</p>
                <p>⭐ Thousands of satisfied customers</p>
                <p>🤝 Dedicated support team</p>
              </div>
            </section>

            {/* People */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                The People Behind the Brand
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We are more than just an online store — we’re a team of
                passionate individuals who work hard to bring you the best.
                Every product we offer is carefully selected with you in mind.
              </p>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <p className="text-gray-600 mb-4">
                Thank you for choosing{" "}
                <span className="font-semibold">E-Commerce</span>. We’re excited
                to be part of your story. Explore our collections, discover
                products you’ll love, and let us make your shopping experience
                memorable.
              </p>
              <Link
                to="/shop"
                className="inline-block bg-orange-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-orange-700 transition-colors duration-300"
              >
                Shop Now
              </Link>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
