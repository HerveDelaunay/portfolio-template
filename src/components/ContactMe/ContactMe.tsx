import data from "../../assets/contact.json";
import githubIcon from "../../assets/images/icons/github_black.svg";
import twitterIcon from "../../assets/images/icons/twitter_black.svg";
import linkedinIcon from "../../assets/images/icons/linkedin_black.svg";

const ContactMe: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-10/12">
      <div className="w-full h-[33.125rem] border-t border-b border-opacity">
        <section className="h-[29.625rem] w-full flex flex-col justify-between mt-6">
          <h2 className="text-h2 text-dark-blue font-bold font-serif">
            Get in Touch
          </h2>
          <p className="text-p2 text text-dark-blue opacity-p">
            {data.description}
          </p>
          <div className="flex justify-between items-center h-6 w-[6.5rem]">
            <img src={githubIcon} alt="github website small icon" />
            <img src={twitterIcon} alt="twitter website small icon" />
            <img src={linkedinIcon} alt="linkedin website small icon" />
          </div>
        </section>
      </div>
      <section className="w-full h-[30.75rem] mt-8 mb-20">
        <form
          action="#"
          method="post"
          className="h-full flex flex-col justify-between"
        >
          <h2 className="text-h2 text-dark-blue font-bold font-serif">
            Contact Me
          </h2>
          <div className="flex flex-col justify-between h-[5.375rem]">
            <label
              htmlFor="name"
              className="h-[1.875rem] text-techno font-sans font-bold"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-[#979797] bg-opacity-[0.1] h-12 placeholder:text-dark-blue/0.4 pl-4 "
              placeholder="Jane Appleseed"
            />
          </div>
          <div className="flex flex-col justify-between h-[5.375rem]">
            <label
              htmlFor="email"
              className="h-[1.875rem] text-techno font-sans font-bold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-[#979797] bg-opacity-[0.1] h-12 placeholder:text-dark-blue/0.4 pl-4 "
              placeholder="email@example.com"
            />
          </div>
          <div className="flex flex-col justify-between h-[8.375rem]">
            <label
              htmlFor="message"
              className="h-[1.875rem] text-techno font-sans font-bold"
            >
              Message
            </label>
            <input
              type="text"
              id="message"
              className=" h-24 bg-[#979797] bg-opacity-[0.1] placeholder:text-dark-blue/0.4 pl-4 align-text-top"
              placeholder="How can I help?"
            />
          </div>
          <button className="w-[12.5rem] h-12 bg-blue text-white text-btn">
            SEND A MESSAGE
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactMe;
