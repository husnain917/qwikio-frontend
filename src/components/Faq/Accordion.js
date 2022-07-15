import { useEffect }from "react";
import AccordionItem from "./AccordionItem";
import "./Accordion.css";

const Accordion = ({ questionsAnswers }) => {


  useEffect(()=>{
        
    return () => {
        const acc = document.querySelectorAll(".accordion");
        acc.forEach(e=>{
          e.addEventListener("click", ()=>{
            console.log(e);
            e.classList.toggle("active");
            let panel = e.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }
          });
    
        })

    }

  }, [] );

  const renderedQuestionsAnswers = questionsAnswers.map((item) => {
    return (
      <AccordionItem
        item={item}
      />
    );
  });

  return (
    <div className="faq">
      <div className="faq__list">{renderedQuestionsAnswers}</div>
    </div>
  );
};

export default Accordion;