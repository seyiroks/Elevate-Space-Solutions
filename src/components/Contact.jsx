import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message sent successfully!");

    setFormData({
      name: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
        {/* Heading */}
        <div className="mb-14 md:mb-20 text-center">
          <div className="flex justify-center items-center gap-3">
            <span
              aria-hidden="true"
              className="w-10 h-[4px] bg-[#c6a85b]"
            ></span>

            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
              Contact Us
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 px-6 md:px-12 py-10 md:py-16">
            <h3 className="text-2xl md:text-3xl font-bold text-[#c6a85b] mb-6 md:mb-8 text-center md:text-left">
              Let’s Work Together
            </h3>

            <p className="text-base md:text-xl leading-relaxed mb-8 md:mb-10 text-center md:text-left">
              Thank you for your interest in our services.
              <br className="hidden sm:block" />
              We’re excited to hear from you.
            </p>

            <div className="space-y-8 md:space-y-10">
              {/* Phone */}
              <a
                href="tel:07437851843"
                aria-label="Call us on 07437 851843"
                className="flex items-center gap-4 md:gap-5 group"
              >
                <div
                  aria-hidden="true"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#f4f4f4] flex items-center justify-center shrink-0 group-hover:bg-[#c6a85b] transition"
                >
                  <Phone
                    size={24}
                    className="text-[#c6a85b] group-hover:text-white transition"
                  />
                </div>

                <div>
                  <p className="text-base md:text-xl">Call us for inquiry</p>
                  <p className="text-base md:text-xl font-bold">
                    07437 851843
                  </p>
                </div>
              </a>

              <div aria-hidden="true" className="h-px bg-gray-200"></div>

              {/* Email */}
              <a
                href="mailto:clean@kpelevatespacesolutionscom.com"
                aria-label="Email us"
                className="flex items-center gap-4 md:gap-5 group"
              >
                <div
                  aria-hidden="true"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#f4f4f4] flex items-center justify-center shrink-0 group-hover:bg-[#c6a85b] transition"
                >
                  <Mail
                    size={24}
                    className="text-[#c6a85b] group-hover:text-white transition"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-base md:text-xl">Email us</p>
                  <p className="text-base md:text-xl font-bold break-all">
                    clean@kpelevatespacesolutionscom.com
                  </p>
                </div>
              </a>

              <div aria-hidden="true" className="h-px bg-gray-200"></div>

              {/* Location */}
              <div className="flex items-center gap-4 md:gap-5">
                <div
                  aria-hidden="true"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#f4f4f4] flex items-center justify-center shrink-0"
                >
                  <MapPin size={24} className="text-[#c6a85b]" />
                </div>

                <div>
                  <p className="text-base md:text-xl">Service Area</p>
                  <p className="text-base md:text-xl font-bold leading-snug">
                    Leicester & Surrounding Areas
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 px-6 md:px-12 py-10 md:py-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#c6a85b] mb-8 md:mb-10 text-center md:text-left">
              Get in Touch with Us
            </h3>

            <div className="grid sm:grid-cols-2 gap-8 md:gap-10 mb-8 md:mb-10">
              <div>
                <label className="block text-base md:text-xl font-bold mb-4">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-0 border-b-2 border-black pb-2 placeholder:text-gray-400 focus:outline-none focus:border-[#c6a85b]"
                />
              </div>

              <div>
                <label className="block text-base md:text-xl font-bold mb-4">
                  Phone
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-0 border-b-2 border-black pb-2 placeholder:text-gray-400 focus:outline-none focus:border-[#c6a85b]"
                />
              </div>
            </div>

            <div className="mb-8 md:mb-10">
              <label className="block text-base md:text-xl font-bold mb-4">
                Service Required
              </label>
              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full border-0 border-b-2 border-black pb-2 bg-transparent focus:outline-none focus:border-[#c6a85b]"
              >
                <option value="">Select a service</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Interior Repairs">Interior Repairs</option>
                <option value="Interior Design & Decoration">
                  Interior Design & Decoration
                </option>
              </select>
            </div>

            <div className="mb-8 md:mb-10">
              <label className="block text-base md:text-xl font-bold mb-4">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                className="w-full border-0 border-b-2 border-black resize-none placeholder:text-gray-400 focus:outline-none focus:border-[#c6a85b]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full sm:w-[190px] bg-[#c6a85b] text-white py-3 rounded-lg text-lg md:text-xl font-medium shadow-md hover:translate-y-[2px] hover:shadow-sm transition mx-auto md:mx-0 block"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;