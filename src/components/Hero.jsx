import { Link as ScrollLink } from "react-scroll";
export default function Hero() {
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath: `polygon(
                  74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)`,
            }}
          ></div>
        </div>
        <div className="mx-auto max-w-2xl pt-24 pb-20 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-32">
          <div className="text-center">
            <h3 className="text-4xl font-bold tracking-tight sm:text-6xl header-bg-teal p-1">
              Full-Stack Engineer
            </h3>
            <p className="mt-6 text-2xl leading-8 text-gray-400">
              Continuously learning developer with interest in exploring new
              technologies and enhancing my abilities. Current areas of
              exploration include AI / ML, real-time data and caching,
              cross-platform application, and integrating cloud services.
              <br />
              <br />I have experience in{" "}
              <strong>Python, JavaScript, React, and SQL</strong>, and other
              technologies listed below. I value continuous learning and enjoy
              creating efficient, scalable, and user-friendly solutions that
              solve real-world problems.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <ScrollLink
                to="contact-section"
                smooth={true}
                duration={400}
                className="rounded-md bg-[#39cccc] px-3.5 py-2.5 text-md font-semibold text-gray-700 shadow-sm hover:bg-transparent
                hover:outline
                hover:outline-2
                hover:outline-[#DAC3D4] cursor-pointer hover:text-[#DAC3D4]"
              >
                Contact
              </ScrollLink>
              <ScrollLink
                to="about-section"
                className="text-md font-semibold leading-6 text-gray-300 cursor-pointer hover:text-[#DAC3D4]"
                smooth={true}
                duration={400}
              >
                Learn more <span aria-hidden="true">→</span>
              </ScrollLink>
            </div>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center mt-10">
              <div className="relative rounded-full px-3 py-1 text-xl leading-6 header-bg ring-1 ring-gray-400/10 hover:ring-gray-300/20">
                Open for hiring{" "}
                <ScrollLink
                  to="projects-section"
                  className="font-semibold text-[#39cccc] cursor-pointer hover:text-[#DAC3D4]"
                  smooth={true}
                  duration={400}
                >
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  See Projects <span aria-hidden="true">&rarr;</span>
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath: `polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)`,
          }}
        ></div>
      </div>
    </>
  );
}
