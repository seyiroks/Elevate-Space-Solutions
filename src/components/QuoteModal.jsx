import { useEffect, useState } from "react";
import { CheckCircle, AlertCircle, X } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "71b6b00b-e01a-45ac-a467-6377e778c6e4";

const initialFormData = {
  name: "",
  phone: "",
  service: "",
  details: "",
};

const QuoteModal = ({ isOpen, onClose, selectedService = "" }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData({
        ...initialFormData,
        service: selectedService || "",
      });
      setStatus({ type: "", message: "" });
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
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

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
      subject: "New Quote Request - Elevate Space Solutions",
      from_name: "Elevate Space Solutions Website",
      name: formData.name,
      phone: formData.phone,
      service: formData.service,
      project_details: formData.details,
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
          message: "Quote request submitted successfully.",
        });

        setFormData(initialFormData);
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

  if (!isOpen) return null;

  return (
    <div
      onMouseDown={onClose}
      className="fixed inset-0 z-[100] bg-black/55 flex items-center justify-center px-5 sm:px-6 md:px-10 py-8 overflow-y-auto"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
        onMouseDown={(e) => e.stopPropagation()}
        className="relative bg-white w-full max-w-md sm:max-w-xl md:max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl px-5 sm:px-6 md:px-10 py-9 md:py-10 my-auto"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-black hover:text-primary transition"
          aria-label="Close quote form"
        >
          <X size={26} />
        </button>

        <h2
          id="quote-modal-title"
          className="text-2xl md:text-3xl font-bold text-primary text-center mb-3 pr-8"
        >
          Get a Free Quote
        </h2>

        <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
          Tell us what you need and we’ll get back to you with a tailored quote.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {status.type && (
            <div
              role="status"
              className={`flex items-start gap-3 rounded-xl border px-4 py-4 text-left ${
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
                    ? "Thank you for your request. We’ll get back to you shortly."
                    : "Please try again or contact us directly."}
                </p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
                className="w-full border-0 border-b-2 border-black pb-2 placeholder:text-gray-400 focus:outline-none focus:border-primary"
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
                className="w-full border-0 border-b-2 border-black pb-2 placeholder:text-gray-400 focus:outline-none focus:border-primary"
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

          <div>
            <label htmlFor="quote-details" className="block font-bold mb-4">
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
              className="w-full border-0 border-b-2 border-black resize-none placeholder:text-gray-400 focus:outline-none focus:border-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-[220px] mx-auto block bg-primary text-white py-3 rounded-lg text-lg font-medium shadow-md hover:translate-y-[2px] hover:shadow-sm transition disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {isSubmitting ? "Sending..." : "Get a Quote"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;