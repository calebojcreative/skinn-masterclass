import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/sign-up");
  };

  return (
    <div className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="heading">
            <p>Learn how to deliver to your</p>
            <p>customer's doorstep with</p>
            <p>just N1500 using DHL</p>
          </div>
          <div className="shipment">
            <p>Get 70% off your first shipment at the end of the class!</p>
          </div>
          <div>
            <button onClick={onClick} className="btn btn-sign-up">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
