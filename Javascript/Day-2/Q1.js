const employees = [
  { id: 1, name: 'John', dept: 'Engineering', salary: 80000 },
  { id: 2, name: 'Jane', dept: 'Engineering', salary: 95000 },
  { id: 3, name: 'Bob', dept: 'Marketing', salary: 65000 },
  { id: 4, name: 'Alice', dept: 'Engineering', salary: 88000 },
  { id: 5, name: 'Charlie', dept: 'Marketing', salary: 72000 },
  { id: 6, name: 'Diana', dept: 'HR', salary: 70000 }
];

const result = employees.reduce((acc, emp) => {
    
  if (!acc[emp.dept]) {
    const deptEmployees = employees.filter(e => e.dept === emp.dept);
    const names = deptEmployees.map(e => e.name);
    const avgSalary =
      deptEmployees.reduce((sum, e) => sum + e.salary, 0) / deptEmployees.length;

    acc[emp.dept] = {
      employees: names,
      avgSalary: Number(avgSalary.toFixed(2)),
      totalCount: deptEmployees.length
    };
  }
  return acc;
}, {});

console.log(result);
