import React from "react";
import { BsEnvelope, BsSearch } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header>
      <div className="search">
        <BsSearch />
        <input type="text" placeholder="Find Something ..." />
      </div>
      <section>
        <div className="menu">
          <h3>Paul Tuner</h3>
          <h5>Admin</h5>
        </div>
        <img
          src="https://images.generated.photos/53lGNdSEj-ZCjq573ZKanXbGbCqTnQBLUpvwSUasobw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvMjk4ZjM4/MjMtYTI5NC00ZDVh/LWFlZDUtZDcyYWM0/NmRmZjliLmpwZw.jpg"
          alt="Paul Tuner"
        />

        <div className="message">
          <BsEnvelope />
          <h6>5</h6>
        </div>
        <div className="notification">
          <IoNotificationsOutline />
          <h6>8</h6>
        </div>
      </section>
    </header>
  );
};

export default Header;
