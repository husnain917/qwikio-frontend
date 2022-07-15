import React from "react";

const AccordionItem = ({item}) => {

    
return(
  <div className="faq__question">
    <button className="accordion">{item.question}</button>
    <div className="panel">
      <p>{item.answer}</p>
    </div>
  </div>

)};

export default AccordionItem;