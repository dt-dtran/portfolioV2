import { styles } from "../style.js";

const About = () => {
  return (
    <>
      <div className="pt-10">
        <p className={`${styles.sectionSubText} text-center `}>Who I Am</p>
        <h2
          className={`${styles.sectionHeadText} text-center main-text-gradient`}
        >
          About
        </h2>
      </div>
      <div className="w-full flex justify-center pb-10">
        <p className="mt-3 text-gray-400 text-[20px] max-w-3xl leading-[26px] text-center ml-10 mr-10">
          Hi! I'm a skilled software developer with background in project /
          program management. I previously spearheaded acquisition integration
          into enterprise tools and processes and led successful product GTM and
          offer launches.
          <br />
          <br />
          Drawing from my program management background, I possess the expertise
          to manage intricate strategies, projects, and stakeholder dynamics.
          While, my coding proficiency grants me an understanding of
          implementation nuances and how code contributes to the larger context.
          This fusion of business and technology enables me to seamlessly
          translate business objectives into tangible technical solutions. These
          solutions are not only effective but also aligned with the broader
          goals of the organization.
          <br />
          <br />
          Beyond code, I have a love for games (both video and board), all
          things Pokémon, pickleball, giving back to the community, and trying
          new foods.
          <br />
          <br />
          Explore below for more about the range of technologies I've worked
          with, my project portfolio, and my journey of growth.
        </p>
      </div>
    </>
  );
};

export default About;
