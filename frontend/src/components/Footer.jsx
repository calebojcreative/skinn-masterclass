import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { subscribe, reset } from "../features/auth/authSlice";

function Footer() {
  const [formData, setFormData] = useState({ email: "" });

  const { email } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { subscriber, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // Redirect if subscribed
    if (isSuccess || subscriber) {
      navigate("/");
    }

    dispatch(reset());
  }, [isError, isSuccess, subscriber, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onClick = () => {
    if (email) {
      dispatch(subscribe(email));
    }
  };

  return (
    <div className="footer">
      <div className="newsletter">
        <p className="newsletter-heading">Subscribe to our newsletter</p>
        <div>
          <label className="label-subscribe">Enter your email address</label>
          <div className="subscribe">
            <input
              placeholder="username@site.com"
              className="input-subscribe"
              onChange={onChange}
              id="email"
              name="email"
              value={email}
              required
            />
            <button onClick={onClick} className="btn btn-subscribe">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Michelle Skinn's Masterclass</p>
        <p>Copyright &copy; 2022 - All rights reserved </p>
      </div>
    </div>
  );
}

export default Footer;
