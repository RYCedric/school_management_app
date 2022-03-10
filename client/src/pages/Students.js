import React from "react";
import data from "../data";

const Students = () => {
  return (
    <>
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
                <img src={student.image} alt={student.name} />
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
    </>
  );
};

export default Students;
