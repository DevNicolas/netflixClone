import React, { useEffect, useState } from "react";
import "../styles/menu.css";
function Menu() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/1024px-Netflix_icon.svg.png"
        alt="Netflix logo"
      />

      <img
        className="nav__avatar"
        src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg"
        alt="Netflix User"
      />
    </div>
  );
}

export default Menu;
