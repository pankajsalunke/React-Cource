import React from 'react'

function Example3() {
    var employees = [
        { empId: 1234, name: "John", designation: "SE" },
        { empId: 4567, name: "Tom", designation: "SSE" },
        { empId: 8910, name: "Kevin", designation: "TA" },
      ];
  return (
    <>
    <table>
        <thead>
            <th>EmpId</th>
            <th>Name</th>
            <th>Designation</th>
        </thead>
        <tbody>
            {employees.map((employee) => {
                return(
                    <tr key={employee.empId}>
                        <td>{employee.empId}</td>
                        <td>{employee.name}</td>
                        <td>{employee.designation}</td>
                    </tr>
                );
            })}
        </tbody>
    </table>
    </>
  )
}

export default Example3
