import "./FaqQuestion.css";
import { useState } from "react";

export default function FaqQuestion(props) {
    const [show, setShow] = useState(false);
  return (
    <div className="f-quest">
      <p className="fq-title" onClick={() => setShow(!show)} style={{color: show?"#FB2E86":"#000080" }}>
        {props.ftitle}
      </p>
      {show ? (
        <p className="fq-answer">
          {props.fcont}
        </p>
      ) : null}
    </div>
  );
}
