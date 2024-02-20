import React from "react";

function Example4() {
  let element = null;
  let isLoggedIn = true;

  if (isLoggedIn) {
    element = <h2>Wellcome Admin</h2>;
  } else {
    element = <h2> Please Login</h2>;
  }

  let employees = [
    { empId: 1234, name: "John", designation: "SE", exp: 2.5 },
    { empId: 4567, name: "Tom", designation: "SSE", exp: 5.5 },
    { empId: 8910, name: "Kevin", designation: "TA", exp: 1.5 },
  ];

  let names = ["pankaj", "john"];
  return (
    <>
      {/* {element} */}
      {/* using ternary opreator */}
      {/* {isLoggedIn ? <h2>Wellcome Admin</h2>:<h2>Please Login</h2>} */}
      {isLoggedIn && <h2>Welcome Admin</h2>}
      {!isLoggedIn && <h2>Please Login</h2>}
      <div>Hello,{names}</div>
      <table>
        <thead>
          <tr>
            <th>EmpId</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Eligibility</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.empId}>
                <td>{employee.empId}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
                <td>
                  {employee.exp >= 2.5 ? (
                    <h4>Eligible</h4>
                  ) : (
                    <h4>Not Eligible</h4>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Example4;
