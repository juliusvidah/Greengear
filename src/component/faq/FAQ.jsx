import React, { useState } from "react";
import "./faq.scss";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questionsAnswers = [
    {
      question: "What type of equipment can I rent?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      question: "How does the booking process work?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      question: "Is there a minimum rental period?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      question: "What type of equipment can I rent?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      question: "How can I contact customer support?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="FAQ">
      <div className="section">
        <div className="top">
          <h2>Frequently Asked Questions</h2>
          <p>
            Find answers to common queries about our rental services, equipment
            availability, and booking process to help you make informed
            decisions.
          </p>
        </div>

        <div className="faq">
          <ul className="faq__list">
            {questionsAnswers.map((item, index) => (
              <li
                className={`faq__item ${
                  activeIndex === index ? "faq__item--active" : ""
                }`}
                key={index}
              >
                <button
                  className="faq__question"
                  onClick={() => toggleQuestion(index)}
                >
                  {item.question}
                  <span
                    className={`faq__icon ${
                      activeIndex === index ? "faq__icon--open" : ""
                    }`}
                  >
                    {activeIndex === index ? ">" : "v"}
                  </span>
                </button>
                {activeIndex === index && (
                  <p className="faq__answer">{item.answer}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="bottom">
          <h2>Need More Help?</h2>
          <p>
            Contact us for any additional questions or support regarding our
            services.
          </p>
          <div>
            {" "}
            <button>Get Support</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
