import "./style.css";
import { useState } from "react";
import Question from "./Question";

const Faq = ({ faq }) => {
  const [showQues, setShowQues] = useState(false);
  return (
    <div className="faq">
      <h4 onClick={() => setShowQues((p) => !p)}>{faq.topic}</h4>
      {showQues && faq.questions.map((q, i) => <Question ques={q} key={i} />)}
    </div>
  );
};

export default Faq;
