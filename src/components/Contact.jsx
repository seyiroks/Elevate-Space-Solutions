import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-24">
          <span className="w-10 h-[4px] bg-[#c6a85b]"></span>
          <h2 className="text-4xl font-bold uppercase tracking-wide text-center">
            Contact Us
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_8px_rgba(0,0,0,0.25)] px-12 py-16">
            <h3 className="text-3xl font-bold text-[#c6a85b] mb-8">
              Let’s Work Together
            </h3>

            <p className="text-xl leading-snug mb-10">
              Thank you for your interest in our services.
              <br />
              We’re excited to hear from you.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[#f4f4f4] flex items-center justify-center shrink-0">
                  <Phone size={28} className="text-[#c6a85b]" />
                </div>

                <div>
                  <p className="text-xl">Call us for inquiry</p>
                  <p className="text-xl font-bold">+44-7700-123456</p>
                </div>
              </div>

              <div className="h-px bg-gray-200"></div>

              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[#f4f4f4] flex items-center justify-center shrink-0">
                  <Mail size={28} className="text-[#c6a85b]" />
                </div>

                <div>
                  <p className="text-xl">Email us</p>
                  <p className="text-xl font-bold break-all">
                    demo@elevatespacesolutions.com
                  </p>
                </div>
              </div>

              <div className="h-px bg-gray-200"></div>

              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[#f4f4f4] flex items-center justify-center shrink-0">
                  <MapPin size={28} className="text-[#c6a85b]" />
                </div>

                <div>
                  <p className="text-xl">Service Area</p>
                  <p className="text-xl font-bold leading-snug">
                    60 Queen Street
                    <br />
                    Bournemouth
                    <br />
                    BH27 7TY
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <form className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_8px_rgba(0,0,0,0.25)] px-12 py-16">
            <h3 className="text-3xl font-bold text-[#c6a85b] mb-10">
              Get in Touch with Us
            </h3>

            <div className="grid sm:grid-cols-2 gap-10 mb-10">
              <div>
                <label className="block text-xl font-bold mb-8">Name</label>
                <input
                  type="text"
                  className="w-full border-0 border-b-2 border-black pb-2 focus:outline-none focus:border-[#c6a85b]"
                />
              </div>

              <div>
                <label className="block text-xl font-bold mb-8">Phone</label>
                <input
                  type="tel"
                  className="w-full border-0 border-b-2 border-black pb-2 focus:outline-none focus:border-[#c6a85b]"
                />
              </div>
            </div>

            <div className="mb-10">
              <label className="block text-xl font-bold mb-8">
                Service Required
              </label>
              <select className="w-full border-0 border-b-2 border-black pb-2 bg-transparent focus:outline-none focus:border-[#c6a85b]">
                <option></option>
                <option>Cleaning</option>
                <option>Interior Repairs</option>
                <option>Interior Design & Decoration</option>
                <option>Full Property Transformation</option>
              </select>
            </div>

            <div className="mb-10">
              <label className="block text-xl font-bold mb-20">Message</label>
              <textarea
                rows="3"
                className="w-full border-0 border-b-2 border-black resize-none focus:outline-none focus:border-[#c6a85b]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-[190px] bg-[#c6a85b] text-white py-3 rounded-lg text-xl font-medium shadow-[8px_8px_14px_rgba(0,0,0,0.35)] hover:translate-y-[2px] hover:shadow-[0_2px_0_rgba(0,0,0,0.35)] transition"
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