import React from "react";
import data from "../../data";

const Promotion = () => {
  return (
    <div className="promotion">
      <h1>Student promotion</h1>
      <form>
        <div className="row">
          <div className="block">
            <label htmlFor="student">Student</label>
            <select id="student">
              <option value="">Select Student</option>
              {data.students.map((student) => (
                <option value={student.name} key={student.id}>
                  {student.name}
                </option>
              ))}
            </select>
          </div>
          <div className="block">
            <label htmlFor="currentDate">Current Session</label>
            <select id="currentDate">
              <option value="2022-2021">2022-2021</option>
              <option value="2021-2020">2021-2020</option>
              <option value="2020-2019">2020-2019</option>
            </select>
          </div>
          <div className="block">
            <label htmlFor="promotoDate">Promote Session</label>
            <select id="promotoDate">
              <option value="2022-2021">2022-2021</option>
              <option value="2021-2020">2021-2020</option>
              <option value="2020-2019">2020-2019</option>
            </select>
          </div>
          <div className="block">
            <label htmlFor="currentDate">Promotion From Class</label>
            <select id="currentDate">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="block">
            <label htmlFor="classTo">Promotion To Class</label>
            <select id="classTo">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <input type="submit" value="Save" />
        <input type="reset" value="Reset" />
      </form>
    </div>
  );
};

export default Promotion;
