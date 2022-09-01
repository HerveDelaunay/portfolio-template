import { useEffect, useState } from "react";
import data from "../../assets/contact.json";
import githubIcon from "../../assets/images/icons/github_black.svg";
import linkedinIcon from "../../assets/images/icons/linkedin_black.svg";
import twitterIcon from "../../assets/images/icons/twitter_black.svg";
import FormValuesProps from "./Type";

const ContactMe: React.FC = () => {
  const initialValues = { name: "", email: "", message: "" };
  const [formValues, setFormValues] = useState<FormValuesProps>(initialValues);
  const [formErrors, setFormErrors] = useState<FormValuesProps>(initialValues);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const validate = (values: FormValuesProps) => {
    const errors = {
      name: "",
      email: "",
      message: "",
    };
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.name) {
      errors.name = "A name is required";
    }
    if (!values.email) {
      errors.email = "An email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.message) {
      errors.message = "A message is required";
    }
    return errors;
  };
  useEffect(() => {
    if (
      !formErrors.name &&
      !formErrors.email &&
      !formErrors.message &&
      isSubmit
    ) {
      console.log(formValues);
    }
  }, [formErrors]);

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
          onSubmit={(e) => handleSubmit(e)}
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
              name="name"
              required={!formValues.name && isSubmit}
              className="bg-dark-blue bg-opacity-[0.1] h-12 placeholder:text-dark-blue/0.4 
              placeholder:text-techno px-4 focus:outline-none focus:border focus:border-cyan required:border required:border-red"
              placeholder="Jane Appleseed"
              value={formValues.name}
              onChange={(e) => handleChange(e)}
            />
            {!formValues.name && isSubmit && (
              <p className="text-[0.625rem] font-bold font-sans text-red mt-1">
                {formErrors.name}
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
              name="email"
              required={!formValues.email && isSubmit}
              className="bg-dark-blue bg-opacity-[0.1] h-12 placeholder:text-dark-blue/0.4 
              placeholder:text-techno px-4 focus:outline-none focus:border focus:border-cyan required:border required:border-red"
              placeholder="email@example.com"
              value={formValues.email}
              onChange={(e) => handleChange(e)}
            />
            {!formValues.email && isSubmit && (
              <p className="text-[0.625rem] font-bold font-sans text-red mt-1">
                {formErrors.email}
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
              name="message"
              className=" h-24 bg-dark-blue bg-opacity-[0.1] placeholder:text-dark-blue/0.4 
              placeholder:text-techno px-4 focus:outline-none focus:border focus:border-cyan pt-2 resize-none required:border required:border-red"
              placeholder="How can I help?"
              required={!formValues.message && isSubmit}
              value={formValues.message}
              onChange={(e) => handleChange(e)}
            />
            {!formValues.message && isSubmit && (
              <p className="text-[0.625rem] font-bold font-sans text-red mt-1">
                {formErrors.message}
              </p>
            )}
          </div>
          <button
            className={`w-[12.5rem] h-12 bg-white text-dark-blue border border-dark-blue text-btn desktop:hover:bg-blue desktop:hover:border-0 desktop:hover:text-white disabled:bg-white disabled:border-grey disabled:pointer-events-none`}
            disabled={
              !formValues.name && !formValues.email && !formValues.message
            }
          >
            {!formErrors.name &&
            !formErrors.email &&
            !formErrors.message &&
            isSubmit
              ? " MESSAGE SENT"
              : "SEND MESSAGE"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactMe;
