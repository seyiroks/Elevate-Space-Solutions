const Footer = () => {
  return (
    <footer className="relative py-20 overflow-hidden text-black">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/footer-bg.jpg"
          alt="Footer Background"
          className="w-full h-full object-cover object-[center_100%] scale-105 blur-[2px]"
        />
        <div className="absolute inset-0 bg-white/75"></div>
      </div>

      {/* Content */}
      <div className="relative w-full px-6 md:px-12 lg:px-20 xl:px-32">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start mb-20">

          {/* LEFT */}
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl font-semibold tracking-wide">
                ELEVATE SPACE <span className="font-bold">SOLUTIONS</span>
              </h3>
              <p className="mt-2 text-lg">
                Cleaning | Repairs | Design
              </p>
            </div>

            <div className="space-y-4 text-lg">
              <p>Registered in England & Wales</p>
              <p>Company No: 1234567890</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:ml-auto md:text-left">
            <h4 className="text-2xl font-semibold mb-6">Navigation</h4>

            <ul className="space-y-4 text-xl">
              <li className="hover:text-[#c6a85b] cursor-pointer">Services</li>
              <li className="hover:text-[#c6a85b] cursor-pointer">Work</li>
              <li className="hover:text-[#c6a85b] cursor-pointer">About</li>
              <li className="hover:text-[#c6a85b] cursor-pointer">Contact Us</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center text-lg">
          © 2026 Elevate Space Solutions. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;