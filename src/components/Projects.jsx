import { styles } from "../style.js";
import { projects } from "../constants/index.js";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  video,
  source_code_link,
}) => {
  return (
    <>
      <div className="bg-slate-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 p-5 rounded-2xl sm:w-[360px] w-full">
        {image && (
          <div className="container max-w-full flex justify-center items-center">
            <img
              src={image}
              alt="project_image"
              className="w-[220px] h-[220px] "
            />
          </div>
        )}
        {video && (
          <div className="video-container max-w-full">
            <iframe
              title="Project Video"
              className="w-full h-full object-fit"
              src={video}
              allowFullScreen
            />
          </div>
        )}
        <div className="mt-5">
          <h3
            className="text-[#39cccc] font-bold text-[24px] text-center cursor-pointer hover:text-[#DAC3D4]"
            onClick={() => window.open(source_code_link, "_blank")}
          >
            {name}
          </h3>
          <p className="mt-2 text-gray-400 text-[20px] text-center">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[16px] ${tag.color}`}
            >
              {tag.name}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

const Project = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="pt-6">
          <p className={`${styles.sectionSubText} text-center`}>
            Where Curiosity Meets Realization
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
        </div>

        <div className="w-full flex justify-center">
          <p className="mt-3 text-gray-400 text-[20px] max-w-3xl leading-[30px] text-center ml-10 mr-10">
            The following projects showcase my skills and experience through
            real-world examples of my work.
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-6 justify-center mb-5">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
