import React from 'react'

function Contact() {
  return (
  <>
   <section className=" text-black  py-12">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold text-center mb-8">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Contact Info */}
          <div className="space-y-4">
            <p className="text-lg">
              📍 Address: Dhaka, Bangladesh
            </p>
            <p className="text-lg">
              📞 Phone: +880 1234 567 890
            </p>
            <p className="text-lg">
              ✉️ Email: example@gmail.com
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded bg-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  </>
  )
}

export default Contact