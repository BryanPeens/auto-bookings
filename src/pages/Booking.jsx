import React, { useState } from "react";

export default function Booking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);
    setSuccess(false);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("pickupLocation", pickupLocation);
    formData.append("dropoffLocation", dropoffLocation);
    formData.append("pickupDate", pickupDate);
    formData.append("dropoffDate", dropoffDate);

    fetch("https://getform.io/f/your-form-endpoint", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setName("");
          setEmail("");
          setPhone("");
          setPickupLocation("");
          setDropoffLocation("");
          setPickupDate("");
          setDropoffDate("");
          setLoading(false);
          setSuccess(true);
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
    <div className="w-full mt-16">
      <div className="py-12 flex justify-center items-center px-6 min-h-screen">
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col max-w-[900px] w-full bg-white shadow-lg rounded-lg p-8"
        >
          <div className="pb-6 text-center">
            <h2 className="text-4xl font-bold text-gray-800 uppercase mb-2">
              Book a Rental Vehicle
            </h2>
            <p className="text-gray-600">
              Fill out the form below to book your rental vehicle.
            </p>
          </div>
          <input
            className="bg-gray-100 p-4 text-gray-700 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => handleChange(e, setName)}
            required
          />
          <input
            className="bg-gray-100 p-4 text-gray-700 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => handleChange(e, setEmail)}
            required
          />
          <input
            className="bg-gray-100 p-4 text-gray-700 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="tel"
            placeholder="Phone"
            name="phone"
            value={phone}
            onChange={(e) => handleChange(e, setPhone)}
            required
            minLength={10}
            maxLength={15}
          />
          <input
            className="bg-gray-100 p-4 text-gray-700 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Pickup Location"
            name="pickupLocation"
            value={pickupLocation}
            onChange={(e) => handleChange(e, setPickupLocation)}
            required
          />
          <input
            className="bg-gray-100 p-4 text-gray-700 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Dropoff Location"
            name="dropoffLocation"
            value={dropoffLocation}
            onChange={(e) => handleChange(e, setDropoffLocation)}
            required
          />
          <input
            className="bg-gray-100 p-4 text-gray-700 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="date"
            name="pickupDate"
            value={pickupDate}
            onChange={(e) => handleChange(e, setPickupDate)}
            required
          />
          <input
            className="bg-gray-100 p-4 text-gray-700 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="date"
            name="dropoffDate"
            value={dropoffDate}
            onChange={(e) => handleChange(e, setDropoffDate)}
            required
          />
          <button
            className={`text-white px-6 py-3 rounded-lg ${
              loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            } transition-all duration-300 ease-in-out`}
            disabled={loading}
          >
            {loading ? "Booking..." : "Book Now"}
          </button>
          {success && (
            <p className="mt-4 text-green-500">
              Your booking has been successfully submitted!
            </p>
          )}
          {error && (
            <p className="mt-4 text-red-500">
              There was an error submitting your booking. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
