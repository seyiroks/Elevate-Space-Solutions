import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-white py-20">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
        
        {/* Heading */}
        <div className="mb-14 md:mb-24">
          <div className="flex items-start justify-center gap-3">
            <span className="w-10 h-[4px] bg-[#c6a85b] mt-3 shrink-0"></span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide leading-tight text-center">
              Contact Us
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          
          {/* Left Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-md px-6 md:px-12 py-10 md:py-16">
            
            <h3 className="text-2xl md:text-3xl font-bold text-[#c6a85b] mb-6 md:mb-8 text-center">
              Let’s Work Together
            </h3>

            <p className="text-base md:text-xl leading-relaxed mb-8 md:mb-10 text-center">
              Thank you for your interest in our services.
              <br className="hidden sm:block" />
              We’re excited to hear from you.
            </p>

            <div className="space-y-8 md:space-y-10">
              
              <div className="flex items-center gap-4 md:gap-5">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#f4f4f4] flex items-center justify-center shrink-0">
                  <Phone size={24} className="text-[#c6a85b]" />
                </div>

                <div>
                  <p className="text-base md:text-xl">Call us for inquiry</p>
                  <p className="text-base md:text-xl font-bold">
                    07437 851843
                  </p>
                </div>
              </div>

              <div className="h-px bg-gray-200"></div>

              <div className="flex items-center gap-4 md:gap-5">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#f4f4f4] flex items-center justify-center shrink-0">
                  <Mail size={24} className="text-[#c6a85b]" />
                </div>

                <div className="min-w-0">
                  <p className="text-base md:text-xl">Email us</p>
                  <p className="text-base md:text-xl font-bold break-words">
                    clean@kpelevatespacesolutionscom.com
                  </p>
                </div>
              </div>

              <div className="h-px bg-gray-200"></div>

              <div className="flex items-center gap-4 md:gap-5">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#f4f4f4] flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-[#c6a85b]" />
                </div>

                <div>
                  <p className="text-base md:text-xl">Service Area</p>
                  <p className="text-base md:text-xl font-bold leading-snug">
                    Leicester &
                    <br />
                    Surrounding Areas
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Card */}
          <form className="bg-white rounded-2xl border border-gray-100 shadow-md px-6 md:px-12 py-10 md:py-16">
            
            <h3 className="text-2xl md:text-3xl font-bold text-[#c6a85b] mb-8 md:mb-10 text-center">
              Get in Touch with Us
            </h3>

            <div className="grid sm:grid-cols-2 gap-8 md:gap-10 mb-8 md:mb-10">
              
              <div>
                <label className="block text-base md:text-xl font-bold mb-4 md:mb-8">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border-0 border-b-2 border-black pb-2 focus:outline-none focus:border-[#c6a85b]"
                />
              </div>

              <div>
                <label className="block text-base md:text-xl font-bold mb-4 md:mb-8">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full border-0 border-b-2 border-black pb-2 focus:outline-none focus:border-[#c6a85b]"
                />
              </div>

            </div>

            <div className="mb-8 md:mb-10">
              <label className="block text-base md:text-xl font-bold mb-4 md:mb-8">
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

            <div className="mb-8 md:mb-10">
              <label className="block text-base md:text-xl font-bold mb-10 md:mb-20">
                Message
              </label>
              <textarea
                rows="3"
                className="w-full border-0 border-b-2 border-black resize-none focus:outline-none focus:border-[#c6a85b]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full sm:w-[190px] bg-[#c6a85b] text-white py-3 rounded-lg text-lg md:text-xl font-medium shadow-md hover:translate-y-[2px] hover:shadow-sm transition mx-auto block"
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