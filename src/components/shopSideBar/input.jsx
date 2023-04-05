import "./input.css";

export default function Input(props) {
    return(
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
          {props.text}
          </label>
        </div>
    
    );
}