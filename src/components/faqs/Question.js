import { useState } from "react";

const Question = ({ ques }) => {
  const [showDes, setShowDes] = useState(false);
  return (
    <div className="ques" onClick={() => setShowDes((p) => !p)}>
      <h4>{ques.title}</h4>
      {showDes && <p>{ques.description}</p>}
    </div>
  );
};

export default Question;
