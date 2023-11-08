import { styles } from "../style.js";
import { testimonials } from "../constants/index.js";

const FeedbackCard = ({ testimonial, name, designation, company, image }) => (
  <div className="bg-slate-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 p-4 rounded-2xl sm:w-[360px] w-full">
    <div className="mt-1 flex justify-between items-center gap-1">
      <img
        src={image}
        alt={`feedback_by-${name}`}
        className="w-12 h-12 rounded-full mb-2"
      />
      <div className="flex-1 flex flex-col ml-2 mb-2">
        <p className="text-gray-300 font-medium text-[14px]">
          <span className="blue-text-gradient">@</span> {name}
        </p>
        <p className="mt-1 text-secondary text-[14px]">
          {designation} of {company}
        </p>
      </div>
    </div>
    <div className="tracking-wider">
      <ul className="mt-3 list-disc ml-1 mr-1 space-y-3">
        {testimonial.points.map((point, index) => (
          <p
            key={`testimonial-point-${index}`}
            className="text-gray-400 text-[16px] pl-1"
          >
            {point}
          </p>
        ))}
      </ul>
    </div>
  </div>
);

const Feedbacks = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className={`mt-28 bg-black-100 rounded-[20px]`}>
          <div className={`bg-tertiary rounded-2xl sm:px-20 sm:py-24 py-3`}>
            <div>
              <p className={`${styles.sectionSubText} text-center`}>
                Impact in Their Words
              </p>
              <h2 className={`${styles.sectionHeadText} text-center`}>
                Testimonials
              </h2>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-7 justify-center mb-3">
            {testimonials.map((testimonial, index) => (
              <FeedbackCard
                key={`testimonial-${index}`}
                testimonial={testimonial}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedbacks;
