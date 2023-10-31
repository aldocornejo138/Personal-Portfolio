import React, { useState, useRef } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_p0jbhyl",
      "template_gb44azs",
      form.current,
      "Ah9VqXeck2rq2S5Me"
    );
  };

  const [user_name, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [user_email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(user_email)
      .toLocaleLowerCase()
      .match(/^\w+([.-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault();
    if (user_name === "") {
      setErrMsg("Username is required!!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (user_email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(user_email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you ${user_name}, Your Message has been sent Successfully!`
      );
      sendEmail(e);
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <section
      ref={ref}
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      {inView ? (
        <div>
          <div className="visible flex justify-center items-center text-center">
            <Title title="WANT TO WORK WITH ME?" des="CONTACT ME" />
          </div>
          <div className="w-full">
            <div className=" w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="zoomInLeft">
                <ContactLeft />
              </div>
              <div
                className="zoomInRight w-full lgl:w-[100%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b]
          flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne"
              >
                <form
                  ref={form}
                  className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
                >
                  {errMsg && (
                    <p
                      className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
               shadow-shadowOne text-center text-orange-500 text-base tracking-wide
               animate-bounce"
                    >
                      {errMsg}
                    </p>
                  )}
                  {successMsg && (
                    <p
                      className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
               shadow-shadowOne text-center text-green-500 text-base tracking-wide
               animate-bounce"
                    >
                      {successMsg}
                    </p>
                  )}

                  <div className="w-full flex flex-col lgl:flex-row gap-10">
                    <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                      <p className="text-sm text-gray-400 uppercase tracking-wide">
                        YOUR NAME
                      </p>
                      <input
                        onChange={(e) => setUsername(e.target.value)}
                        value={user_name}
                        name="user_name"
                        className={`${
                          errMsg === "Username is required!" &&
                          "outline-designColor"
                        } contactInput`}
                        type="text"
                      />
                    </div>
                    <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                      <p className="text-sm text-gray-400 uppercase tracking-wide">
                        Phone Number
                      </p>
                      <input
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                        name="phoneNumber"
                        className={`${
                          errMsg === "Phone number is required!" &&
                          "outline-designColor"
                        } contactInput`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      Email
                    </p>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={user_email}
                      name="user_email"
                      className={`${
                        errMsg === "Please give your Email!" &&
                        "outline-designColor"
                      } contactInput`}
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      Subject
                    </p>
                    <input
                      onChange={(e) => setSubject(e.target.value)}
                      name="subject"
                      value={subject}
                      className={`${
                        errMsg === "Plese give your Subject!" &&
                        "outline-designColor"
                      } contactInput`}
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      Message
                    </p>
                    <textarea
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      name="message"
                      className={`${
                        errMsg === "Message is required!" &&
                        "outline-designColor"
                      } contactTextArea`}
                      cols="30"
                      rows="8"
                    ></textarea>
                  </div>
                  <div className="w-full">
                    <button
                      onClick={handleSend}
                      className=" w-full h-12 bg-[#141518] rounded-lg text-base
                text-gray-400 tracking-wider uppercase hove:text-white duration-300
                hover:border-[1px] hover:border-designColor border-transparent"
                    >
                      Send Message
                    </button>
                  </div>
                  {errMsg && (
                    <p
                      className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
               shadow-shadowOne text-center text-orange-500 text-base tracking-wide
               animate-bounce"
                    >
                      {errMsg}
                    </p>
                  )}
                  {successMsg && (
                    <p
                      className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
               shadow-shadowOne text-center text-green-500 text-base tracking-wide
               animate-bounce"
                    >
                      {successMsg}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className=" nonVisible flex justify-center items-center text-center">
            <Title title="WANT TO WORK WITH ME?" des="CONTACT ME" />
          </div>
          <div className="w-full">
            <div className="hideLeft w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="zoomOutLeft">
                <ContactLeft />
              </div>
              <div
                className="zoomOutRight w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b]
          flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne"
              >
                <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
                  {errMsg && (
                    <p
                      className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
               shadow-shadowOne text-center text-orange-500 text-base tracking-wide
               animate-bounce"
                    >
                      {errMsg}
                    </p>
                  )}
                  {successMsg && (
                    <p
                      className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
               shadow-shadowOne text-center text-green-500 text-base tracking-wide
               animate-bounce"
                    >
                      {successMsg}
                    </p>
                  )}

                  <div className="w-full flex flex-col lgl:flex-row gap-10">
                    <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                      <p className="text-sm text-gray-400 uppercase tracking-wide">
                        YOUR NAME
                      </p>
                      <input
                        onChange={(e) => setUsername(e.target.value)}
                        value={user_name}
                        className={`${
                          errMsg === "Username is required!" &&
                          "outline-designColor"
                        } contactInput`}
                        type="text"
                      />
                    </div>
                    <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                      <p className="text-sm text-gray-400 uppercase tracking-wide">
                        Phone Number
                      </p>
                      <input
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                        className={`${
                          errMsg === "Phone number is required!" &&
                          "outline-designColor"
                        } contactInput`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      Email
                    </p>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={user_email}
                      className={`${
                        errMsg === "Please give your Email!" &&
                        "outline-designColor"
                      } contactInput`}
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      Subject
                    </p>
                    <input
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
                      className={`${
                        errMsg === "Plese give your Subject!" &&
                        "outline-designColor"
                      } contactInput`}
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      Message
                    </p>
                    <textarea
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      className={`${
                        errMsg === "Message is required!" &&
                        "outline-designColor"
                      } contactTextArea`}
                      cols="30"
                      rows="8"
                    ></textarea>
                  </div>
                  <div className="w-full">
                    <button
                      onClick={handleSend}
                      className=" w-full h-12 bg-[#141518] rounded-lg text-base
                text-gray-400 tracking-wider uppercase hove:text-white duration-300
                hover:border-[1px] hover:border-designColor border-transparent"
                    >
                      Send Message
                    </button>
                  </div>
                  {errMsg && (
                    <p
                      className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
               shadow-shadowOne text-center text-orange-500 text-base tracking-wide
               animate-bounce"
                    >
                      {errMsg}
                    </p>
                  )}
                  {successMsg && (
                    <p
                      className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
               shadow-shadowOne text-center text-green-500 text-base tracking-wide
               animate-bounce"
                    >
                      {successMsg}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
