import { certifications } from "../constants/index.js";
import { styles } from "../style.js";

const Cert = () => {
  return (
    <>
      <div className="relative isolate px-6 pt-6 lg:px-8">
        <div
          className="absolute inset-x-0 -top-44 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-10rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr rotate-[60deg] from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath: `polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)`,
            }}
          ></div>
        </div>
      </div>
      <div className="pt-10">
        <p className={`${styles.sectionSubText} text-center`}>
          How I Keep Learning
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Certifications
        </h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10 pb-18 pt-10">
        {certifications.map((cert) => (
          <div className="w-32 h-32" key={cert.name}>
            <div className="text-center text-gray-400">
              <p className={` ${cert.color}`}>{cert.name}</p>
              <img
                src={cert.icon}
                alt="tech_icon"
                className="pt-2 pr-4 pl-4"
              ></img>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cert;
