import { useEffect, useState } from "react";
import { X } from "lucide-react";

const QuoteModal = ({ isOpen, onClose, selectedService = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    details: "",
  });

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        service: selectedService || prev.service,
      }));
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

    setFormData({
      name: "",
      phone: "",
      service: "",
      details: "",
    });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center px-6 py-8 overflow-y-auto"
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-xl px-6 md:px-10 py-10 my-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-black hover:text-[#c6a85b] transition"
          aria-label="Close quote form"
        >
          <X size={26} />
        </button>

        <h2 className="text-2xl md:text-3xl font-bold text-[#c6a85b] text-center mb-8">
          Get a Free Quote
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className="block font-bold mb-4">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border-0 border-b-2 border-black pb-2 focus:outline-none focus:border-[#c6a85b]"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-bold mb-4">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-0 border-b-2 border-black pb-2 focus:outline-none focus:border-[#c6a85b]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block font-bold mb-4">
              Service Required
            </label>
            <select
              id="service"
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
              <option value="Full Property Transformation">
                Full Property Transformation
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="details" className="block font-bold mb-6">
              Project Details
            </label>
            <textarea
              id="details"
              name="details"
              rows="4"
              required
              value={formData.details}
              onChange={handleChange}
              className="w-full border-0 border-b-2 border-black resize-none focus:outline-none focus:border-[#c6a85b]"
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