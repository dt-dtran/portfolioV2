import { technologies } from "../constants/index.js";
import { styles } from "../style.js";

const Tech = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="pt-10">
          <p className={`${styles.sectionSubText} text-center`}>My Toolkit</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Technologies
          </h2>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-10 pb-20 pt-10 ml-10 mr-10">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <div className="text-center text-gray-400">
                <p className={` ${technology.color}`}>{technology.name}</p>
                <img
                  src={technology.icon}
                  alt="tech_icon"
                  className="pt-2 pl-4 pr-4"
                ></img>
              </div>
            </div>
          ))}
        </div>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-64 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[180deg] bg-gradient-to-tr from-[#ff80b5] to-[rgb(100 116 139) p-6 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath: `polygon(
                50% 0%,
                100% 38%,
                100% 55%,
                66% 66%,
                81% 91%,
                50% 70%,
                18% 90%,
                40% 68%,
                0 54%,
                0% 40%)`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tech;
