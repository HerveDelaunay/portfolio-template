import { useState, useEffect } from "react";
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
  const [fieldsEmpty, setFieldsEmpty] = useState(true);
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
  const handleOnChange = (number: number) => {
    if (number === 1) setNameIsEmpty(false);
    if (number === 2) setEmailIsEmpty(false);
    if (number === 3) setIsEmpty(false);
    if (!nameIsEmpty && !emailIsEmpty && !isEmpty) setFieldsEmpty(false);
  };

  return (
    <div className="flex flex-col items-center w-10/12 tablet:w-[689px] tablet:mt-[94px] desktop:w-[1110px]">
      <div className="w-full h-[33.125rem] border-t border-b border-opacity tablet:h-[358px]">
        <section className="h-[29.625rem] w-full flex flex-col justify-between mt-6 tablet:h-[294px] desktop:flex-row desktop:mt-12">
          <h2 className="text-h2 text-dark-blue font-bold font-serif">
            Get in Touch
          </h2>
          <p className="text-p2 text text-dark-blue opacity-p desktop:hidden">
            {data.description}
          </p>
          <div className="flex justify-between items-center h-6 w-[6.5rem] desktop:hidden">
            <a href="https://github.com">
              <img src={githubIcon} alt="github website small icon" />
            </a>
            <a href="https://twitter.com">
              <img src={twitterIcon} alt="twitter website small icon" />
            </a>
            <a href="https://linkedin.com">
              <img src={linkedinIcon} alt="linkedin website small icon" />
            </a>
          </div>
          <div className="max-desktop:hidden flex flex-col">
            <p className="text-p2 text text-dark-blue opacity-p w-[635px] h-[210px]">
              {data.description}
            </p>
            <div className="flex justify-between items-center h-6 w-[6.5rem]">
              <a href="https://github.com">
                <img src={githubIcon} alt="github website small icon" />
              </a>
              <a href="https://twitter.com">
                <img src={twitterIcon} alt="twitter website small icon" />
              </a>
              <a href="https://linkedin.com">
                <img src={linkedinIcon} alt="linkedin website small icon" />
              </a>
            </div>
          </div>
        </section>
      </div>
      <section className="w-full h-[30.75rem] mt-8 mb-20 desktop:flex desktop:flex-row desktop:justify-between desktop:mt-[47px] desktop:mb-[109px]">
        <h2 className="text-h2 text-dark-blue font-bold font-serif max-tablet:hidden desktop:w-[350px]">
          Contact Me
        </h2>
        <form
          action="#"
          method="post"
          className="h-full flex flex-col justify-between tablet:w-full tablet:h-[426px] tablet:mt-8 tablet:mb-24 desktop:w-[635px] desktop:mt-0"
        >
          <h2 className="text-h2 text-dark-blue font-bold font-serif tablet:hidden">
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
              placeholder:text-techno px-4 focus:outline-none focus:border focus:border-cyan required:border required:border-red"
              placeholder="Jane Appleseed"
              onChange={(e) => {
                setNameContent(e.target.value);
                handleOnChange(1);
              }}
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
              placeholder:text-techno px-4 focus:outline-none focus:border focus:border-cyan required:border required:border-red"
              placeholder="email@example.com"
              onChange={(e) => {
                setEmailContent(e.target.value);
                handleOnChange(2);
              }}
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
              placeholder:text-techno px-4 focus:outline-none focus:border focus:border-cyan pt-2 resize-none required:border required:border-red"
              placeholder="How can I help?"
              required={isEmpty}
              onChange={(e) => {
                setTextAreaContent(e.target.value);
                handleOnChange(3);
              }}
            />
            {isEmpty && (
              <p className="text-[0.625rem] font-bold font-sans text-red mt-1">
                This field is required
              </p>
            )}
          </div>
          <button
            className={`w-[12.5rem] h-12 bg-white text-dark-blue border border-dark-blue text-btn desktop:hover:bg-blue desktop:hover:border-0 desktop:hover:text-white disabled:bg-white disabled:border-grey disabled:pointer-events-none`}
            onClick={(e) => {
              e.preventDefault();
              handleFormSubmit();
            }}
            disabled={fieldsEmpty}
          >
            SEND MESSAGE
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactMe;
