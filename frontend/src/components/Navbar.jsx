import { useState } from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  const onClick = () => {
    openModal ? setOpenModal(false) : setOpenModal(true);
  };

  const onClickLogo = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <div onClick={onClickLogo} className="logo">
        <p>Michelle Skinn's</p>
        <p>Masterclass</p>
      </div>
      <div className="contact-us">
        <button onClick={onClick} className="btn btn-contact">
          Contact Us
        </button>
      </div>
      {openModal && (
        <div className="contact-us-list">
          <ul className="contact-list">
            <li className="contact-list-items">
              <a href="https://wa.me/2349032574807">
                <FaWhatsapp /> <span>Whatsapp</span>
              </a>
            </li>
            <li className="contact-list-items">
              <a href="tel:2349032574807">
                <FaPhone /> <span>Phone</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
