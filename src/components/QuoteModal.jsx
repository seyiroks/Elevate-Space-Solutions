import { useEffect, useState } from "react";
import { X } from "lucide-react";

const initialFormData = {
  name: "",
  phone: "",
  service: "",
  details: "",
};

const QuoteModal = ({ isOpen, onClose, selectedService = "" }) => {
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (isOpen) {
      setFormData({
        ...initialFormData,
        service: selectedService || "",
      });
    }
  }, [isOpen, selectedService]);

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscClose);
    }

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Quote request submitted successfully!");

    setFormData(initialFormData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      onMouseDown={onClose}
      className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center px-6 py-8 overflow-y-auto"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
        onMouseDown={(e) => e.stopPropagation()}
        className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl px-6 md:px-10 py-10 my-auto"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-black hover:text-[#c6a85b] transition"
          aria-label="Close quote form"
        >
          <X size={26} />
        </button>

        <h2
          id="quote-modal-title"
          className="text-2xl md:text-3xl font-bold text-[#c6a85b] text-center mb-3"
        >
          Get a Free Quote
        </h2>

        <p className="text-center text-gray-600 mb-8">
          Tell us what you need and we’ll get back to you with a tailored quote.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label htmlFor="quote-name" className="block font-bold mb-4">
                Name
              </label>
              <input
                id="quote-name"
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
              <label htmlFor="quote-phone" className="block font-bold mb-4">
                Phone
              </label>
              <input
                id="quote-phone"
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

          <div>
            <label htmlFor="quote-service" className="block font-bold mb-4">
              Service Required
            </label>
            <select
              id="quote-service"
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

          <div>
            <label htmlFor="quote-details" className="block font-bold mb-6">
              Project Details
            </label>
            <textarea
              id="quote-details"
              name="details"
              rows="4"
              required
              placeholder="Tell us about the property, service needed, timeline, or any important details..."
              value={formData.details}
              onChange={handleChange}
              className="w-full border-0 border-b-2 border-black resize-none placeholder:text-gray-400 focus:outline-none focus:border-[#c6a85b]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full sm:w-[220px] mx-auto block bg-[#c6a85b] text-white py-3 rounded-lg text-lg font-medium shadow-md hover:translate-y-[2px] hover:shadow-sm transition"
          >
            Get a Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;