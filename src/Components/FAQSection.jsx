import React, { useState } from 'react';
import './FAQSection.css';
import icon from './icon.svg'; // Importing the SVG file from the same directory

const FAQSection = () => {
  const faqs = [
    {
      question: 'What kind of events does the Energy Society organize?',
      answer: 'We organize a diverse range of events including technical workshops, guest lectures by industry experts, sustainability-focused hackathons, energy-themed quizzes, and industrial visits.',
    },
    {
     question: 'Are first-year students allowed to participate in core activities, or are they limited to observing?',
      answer: 'Yes, first-year students are encouraged to actively participate in events and core activities, rather than simply observing.',
    },
    {
      question: ' Are the events open to everyone or only to IIT Delhi students?',
      answer: 'While most events are open to all IIT Delhi students, some may also welcome external participants depending on the format and scope of the event.',
    },
    {
      question: 'Can students from other branches join the Energy Society team?',
      answer: 'While the Energy Society primarily focuses on students from related branches, we strongly value passion and commitment. If you’re genuinely interested in energy, sustainability, and want to actively contribute, students from other branches are welcome to apply — there’s definitely a possibility to join.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h2>{faq.question}</h2>
              <img
                src={icon}
                alt="Toggle FAQ"
                className={`faq-icon ${openIndex === index ? 'open' : ''}`}
              />
            </div>
            <div
              className={`faq-answer ${openIndex === index ? 'open' : ''}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;