import React from "react";

const AdmissionForm = () => {
  const number = Math.random() * 10000;
  const roll = `EL-${Math.round(number)} `;
  return (
    <div className="admissionForm">
      <h1>Add New Students</h1>
      <form>
        <div className="row">
          <div className="block">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="block">
            <label htmlFor="gender">Gender</label>
            <select id="gender">
              <option value="">Please Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="block">
            <label htmlFor="dob">Date of Birth</label>
            <input type="text" id="dob" />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="block">
            <label htmlFor="roll">Roll</label>
            <input type="text" id="roll" value={roll} />
          </div>
          <div className="block">
            <label htmlFor="religion">Religion</label>
            <select id="religion">
              <option value="">Please Select Religion</option>
              <option value="islam">Islam</option>
              <option value="christianity">Christianity</option>
            </select>
          </div>
          <div className="block">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="block">
            <label htmlFor="fatherName">Father's Name</label>
            <input type="text" id="fatherName" />
          </div>
          <div className="block">
            <label htmlFor="motherName">Mother's Name</label>
            <input type="text" id="motherName" />
          </div>
          <div className="block">
            <label htmlFor="fatherOcc">Father Occupation</label>
            <input type="text" id="fatherOcc" />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="block">
            <label htmlFor="class">Class</label>
            <input type="text" id="class" />
          </div>
          <div className="block">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" />
          </div>
        </div>
        <br />
        <input type="submit" value="Save" />
        <input type="reset" value="Reset" />
      </form>
    </div>
  );
};

export default AdmissionForm;
