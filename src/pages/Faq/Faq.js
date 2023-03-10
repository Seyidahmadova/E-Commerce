import "./Faq.css";
import PagePath from "../../components/PagePath/PagePath";
import Brands from "../../components/Brands/Brands";
import { useState } from "react";

export default function Faq() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  return (
    <div className="faq">
      <PagePath title="FAQ" path="/faq" curPage="Faq" />
      <div className="faq-content">
        <div className="generalInfo">
          <h1>General Information</h1>
          <div className="faq-questions">
            <div className="f-quest">
            <p className="fq-title" onClick={()=>setShow1(!show1)}>
              Eu dictumst cum at sed euismood condimentum?
            </p>
            {show1 ? (
              <p className="fq-answer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt sed tristique mollis vitae, consequat gravida
                sagittis.
              </p>
            ) : null}
            </div>
            <div className="f-quest">
            <p className="fq-title" onClick={()=>setShow2(!show2)}>
              Eu dictumst cum at sed euismood condimentum?
            </p>
            {show2 ? (
              <p className="fq-answer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt sed tristique mollis vitae, consequat gravida
                sagittis.
              </p>
            ) : null}
            </div>
            <div className="f-quest">
            <p className="fq-title" onClick={()=>setShow3(!show3)}>
              Eu dictumst cum at sed euismood condimentum?
            </p>
            {show3 ? (
              <p className="fq-answer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt sed tristique mollis vitae, consequat gravida
                sagittis.
              </p>
            ) : null}
            </div>
            <div className="f-quest">
            <p className="fq-title" onClick={()=>setShow4(!show4)}>
              Eu dictumst cum at sed euismood condimentum?
            </p>
            {show4 ? (
              <p className="fq-answer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt sed tristique mollis vitae, consequat gravida
                sagittis.
              </p>
            ) : null}
            </div>
          </div>
        </div>
        <div className="askQuestion">
            <h1>Ask a Question</h1>
            <form className="aq-form">
                <input type="text" placeholder="Your Mail"/>
                <input type="text" placeholder="Subject"/>
                <textarea placeholder="Type Your Message"/>
                <button>Send Mail</button>
            </form>
        </div>
      </div>
      <Brands />
    </div>
  );
}
