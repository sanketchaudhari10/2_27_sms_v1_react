import React from "react";

const StudentList = () => {
  return (
    <div>
      <h2>Student List</h2>

      <table>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Number of Attempts</th>
            <th>Subjects Learning</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Rahul Kumar</td>
            <td>3</td>
            <td>
              <ol class="subject-list">
                <li>Math</li>
                <li>Science</li>
                <li>English</li>
              </ol>
            </td>
            <td>1998-05-15</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Pravin Tambe</td>
            <td>2</td>
            <td>
              <ol class="subject-list">
                <li>DSA</li>
                <li>M3</li>
                <li>Chemistry</li>
              </ol>
            </td>
            <td>1999-09-22</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
