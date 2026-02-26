import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    isSending: false,
    responseMessage: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ isSending: true, responseMessage: "" });

    try {
      const response = await fetch("https://formspree.io/f/maqdvboe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          isSending: false,
          responseMessage: "Message sent successfully!",
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      setStatus({
        isSending: false,
        responseMessage: "Error sending message. Please try again.",
      });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-gray-900 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">
        Contact Rushikesh Barve
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-2 text-white">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2 text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-2 text-white">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Enter your message"
            className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status.isSending}
          className="w-full py-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-md transition disabled:bg-gray-500"
        >
          {status.isSending ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status.responseMessage && (
        <p
          className={`mt-4 text-center text-sm ${
            status.responseMessage.includes("successfully")
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {status.responseMessage}
        </p>
      )}
    </div>
  );
};

export default Contacts;