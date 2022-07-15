import React from "react";
import Menu from "../../components/Menu/Menu";
import Footer from '../../components/Footer/Footer'
import "./Faq.css";

import Accordion from "../../components/Faq/Accordion";

const questionsAnswers = [
    {
      question: "What is Qwikio Sales & Service Model?",
      answer:
        "Qwikio will sell vehicles to customers directly through the internet and at Qwikio Place locations in major cities across America, Europe, Africa, and the Middle East. Qwikio also offers direct customer service through Qwikio Service Centers and mobile service operations. <br> The following is a list of current and upcoming Qwikio Place outlets and Service Centers.",
    },
    {
      question: "Where are Qwikio Place Outlets and Service Centers located, and when will they open?",
      answer:
        "A list of the current and upcoming Qwikio Place outlets and Service Centers can be found here",
    },
    {
      question: "How can I convert my Qwikio waitlist to an order?",
      answer: "As the date for the start of production of your reserved Qwikio model approaches, we will notify you and ask you to make your option selections. We will submit your vehicle configuration to our Manufacturing team to begin producing your Qwikio once we receive that information and a confirmation deposit.",
    },
    {
      question: "Can I waitlist a Qwikio if I don't live in the United States, United Arab Emirates, or Canada?",
      answer: `We are constantly adding new markets to our rollout plan. By joining our waitlist, you will be among the first to place an order once we begin sales in that market. Visit our waitlist page to see if you can enter our waitlist here.`,
    },
    {
      question: "What is the price of a Qwikio?",
      answer: "Qwikio prices differ according to the model; <br> Qwikio Riida X price starts at $25,500 <br> Qwikio Riida X price starts at $28,500 <br>Qwikio Pride price starts at $35,500.",
    },
    {
        question: "Is Qwikio eligible for federal, state, and local tax credits for electric vehicles?",
        answer: `Qwikio Inc expects to qualify for the $7,500 federal tax credit in the United States, pending application completion. There are also numerous state and local incentives for which you may be eligible.
        <br><br>
         State and local incentives are frequently modified and subject to change. We encourage you to perform independent research on the latest incentives status and consult a tax professional for any incentives relating to taxes.
        `,
      },
      {
        question: "What kind of advanced driver-assistance capabilities will you offer in Qwikio Models?",
        answer: `Qwikio Drive Assist (QDA) is our advanced driver-assistance system (ADAS), which includes an array of 24 multimodal sensors — including the most recent camera, radar, and ultrasonic sensors — as well as a driver monitoring system and a long-distance, high-resolution LIDAR that uses laser beams to measure the distance from every object in the car's path. In addition to this, the Qwikio Drive Assist system incorporates hardware prepared for the next level of driving automation.`,
      },
      {
        question: "Does Qwikio have plans to offer future models?",
        answer: `Yes. Qwikio Pride, Qwikio Riida X, and Riida XL were designed as the first models in a full Qwikio lineup. Qwikio has plans for an SUV, a minivan, a tricycle, and heavy-duty and large mass transit systems.`,
      },
      {
        question: "What will be the Delivery Process for my Qwikio?",
        answer: `Once the customer's order is confirmed with a deposit, they will be introduced to a Delivery Advisor as part of their dedicated Qwikio customer success team. They will assist customers in preparing to take ownership of their Qwikio, providing updates throughout the process, and guiding them through the delivery process, which will differ depending on the state in which the customers choose to pick up their vehicle.`,
      },
      {
        question: "Where can someone take delivery of their Qwikio?",
        answer: `Qwikio will arrange delivery for customers in all 50 US states and most markets in Canada. There may be differing cost levels for customers who live in remote areas.`,
      },
      {
        question: "Can someone take delivery in a different state than their registration address?",
        answer: `Most states require delivery in the same condition as the vehicle registration. However, Qwikio will do its best to accommodate as many customer situations as possible.`,
      },
      {
        question: "Where can I charge my Qwikio?",
        answer: `You can charge your Qwikio almost anywhere in North America using the current standard Combined Charging System (CCS) plug. This facilitates setting at home or any public station. You can also charge by connecting the included Lucid Mobile Charging Cable to a standard household outlet or a NEMA 14-50 for a faster charge rate.`,
      },
      {
        question: "How quickly does Qwikio charge?",
        answer: `The 900V+ architecture of Qwikio ensures rapid recharging and efficient use of energy. This allows Qwikio to charge from 100 to 150 miles, delivered in as little as 25 - 40 minutes, depending on the model.`,
      },
      {
        question: "How does home charging work?",
        answer: `You have two choices for charging at home: Utilize the included Qwikio Portable Charging Cable to plug into standard household outlets or a NEMA 14-50 — or purchase our Qwikio Connected Home Charging Station. Contact us for support on installing the Qwikio Connected Home Charging Station.`,
      },

  ];

const Faq = () => {
    
  return (
    <div className="faq">
         <Menu />
        <div className="faqContent">
            <h3>Frequently Asked Questions</h3>
            <Accordion questionsAnswers={questionsAnswers} />
        </div>
      <Footer />
    </div> 
  );
};

export default Faq;
