import Flag from "../components/Flag";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/payment");
  };

  return (
    <div className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="add-info">
            <h1 className="info-heading">Class Fee: N2000</h1>
            <ul className="info">
              <li>The class is on Telegram</li>
              <li>After payment, you will be added to the group chat</li>
            </ul>
          </div>
          <form className="form">
            <div className="form-items">
              <div className="form-item">
                <label className="label">Full Name</label>
                <input placeholder="Full Name" className="form-input" />
              </div>
              <div className="form-item">
                <label className="label">Phone</label>
                <Flag />
              </div>
              <div className="form-item">
                <label className="label">Payment Method</label>
                <select id="payment" className="form-input">
                  <option value="Debit Card">Debit Card</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="Cryptocurrency">Cryptocurrency</option>
                </select>
              </div>
              <div>
                <button onClick={onClick} className="btn btn-sign-up">
                  Pay
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
