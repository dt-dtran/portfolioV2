import Profile from "./Profile";
import { useState } from "react";
import { Logo, LogoIcon } from "../assets/index.js";
import { Link as ScrollLink } from "react-scroll";
import { Linkedin, Github } from "../constants/svg";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div>
        <header className="absolute inset-x-0 top-0 z-50 pt-4">
          <nav className="w-full" aria-label="Global">
            <div className="flex items-center justify-between lg:px-8 md:px-2 sm:px-2 ml-2">
              <div className="flex lg:flex-1">
                <ScrollLink
                  to="about-section"
                  smooth={true}
                  duration={400}
                  className="-m-1.5 p-1.5 cursor-pointer hover:text-[#DAC3D4]"
                >
                  <span className="sr-only"></span>
                  <img className="h-8 w-auto" src={Logo} alt="logo" />
                </ScrollLink>
              </div>
              <div className="flex lg:hidden fixed top-4 right-0 pt-2">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 mr-2 cursor-pointer"
                  onClick={handleMenuToggle}
                  style={{ color: "#39CCCC" }}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="hidden lg:flex lg:gap-x-5 xl:gap-x-9 pl-2 pr-2">
                <ScrollLink
                  to="about-section"
                  smooth={true}
                  duration={400}
                  className="text-md xl:text-lg font-semibold leading-6 text-gray-300 cursor-pointer hover:text-[#DAC3D4]"
                >
                  About
                </ScrollLink>
                <ScrollLink
                  to="projects-section"
                  smooth={true}
                  duration={400}
                  className="text-md xl:text-lg font-semibold leading-6 text-gray-300 cursor-pointer hover:text-[#DAC3D4]"
                >
                  Projects
                </ScrollLink>
                <ScrollLink
                  to="experience-section"
                  smooth={true}
                  duration={400}
                  className="text-md xl:text-lg font-semibold leading-6 text-gray-300 cursor-pointer hover:text-[#DAC3D4]"
                >
                  Experience
                </ScrollLink>
                <ScrollLink
                  to="testimonials-section"
                  smooth={true}
                  duration={400}
                  className="text-md xl:text-lg font-semibold leading-6 text-gray-300 cursor-pointer hover:text-[#DAC3D4]"
                >
                  Testimonials
                </ScrollLink>
                <ScrollLink
                  to="contact-section"
                  smooth={true}
                  duration={400}
                  className="text-md xl:text-lg font-semibold leading-6 text-gray-300 cursor-pointer hover:text-[#DAC3D4]"
                >
                  Contact
                </ScrollLink>
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a
                  href="https://www.linkedin.com/in/diana-tran-capm/"
                  className="cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Profile />
                </a>
              </div>
            </div>
          </nav>
          {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
          <div
            className={`${isMenuOpen ? "block" : "hidden"} lg:hidden`}
            role="dialog"
            aria-modal="true"
          >
            {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
            <div className="fixed inset-0 z-50"></div>
            <div className="fixed inset-y-0 right-0 z-50 bg-slate-800 px-6 py-6 xs:w-[200px] sm:w-[300px] sm:ring-1 sm:ring-gray-300/10 xs:ring-1 xs:ring-gray-300/10">
              <div className="flex items-center justify-between">
                <div className="-m-1.5 p-1.5">
                  <span className="sr-only"></span>
                  <img className="h-8 w-auto" src={LogoIcon} alt="" />
                </div>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-slate-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <ScrollLink
                      to="about-section"
                      smooth={true}
                      duration={400}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-400 hover:bg-gray-50 cursor-pointer"
                      onClick={handleMenuToggle}
                    >
                      About
                    </ScrollLink>
                    <ScrollLink
                      to="projects-section"
                      smooth={true}
                      duration={400}
                      className="-mx-3 block rounded-lg px-3 py-2
                      text-base font-semibold leading-7 text-slate-400
                      hover:bg-gray-50 cursor-pointer"
                      onClick={handleMenuToggle}
                    >
                      Projects
                    </ScrollLink>
                    <ScrollLink
                      to="experience-section"
                      smooth={true}
                      duration={400}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-400 hover:bg-gray-50 cursor-pointer"
                      onClick={handleMenuToggle}
                    >
                      Experience
                    </ScrollLink>
                    <ScrollLink
                      to="testimonials-section"
                      smooth={true}
                      duration={400}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-400 hover:bg-gray-50 cursor-pointer"
                      onClick={handleMenuToggle}
                    >
                      Testimonials
                    </ScrollLink>
                    <ScrollLink
                      to="cert-section"
                      smooth={true}
                      duration={400}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-400 hover:bg-gray-50 cursor-pointer"
                      onClick={handleMenuToggle}
                    >
                      Certifications
                    </ScrollLink>
                    <ScrollLink
                      to="contact-section"
                      smooth={true}
                      duration={400}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-400 hover:bg-gray-50 cursor-pointer"
                      onClick={handleMenuToggle}
                    >
                      Contact
                    </ScrollLink>
                  </div>
                  <div className="py-6">
                    <ScrollLink
                      to="about-section"
                      smooth={true}
                      duration={400}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 cursor-pointer"
                    ></ScrollLink>
                    <div className="flex  justify-center gap-5">
                      <Github />
                      <Linkedin />
                    </div>
                    <div className="flex  justify-center mt-3">
                      <p className="text-base leading-6 text-center text-gray-400">
                        © 2023 TranCodes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default NavBar;
