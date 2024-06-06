import React, { useState } from "react";
import "../assets/contact_styles.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);

    fetch("https://getform.io/f/zbzkxdga", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setLoading(false);
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setLoading(false);
        setError(true);
      });
  };

  return (
    <div name="contact" className="w-full mt-16 bg-gray-100">
      {/* Contact form */}
      <div className="py-12 flex justify-center items-center px-6 min-h-screen">
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col max-w-[800px] w-full bg-white shadow-lg rounded-lg p-8"
        >
          <div className="pb-6 text-center">
            <h2 className="text-4xl font-bold text-gray-800 uppercase mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-600">
              We would love to hear from you! Please fill out the form below.
            </p>
          </div>
          <input
            className="bg-gray-100 p-4 text-gray-700 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => handleChange(e, setName)}
            required={true}
          />
          <input
            className="bg-gray-100 p-4 text-gray-700 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => handleChange(e, setEmail)}
            required={true}
          />
          <input
            type="tel"
            className="bg-gray-100 p-4 text-gray-700 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="phone"
            placeholder="Phone"
            value={phone}
            onChange={(e) => handleChange(e, setPhone)}
            required={true}
            minLength={10}
            maxLength={10}
          />
          <textarea
            className="bg-gray-100 p-4 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="message"
            rows="4"
            placeholder="Message"
            value={message}
            onChange={(e) => handleChange(e, setMessage)}
            required={true}
          ></textarea>
          <button
            className={`text-white px-6 py-3 rounded-lg ${
              loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            } transition-all duration-300 ease-in-out`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
          {error && (
            <p className="mt-4 text-red-500">
              There was an error submitting the form. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
