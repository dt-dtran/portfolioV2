import { styles } from "../style.js";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import avatar from "../assets/images/Avatar.png";
import medium from "../assets/images/Avatar500.png";
import small from "../assets/images/Avatar300.png";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    let name, value;

    if (e.target.tagName === "textarea") {
      value = e.target.value;
      name = e.target.name;
    } else {
      ({ name, value } = e.target);
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      emailjs
        .send(
          import.meta.env.REACT_APP_EMAILJS_SERVICE_ID,
          import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Diana",
            from_email: form.email,
            to_email: "dt.dtran.trancodes.com",
            message: form.message,
          },
          import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");

            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);

            alert("Please try again.");
          }
        );
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div className="relative isolate px-6 pt-20 lg:px-8">
        <div
          className="absolute inset-x-0 -top-80 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-100"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+10rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[180deg] bg-gradient-to-tr from-[#ff80b5] to-[rgb(100 116 139) p-6 opacity-20 sm:left-[calc(50%+30rem)] sm:w-[72.1875rem]"
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
      <div className="container mx-auto">
        <div className="pt-10">
          <p className={`${styles.sectionSubText} text-center`}>
            Let's Connect
          </p>
          <h3 className={`${styles.sectionHeadText} text-center mb-2`}>
            Contact
          </h3>
        </div>
        <div className="l:mt-3 mt-3 xl:flex xl:flex-row md:flex md:flex-row flex-col-reverse gap-8 overflow-hidden mx-1">
          <div className="flex-[0.75]">
            <div className="bg-slate-400 bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl w-full mt-5 mb-2">
              <form
                onSubmit={onSubmit}
                className="flex flex-col gap-4 mt-2"
                id="contact-form"
              >
                <label className="flex flex-col">
                  <span className="text-gray-400 font-medium mb-2">
                    Your Name
                  </span>
                  <input
                    required
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="bg-tertiary py-2 px-4 placeholder:text-secondary text-grey rounded-lg font-medium focus:outline-none focus:border-[#39cccc] focus:ring-2 focus:ring-[#39cccc] bg-[#F6F6F6]"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-gray-400 font-medium mb-2">
                    Your Email
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="bg-tertiary py-2 px-4 placeholder:text-secondary text-grey rounded-lg font-medium focus:outline-none focus:border-[#39cccc] focus:ring-2 focus:ring-[#39cccc] bg-[#F6F6F6]"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-gray-400 font-medium mb-2">
                    Your Message
                  </span>
                  <textarea
                    rows={6}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="bg-tertiary py-2 px-4 placeholder:text-secondary text-grey rounded-lg font-medium focus:outline-none focus:border-[#39cccc] focus:ring-2 focus:ring-[#39cccc] bg-[#F6F6F6]"
                    id="textarea"
                    required
                    type="text"
                  />
                </label>
                <button
                  type="submit"
                  className="bg-[#39cccc] py-2 px-8 rounded-xl w-fit text-gray-700 font-bold
                hover:bg-transparent
                hover:outline
                hover:outline-2
                hover:outline-[#DAC3D4] hover:text-[#DAC3D4]"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
            </div>
          </div>
          <div className="flex-[0.75] bg-black-100 rounded-2xl">
            <picture className="flex justify-center overflow-hidden md:absolute md:bottom-0">
              <source srcSet={small} media="(max-width: 640px)" />
              <source srcSet={medium} media="(max-width: 1020px)" />
              <img src={avatar} alt="avatar_large" />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
