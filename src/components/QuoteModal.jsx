import { X } from "lucide-react";

const QuoteModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center px-6"
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-xl px-6 md:px-10 py-10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-black"
          aria-label="Close quote form"
        >
          <X size={26} />
        </button>

        <h2 className="text-2xl md:text-3xl font-bold text-[#c6a85b] text-center mb-8">
          Get a Free Quote
        </h2>

        <form className="space-y-8">
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label className="block font-bold mb-4">Name</label>
              <input
                type="text"
                className="w-full border-0 border-b-2 border-black pb-2 focus:outline-none focus:border-[#c6a85b]"
              />
            </div>

            <div>
              <label className="block font-bold mb-4">Phone</label>
              <input
                type="tel"
                className="w-full border-0 border-b-2 border-black pb-2 focus:outline-none focus:border-[#c6a85b]"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold mb-4">Service Required</label>
            <select className="w-full border-0 border-b-2 border-black pb-2 bg-transparent focus:outline-none focus:border-[#c6a85b]">
              <option></option>
              <option>Cleaning</option>
              <option>Interior Repairs</option>
              <option>Interior Design & Decoration</option>
              <option>Full Property Transformation</option>
            </select>
          </div>

          <div>
            <label className="block font-bold mb-6">
              Project Details
            </label>
            <textarea
              rows="4"
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