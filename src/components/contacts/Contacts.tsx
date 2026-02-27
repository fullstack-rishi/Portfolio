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

    // ✅ Generate IST Time
    const indiaTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    try {
      const response = await fetch("https://formspree.io/f/maqdvboe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: indiaTime,
        }),
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
        throw new Error("Error sending message");
      }
    } catch {
      setStatus({
        isSending: false,
        responseMessage: "Error sending message. Please try again.",
      });
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 sm:px-6 md:px-8 py-10 bg-gray-900 rounded-xl shadow-lg text-white">
      
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        Contact Rushikesh Barve
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-md bg-white !text-black border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-md bg-white !text-black border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Enter your message"
            className="w-full px-4 py-2 rounded-md bg-white !text-black border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status.isSending}
          className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-md transition disabled:bg-gray-500"
        >
          {status.isSending ? "Sending..." : "Send Message"}
        </button>

        {/* Status Message */}
        {status.responseMessage && (
          <p
            className={`text-center text-sm ${
              status.responseMessage.includes("successfully")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {status.responseMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contacts;