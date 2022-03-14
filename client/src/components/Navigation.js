import React from "react";
import { RiGroupLine, RiFilePaperLine, RiSettings2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoSchoolSharp } from "react-icons/io5";
import {
  GiBookmarklet,
  GiDarkSquad,
  GiCalculator,
  GiPerson,
  GiPencilRuler,
  GiCalendar,
  GiNotebook,
  GiSpeedometer,
} from "react-icons/gi";

const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <IoSchoolSharp />
          School Management
        </Link>
      </div>
      <ul>
        <Link to="/">
          <li>
            <GiSpeedometer />
            Dashboard
          </li>
        </Link>
        <Link to="/students">
          <li>
            <GiPerson />
            Students
          </li>
        </Link>

        <Link to="/teachers">
          <li>
            <GiDarkSquad />
            Teachers
          </li>
        </Link>

        <li>
          <RiGroupLine />
          Parents
        </li>
        <li>
          <GiCalculator />
          Acconunt
        </li>
        <li>
          <GiPencilRuler />
          Class
        </li>
        <li>
          <GiBookmarklet />
          Subject
        </li>
        <li>
          <GiCalendar />
          Class Routine
        </li>
        <li>
          <GiNotebook />
          Attendence
        </li>
        <li>
          <RiFilePaperLine />
          Exam
        </li>
        <li>
          <RiSettings2Line />
          Account
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
