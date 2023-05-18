import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown,faCaretUp } from '@fortawesome/free-solid-svg-icons'

const Accordion = ({ accordionData }) => {
    console.log(accordionData);
    // const[isOpen, setIsOpen]=useState(false)
    //console.log(isOpen);

    const[accordionIDs, setaccordionIDs]=useState([ ])
    const [isOpen, setIsOpen] = useState(true);
   


    const handlerAccordion = (newID) => {
        setaccordionIDs((prevAccID)=>{
          return accordionIDs.includes(newID)  ? accordionIDs.filter((acc_id)=>
          {
            return acc_id !== newID
            
          })
          : [...prevAccID,newID]
        })
        
        setIsOpen(!isOpen)
    };
   console.log(accordionIDs,"==accordionIDs")


    return (
        <div className="accordions">
            
            {accordionData &&
                accordionData.map(({ id, title, content }) => (
                    <div className="accordion" key={id}>
                        <div className="accordion-title" onClick={() => handlerAccordion(id)}>
                            <h3>{title}</h3>
                            {isOpen ? <div><FontAwesomeIcon icon={faCaretDown}/></div> : <div><FontAwesomeIcon icon={faCaretUp}/></div> }
                            
                        </div>
                     {
                        accordionIDs?.map((acc_ID, index)=>
                        acc_ID===id && (
                        ( <div className="accordion-content" key={index}>
                            <p>{content}</p>
                        </div>
                        )))

                     }
                       
                    </div>
                ))}
        </div>
    );
};

export default Accordion;
