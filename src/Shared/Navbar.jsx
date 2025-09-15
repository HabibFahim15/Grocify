import { useEffect, useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoClose, IoMenu, IoSearch } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-white  fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "drop-shadow-[0_4px_25px_rgba(0,0,0,0.1)]" : null
      }`}
    >
      <nav className="max-w-[1440px] mx-auto px-6 md:px-10 h-[14vh] flex items-center justify-between">
        {/* Logo */}
        <a className="text-3xl font-bold" href="#">
          Gr<span className="uppercase text-orange-500">o</span>cify
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-x-10">
          <li>
            <a
              className="font-semibold hover:text-orange-600 tracking-wider text-zinc-800"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="font-semibold hover:text-orange-600 tracking-wider text-zinc-800"
              href="#"
            >
              About
            </a>
          </li>
          <li className="md:hidden lg:flex">
            <a
              className="font-semibold  hover:text-orange-600 tracking-wider text-zinc-800"
              href="#"
            >
              Process
            </a>
          </li>
          <li>
            <a
              className="font-semibold hover:text-orange-600 tracking-wider text-zinc-800"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Nav Action */}
        <div className="flex items-center gap-x-4">
          {/* Input Field */}
          <div className="hidden sm:flex items-center p-1 border-2 border-orange-500 rounded-full">
            <input
              className="flex-1 h-[5vh] px-3 focus:outline-none"
              type="text"
              placeholder="Search..."
              autoComplete="off"
            />
            <button className="bg-gradient-to-b from-red-400 to-orange-500 h-10 w-10 flex justify-center items-center rounded-full text-white text-xl">
              <IoSearch />
            </button>
          </div>

          <a className="text-zinc-800 text-2xl" href="#">
            <GoHeartFill />
          </a>
          <a className="text-zinc-800 text-2xl" href="#">
            <HiShoppingBag />
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl text-orange-500 focus:outline-none"
          >
            {isOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-y-5 py-6 shadow-lg">
            <li>
              <a
                className="font-semibold text-zinc-800 hover:text-orange-600"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="font-semibold text-zinc-800 hover:text-orange-600"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="font-semibold text-zinc-800 hover:text-orange-600"
                href="#"
              >
                Process
              </a>
            </li>
            <li>
              <a
                className="font-semibold text-zinc-800 hover:text-orange-600"
                href="#"
              >
                Contact
              </a>
            </li>

            {/* Mobile Search */}
            <div className="flex items-center w-11/12 p-1 border-2 border-orange-500 rounded-full">
              <input
                className="flex-1 h-[5vh] px-3 focus:outline-none"
                type="text"
                placeholder="Search..."
                autoComplete="off"
              />
              <button className="bg-gradient-to-b from-red-400 to-orange-500 h-10 w-10 flex justify-center items-center rounded-full text-white text-xl">
                <IoSearch />
              </button>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
