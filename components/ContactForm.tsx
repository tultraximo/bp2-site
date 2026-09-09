"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xbgjqyrq");

  if (state.succeeded) {
    return (
      <div className="rounded-xl border border-gray-300 bg-white p-8 text-center shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">Thank you</h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          Your message was sent to Blue Planet Building Panels. We will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm md:p-8"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-900">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-gray-900">
            Company / firm
          </label>
          <input
            id="company"
            type="text"
            name="company"
            className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-900">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
          />
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="role" className="block text-sm font-semibold text-gray-900">
            I am a
          </label>
          <select
            id="role"
            name="role"
            className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="Architect">Architect</option>
            <option value="Engineer">Engineer</option>
            <option value="Builder">Builder</option>
            <option value="Owner">Owner / Developer</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="source" className="block text-sm font-semibold text-gray-900">
            How did you hear about us?
          </label>
          <select
            id="source"
            name="source"
            className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="Article">Article / press</option>
            <option value="Search">Google / search</option>
            <option value="Referral">Referral</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
          Project or question
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="mt-6 rounded-md px-6 py-3 text-sm font-medium text-white hover:opacity-90 disabled:opacity-60"
        style={{ backgroundColor: "#3F6FEC" }}
      >
        {state.submitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
