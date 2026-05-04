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
    <section id="contact" className="bg-white py-16 sm:py-18 md:py-20 lg:py-24">
      <div className="w-full px-5 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        {/* Heading */}
        <div className="mb-10 md:mb-14 xl:mb-20 text-center">
          <div className="flex justify-center items-center gap-3">
            <span
              aria-hidden="true"
              className="w-8 sm:w-10 h-[4px] bg-[#c6a85b]"
            ></span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide">
              Contact Us
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-md sm:max-w-xl md:max-w-3xl xl:max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8 xl:gap-16">
          {/* Left Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 px-5 sm:px-6 md:px-10 xl:px-12 py-8 sm:py-10 md:py-12 xl:py-16">
            <h3 className="text-2xl md:text-[1.7rem] xl:text-3xl font-bold text-[#c6a85b] mb-5 md:mb-7 xl:mb-8 text-center xl:text-left">
              Let’s Work Together
            </h3>

            <p className="text-base md:text-lg xl:text-xl leading-relaxed mb-8 xl:mb-10 text-center xl:text-left">
              Thank you for your interest in our services.
              <br className="hidden sm:block" />
              We’re excited to hear from you.
            </p>

            <div className="space-y-7 md:space-y-8 xl:space-y-10">
              {/* Phone */}
              <a
                href="tel:07437851843"
                aria-label="Call us on 07437 851843"
                className="flex items-center gap-4 md:gap-5 group"
              >
                <div
                  aria-hidden="true"
                  className="w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 rounded-full bg-[#f4f4f4] flex items-center justify-center shrink-0 group-hover:bg-[#c6a85b] transition"
                >
                  <Phone
                    size={24}
                    className="text-[#c6a85b] group-hover:text-white transition"
                  />
                </div>

                <div>
                  <p className="text-base md:text-lg xl:text-xl">
                    Call us for inquiry
                  </p>
                  <p className="text-base md:text-lg xl:text-xl font-bold">
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
                  className="w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 rounded-full bg-[#f4f4f4] flex items-center justify-center shrink-0 group-hover:bg-[#c6a85b] transition"
                >
                  <Mail
                    size={24}
                    className="text-[#c6a85b] group-hover:text-white transition"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-base md:text-lg xl:text-xl">Email us</p>
                  <p className="text-sm sm:text-base md:text-lg xl:text-xl font-bold break-words leading-snug">
                    clean@kpelevatespacesolutionscom.com
                  </p>
                </div>
              </a>

              <div aria-hidden="true" className="h-px bg-gray-200"></div>

              {/* Location */}
              <div className="flex items-center gap-4 md:gap-5">
                <div
                  aria-hidden="true"
                  className="w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 rounded-full bg-[#f4f4f4] flex items-center justify-center shrink-0"
                >
                  <MapPin size={24} className="text-[#c6a85b]" />
                </div>

                <div>
                  <p className="text-base md:text-lg xl:text-xl">
                    Service Area
                  </p>
                  <p className="text-base md:text-lg xl:text-xl font-bold leading-snug">
                    Leicester & Surrounding Areas
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 px-5 sm:px-6 md:px-10 xl:px-12 py-8 sm:py-10 md:py-12 xl:py-16"
          >
            <h3 className="text-2xl md:text-[1.7rem] xl:text-3xl font-bold text-[#c6a85b] mb-7 md:mb-8 xl:mb-10 text-center xl:text-left">
              Get in Touch with Us
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8 xl:gap-10 mb-8 xl:mb-10">
              <div>
                <label className="block text-base md:text-lg xl:text-xl font-bold mb-3 xl:mb-4">
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
                <label className="block text-base md:text-lg xl:text-xl font-bold mb-3 xl:mb-4">
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

            <div className="mb-8 xl:mb-10">
              <label className="block text-base md:text-lg xl:text-xl font-bold mb-3 xl:mb-4">
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

            <div className="mb-8 xl:mb-10">
              <label className="block text-base md:text-lg xl:text-xl font-bold mb-3 xl:mb-4">
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
              className="w-full sm:w-[190px] bg-[#c6a85b] text-white py-3 rounded-lg text-base md:text-lg xl:text-xl font-medium shadow-md hover:translate-y-[2px] hover:shadow-sm transition mx-auto xl:mx-0 block"
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