import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaRegEdit, FaArrowCircleLeft } from "react-icons/fa";
import datas from "../../data";

const Student = () => {
  const params = useParams();
  const [isUpdated, setIsUpdated] = useState(false);
  const data = datas.students.filter((student) => student.id == params.id);
  const [student, setStudent] = useState(data[0]);

  const handleUpdate = () => {
    setIsUpdated(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUpdated(false);
  };

  return (
    <div className="student">
      <h1>About Me</h1>
      <Link to="/students">
        <FaArrowCircleLeft />
      </Link>

      <div className="about">
        <img src={student.image} alt={student.name} />
        <div className="details">
          <h2>
            {student.name}{" "}
            <span onClick={handleUpdate}>
              <FaRegEdit />
            </span>
          </h2>
          {isUpdated === false ? (
            <ul>
              <li>
                Name : <span>{student.name}</span>
              </li>
              <li>
                Gender : <span>{student.gender}</span>
              </li>
              <li>
                FatherName : <span>{student.fatherName}</span>
              </li>
              <li>
                MotherName : <span>{student.motherName}</span>
              </li>
              <li>
                Date Of Birth : <span>{student.dob}</span>
              </li>
              <li>
                Religion : <span>{student.religion}</span>
              </li>
              <li>
                FatherOccupation : <span>{student.fatherOccupation}</span>
              </li>
              <li>
                Email : <span>{student.email}</span>
              </li>
              <li>
                Admission Date : <span>{student.admissionDate}</span>
              </li>
              <li>
                Class : <span>{student.class}</span>
              </li>
              <li>
                Address : <span>{student.address}</span>
              </li>
              <li>
                Phone : <span>{student.phone}</span>
              </li>
            </ul>
          ) : (
            <form onSubmit={handleSubmit}>
              <ul>
                <li>
                  Name :{" "}
                  <input
                    type="text"
                    value={student.name}
                    onChange={(e) =>
                      setStudent({ ...student, name: e.target.value })
                    }
                  />
                </li>
                <li>
                  Gender : <span>{student.gender}</span>
                </li>
                <li>
                  FatherName : <span>{student.fatherName}</span>
                </li>
                <li>
                  MotherName : <span>{student.motherName}</span>
                </li>
                <li>
                  Date Of Birth : <span>{student.dob}</span>
                </li>
                <li>
                  Religion :{" "}
                  <input
                    type="text"
                    value={student.religion}
                    onChange={(e) =>
                      setStudent({ ...student, religion: e.target.value })
                    }
                  />
                </li>
                <li>
                  FatherOccupation :{" "}
                  <input
                    type="text"
                    value={student.fatherOccupation}
                    onChange={(e) =>
                      setStudent({
                        ...student,
                        fatherOccupation: e.target.value,
                      })
                    }
                  />
                </li>
                <li>
                  Email :{" "}
                  <input
                    type="text"
                    value={student.email}
                    onChange={(e) =>
                      setStudent({ ...student, email: e.target.value })
                    }
                  />
                </li>
                <li>
                  Admission Date : <span>{student.admissionDate}</span>
                </li>
                <li>
                  Class :{" "}
                  <input
                    type="text"
                    value={student.class}
                    onChange={(e) =>
                      setStudent({ ...student, class: e.target.value })
                    }
                  />
                </li>
                <li>
                  Address :{" "}
                  <input
                    type="text"
                    value={student.address}
                    onChange={(e) =>
                      setStudent({ ...student, address: e.target.value })
                    }
                  />
                </li>
                <li>
                  Phone :{" "}
                  <input
                    type="text"
                    value={student.phone}
                    onChange={(e) =>
                      setStudent({ ...student, phone: e.target.value })
                    }
                  />
                </li>
                <input type="submit" value="Update" />
              </ul>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Student;
