import { useState } from "react";
import data from "../../assets/contact.json";
import githubIcon from "../../assets/images/icons/github_black.svg";
import linkedinIcon from "../../assets/images/icons/linkedin_black.svg";
import twitterIcon from "../../assets/images/icons/twitter_black.svg";

const ContactMe: React.FC = () => {
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [nameIsEmpty, setNameIsEmpty] = useState<boolean>(false);
  const [emailIsEmpty, setEmailIsEmpty] = useState(false);
  const [textAreaContent, setTextAreaContent] = useState<string>("");
  const [nameContent, setNameContent] = useState<string>("");
  const [emailContent, setEmailContent] = useState<string>("");
  const handleFormSubmit = () => {
    if (textAreaContent === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
    if (nameContent === "") {
      setNameIsEmpty(true);
    } else {
      setNameIsEmpty(false);
    }
    if (emailContent === "") {
      setEmailIsEmpty(true);
    } else {
      setEmailIsEmpty(false);
    }
  };
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
              required={nameIsEmpty}
              className="bg-dark-blue bg-opacity-[0.1] h-12 placeholder:text-dark-blue/0.4 
              placeholder:text-techno px-4 focus:outline-none focus:border focus:border-cyan"
              placeholder="Jane Appleseed"
              onChange={(e) => setNameContent(e.target.value)}
            />
            {nameIsEmpty && (
              <p className="text-[0.625rem] font-bold font-sans text-red mt-1">
                This field is required
              </p>
            )}
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
              required={emailIsEmpty}
              className="bg-dark-blue bg-opacity-[0.1] h-12 placeholder:text-dark-blue/0.4 
              placeholder:text-techno px-4 focus:outline-none focus:border focus:border-cyan"
              placeholder="email@example.com"
              onChange={(e) => setEmailContent(e.target.value)}
            />
            {emailIsEmpty && (
              <p className="text-[0.625rem] font-bold font-sans text-red mt-1">
                This field is required
              </p>
            )}
          </div>
          <div className="flex flex-col justify-between h-[8.375rem]">
            <label
              htmlFor="message"
              className="h-[1.875rem] text-techno font-sans font-bold"
            >
              Message
            </label>
            <textarea
              id="message"
              className=" h-24 bg-dark-blue bg-opacity-[0.1] placeholder:text-dark-blue/0.4 
              placeholder:text-techno px-4 focus:outline-none focus:border focus:border-cyan pt-2 resize-none required:border required:border-red peer"
              placeholder="How can I help?"
              required={isEmpty}
              onChange={(e) => setTextAreaContent(e.target.value)}
            />
            {isEmpty && (
              <p className="text-[0.625rem] font-bold font-sans text-red mt-1">
                This field is required
              </p>
            )}
          </div>
          <button
            className="w-[12.5rem] h-12 bg-blue text-white text-btn"
            onClick={(e) => {
              e.preventDefault();
              handleFormSubmit();
            }}
          >
            SEND MESSAGE
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactMe;
