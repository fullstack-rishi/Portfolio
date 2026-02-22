import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    isSending: boolean;
    responseMessage: string;
  }>({
    isSending: false,
    responseMessage: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ isSending: true, responseMessage: "" });

    try {
      const response = await fetch("https://formspree.io/f/xnnadlkb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          isSending: false,
          responseMessage: "Message sent successfully!",
        });

        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Error sending message");
      }
    } catch (error) {
      setStatus({
        isSending: false,
        responseMessage: "Error sending message. Please try again.",
      });
    }
  };

  const formFields = [
    { id: "name", type: "text", label: "Name", value: formData.name },
    { id: "email", type: "email", label: "Email", value: formData.email },
    {
      id: "message",
      type: "textarea",
      label: "Message",
      value: formData.message,
      rows: 4,
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-gray-900 text-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Contact Rushikesh Barve
      </h2>

      <p className="text-center text-gray-400 mb-6">
        Frontend Developer — React & TypeScript Specialist
      </p>

      {/* Direct Contact Options */}
      <div className="text-center mb-8 space-y-2">
        <p>
          📞 WhatsApp:{" "}
          <a
            href="https://wa.me/918180091357"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-400 hover:underline"
          >
            8180091357
          </a>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {formFields.map((field) => (
          <div key={field.id}>
            <label
              htmlFor={field.id}
              className="block text-sm font-medium mb-1"
            >
              {field.label}
            </label>

            {field.type === "textarea" ? (
              <textarea
                id={field.id}
                name={field.id}
                value={field.value}
                onChange={handleChange}
                required
                rows={field.rows}
                placeholder={`Enter your ${field.label.toLowerCase()}`}
                className="block w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition"
              />
            ) : (
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                value={field.value}
                onChange={handleChange}
                required
                placeholder={`Enter your ${field.label.toLowerCase()}`}
                className="block w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={status.isSending}
          className="w-full px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:bg-gray-500 transition"
        >
          {status.isSending ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status.responseMessage && (
        <p
          className={`mt-6 text-center text-sm ${
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

export default Contact;