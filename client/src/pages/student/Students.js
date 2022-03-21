import React from "react";
import data from "../../data";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllStudents } from "../../actions/student.action";

const Students = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllStudents());
  }, [dispatch]);

  return (
    <div className="students">
      <h1>All Students Data</h1>
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.students.map((student) => (
            <tr key={student.id}>
              <td>
                <Link to={`/student/${student.id}`}>
                  <img src={student.image} alt={student.name} />
                </Link>
              </td>
              <td>{student.name}</td>
              <td>{student.gender}</td>
              <td>{student.class}</td>
              <td>{student.address}</td>
              <td>{student.phone}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
