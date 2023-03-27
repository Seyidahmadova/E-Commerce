import "./Faq.css";
import PagePath from "../../components/PagePath/PagePath";
import Brands from "../../components/Brands/Brands";
import FaqQuestion from "./FaqQuestion";

export default function Faq() {
  const ftitle ="Eu dictumst cum at sed euismood condimentum?"; 
  const fcont ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis."; 

  return (
    <div className="faq">
      <PagePath title="FAQ" path="/faq" curPage="Faq" />
      <div className="faq-content">
        <div className="generalInfo">
          <h1>Frequently asked questions</h1>
          <div className="faq-questions">
            <FaqQuestion ftitle={ftitle} fcont={fcont} />
            <FaqQuestion ftitle={ftitle} fcont={fcont} />
            <FaqQuestion ftitle={ftitle} fcont={fcont} />
            <FaqQuestion ftitle={ftitle} fcont={fcont} />
            <FaqQuestion ftitle={ftitle} fcont={fcont} />
            <FaqQuestion ftitle={ftitle} fcont={fcont} />
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
