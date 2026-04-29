const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-sm">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 py-5 flex items-center justify-between">
        <h1 className="text-sm tracking-wide whitespace-nowrap">
          ELEVATE SPACE <span className="font-bold">SOLUTIONS</span>
        </h1>

        <div className="hidden md:flex items-center gap-10 lg:gap-20">
          <nav className="flex items-center gap-8 lg:gap-20 text-sm font-medium text-gray-800">
            <a href="#" className="hover:text-primary transition">Services</a>
            <a href="#" className="hover:text-primary transition">Work</a>
            <a href="#" className="hover:text-primary transition">About</a>
            <a href="#" className="hover:text-primary transition">Contact</a>
          </nav>

          <button className="bg-primary text-white px-6 py-2 rounded-lg shadow-md hover:translate-y-[2px] hover:shadow-sm transition whitespace-nowrap">
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;