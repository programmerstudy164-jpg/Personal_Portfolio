import React from "react";

const Contact = ({ TextColor, bg, dark }) => {
  return (
    <section
      id="contact"
      className={`min-h-screen flex items-center ${bg} justify-center px-6`}
    >
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-10">
        <div>
          <h2 className={`text-4xl ${TextColor} font-bold mb-4`}>Contact Me</h2>
          <p className={`text-gray-600 ${TextColor} mb-6`}>
            If you have a project in mind or just want to say hello, feel free
            to send me a message.
          </p>

          <ul className={`${TextColor} space-y-3`}>
            <li>📧 Email: programmerstudy164@gmail.com</li>
            <li>📍 Location: Philippines</li>
            <li>💼 GitHub: https://github.com/programmerstudy164-jpg</li>
          </ul>
        </div>

        <form className="flex flex-col gap-4 ">
          <input
            type="text"
            placeholder="Your Name"
            className={`border ${dark ? "border-white placeholder-white" : "border-black placeholder-black"}  p-3 rounded-lg outline-none focus:ring-2 focus:ring-text-primary`}
          />

          <input
            type="email"
            placeholder="Your Email"
            className={`border ${dark ? "border-white placeholder-white" : "border-black placeholder-black"} p-3 rounded-lg outline-none focus:ring-2 focus:ring-text-primary`}
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className={`border ${dark ? "border-white placeholder-white" : "border-black placeholder-black"} p-3 rounded-lg outline-none focus:ring-2 focus:ring-text-primary`}
          ></textarea>

          <button
            type="submit"
            className="bg-text-primary text-white py-3 rounded-lg hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
