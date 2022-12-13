import React from "react";
import "./StudentList.css";
import Student from "./Student";

const StudentList = (props) => {
  const studentComponents = props.students.map((student) => {
    return (
      <li>
        <Student name={student.nameData} email={student.emailData}></Student>
      </li>
    );
  });

  return (
    <section>
      <h2 className="student-list__heading yellow-bg">Student List</h2>
      <ul className="student-list">{studentComponents}</ul>
    </section>
  );
};

export default StudentList;
