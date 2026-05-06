import { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "71b6b00b-e01a-45ac-a467-6377e778c6e4";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status.type) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New Contact Form Message - Elevate Space Solutions",
      from_name: "Elevate Space Solutions Website",
      name: formData.name,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "Message sent successfully.",
        });

        setFormData({
          name: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-16 sm:py-18 md:py-20 lg:py-24">
      <div className="w-full px-5 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        {/* Heading */}
        <div className="mb-10 md:mb-14 xl:mb-20 text-center">
          <div className="flex justify-center items-center gap-3">
            <span
              aria-hidden="true"
              className="w-8 sm:w-10 h-[4px] bg-primary"
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
            <h3 className="text-2xl md:text-[1.7rem] xl:text-3xl font-bold text-primary mb-5 md:mb-7 xl:mb-8 text-center xl:text-left">
              Let’s Work Together
            </h3>

            <p className="text-base md:text-lg xl:text-xl leading-relaxed mb-8 xl:mb-10 text-center xl:text-left">
              Thank you for your interest in our services.
              <br className="hidden sm:block" />
              We’re excited to hear from you.
            </p>

            <div className="space-y-7 md:space-y-8 xl:space-y-10">
              <a
                href="tel:07437851843"
                aria-label="Call us on 07437 851843"
                className="flex items-center gap-4 md:gap-5 group"
              >
                <div
                  aria-hidden="true"
                  className="w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 rounded-full bg-[#f4f4f4] flex items-center justify-center shrink-0 group-hover:bg-primary transition"
                >
                  <Phone
                    size={24}
                    className="text-primary group-hover:text-white transition"
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

              <a
                href="mailto:clean@kpelevatespacesolutionscom.com"
                aria-label="Email us"
                className="flex items-center gap-4 md:gap-5 group"
              >
                <div
                  aria-hidden="true"
                  className="w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 rounded-full bg-[#f4f4f4] flex items-center justify-center shrink-0 group-hover:bg-primary transition"
                >
                  <Mail
                    size={24}
                    className="text-primary group-hover:text-white transition"
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

              <div className="flex items-center gap-4 md:gap-5">
                <div
                  aria-hidden="true"
                  className="w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 rounded-full bg-[#f4f4f4] flex items-center justify-center shrink-0"
                >
                  <MapPin size={24} className="text-primary" />
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
            <h3 className="text-2xl md:text-[1.7rem] xl:text-3xl font-bold text-primary mb-7 md:mb-8 xl:mb-10 text-center xl:text-left">
              Get in Touch with Us
            </h3>

            {status.type && (
              <div
                role="status"
                className={`mb-8 flex items-start gap-3 rounded-xl border px-4 py-4 text-left ${
                  status.type === "success"
                    ? "border-primary/25 bg-primary/10"
                    : "border-red-200 bg-red-50"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle
                    size={22}
                    className="text-primary shrink-0 mt-[2px]"
                  />
                ) : (
                  <AlertCircle
                    size={22}
                    className="text-red-500 shrink-0 mt-[2px]"
                  />
                )}

                <div>
                  <p className="font-semibold text-black">{status.message}</p>
                  <p className="text-sm text-gray-700 mt-1">
                    {status.type === "success"
                      ? "Thank you for reaching out. We’ll get back to you shortly."
                      : "Please try again or contact us directly."}
                  </p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8 xl:gap-10 mb-8 xl:mb-10">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-base md:text-lg xl:text-xl font-bold mb-3 xl:mb-4"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-0 border-b-2 border-black pb-2 placeholder:text-gray-400 focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-base md:text-lg xl:text-xl font-bold mb-3 xl:mb-4"
                >
                  Phone
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-0 border-b-2 border-black pb-2 placeholder:text-gray-400 focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <div className="mb-8 xl:mb-10">
              <label
                htmlFor="contact-service"
                className="block text-base md:text-lg xl:text-xl font-bold mb-3 xl:mb-4"
              >
                Service Required
              </label>
              <select
                id="contact-service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full border-0 border-b-2 border-black pb-2 bg-transparent focus:outline-none focus:border-primary"
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
              <label
                htmlFor="contact-message"
                className="block text-base md:text-lg xl:text-xl font-bold mb-3 xl:mb-4"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                required
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                className="w-full border-0 border-b-2 border-black resize-none placeholder:text-gray-400 focus:outline-none focus:border-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-[190px] bg-primary text-white py-3 rounded-lg text-base md:text-lg xl:text-xl font-medium shadow-md hover:translate-y-[2px] hover:shadow-sm transition mx-auto xl:mx-0 block disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;