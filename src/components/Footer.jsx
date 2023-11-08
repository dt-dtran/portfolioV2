import { Linkedin, Github } from "../constants/svg";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <>
      <section className="bg-slate-800">
        <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center space-x-6 -mx-5 -my-4">
            <p className="text-base leading-6 text-center text-gray-400 text-[12px]">
              Built with JavaScript, React, Three.js, EmailJS, TailwindCSS,
              Firebase, GitHub Actions
            </p>
          </div>
          <div className="flex flex-wrap justify-center space-x-6 -mx-5 -my-2">
            <p className="text-base leading-6 text-center text-gray-400">
              <ScrollLink
                to="hero-section"
                smooth={true}
                duration={400}
                className="cursor-pointer hover:text-gray-500"
              >
                © 2023 TranCodes
              </ScrollLink>
            </p>
            <Github />
            <Linkedin />
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
