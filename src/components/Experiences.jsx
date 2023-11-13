import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style.js";
import { experiences } from "../constants/index.js";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "rgba(48, 58, 75, 0.9)",
        color: "#e2e8f0",
        fontSize: "18px",
      }}
      contentArrowStyle={{ borderRight: "10px solid  #fefefe" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full vertical-timeline-element-icon">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="sub-text-gradient text-[20px] font-bold">
          {experience.title}
        </h3>
        <p
          className="text-gray-300 text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-3 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-gray-400 text-[16px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <div className="pt-5">
        <p className={`${styles.sectionSubText} text-center`}>
          From Learning to Contributing
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Journey into Software Engineering
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="mt-10 flex flex-col mb-5">
          <div className="mb-2 px-3 text-xl text-gray-400 text-center">
            In my career, I transitioned from nonprofit work to tech project
            management, ultimately finding my calling in software engineering.
            My journey reflects my commitment to solving complex problems,
            continuous learning, and pursuing excellence.
          </div>
          <VerticalTimeline className="vertical-timeline-custom-line">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
          <div className="mb-2 px-3 text-xl text-center">
            <div className="header-bg mt-2">
              Today: <br></br>Open for Hire
            </div>
            <div className="text-gray-400">
              I am open to new opportunities in fullstack engineering, frontend
              development, or technical project management roles. <br></br>{" "}
              <br></br>My journey has been marked by continuous learning and a
              commitment to personal and professional growth. I look forward to
              embracing new challenges, working collaboratively with teams, and
              leveraging my skills to make a meaningful contribution to
              organizations at the forefront of the tech industry. <br></br>{" "}
              <br></br>If you have an opportunity that aligns with my skill set
              and passion, I welcome the chance to connect and explore how we
              can achieve great things together. Feel free to reach out, and
              let's embark on a journey of innovation and growth.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
