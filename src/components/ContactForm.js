import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import { db, hasFirebaseConfig } from "../firebase";

const INITIAL_STATE = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [form, setForm] = useState(INITIAL_STATE);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setErrorMessage("Please fill in your name, email, and message before submitting.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      if (db) {
        await addDoc(collection(db, "contactMessages"), {
          ...form,
          createdAt: serverTimestamp(),
        });
      }

      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
      const toEmail = process.env.REACT_APP_EMAILJS_TO_EMAIL;

      if (serviceId && templateId && publicKey && toEmail) {
        await emailjs.send(serviceId, templateId, {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
          to_email: toEmail,
        }, publicKey);
      } else {
        console.warn(
          "EmailJS environment variables missing. Submission saved to Firebase but email notification was skipped."
        );
      }

      setForm(INITIAL_STATE);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error?.message ||
          "Something went wrong while sending your message. Please try again later."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!hasFirebaseConfig && (
        <p className="text-sm text-amber-500">
          Firebase is not configured yet. Messages will only be emailed until you add your
          Firebase keys.
        </p>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 backdrop-blur"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 backdrop-blur"
          placeholder="youremail@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 backdrop-blur resize-none"
          placeholder="Hi Animesh, I’d love to connect about..."
        />
      </div>

      {errorMessage && (
        <p className="text-sm text-red-500" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-blue-400"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-sm text-emerald-600" role="status">
          Thank you! Your message is on its way.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
