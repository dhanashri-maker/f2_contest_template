// Given Array
let employees = [
  {id:1, name:"john", age:"18", profession:"developer"},
  {id:2, name:"jack", age:"20", profession:"developer"},
  {id:3, name:"karen", age:"19", profession:"admin"}
];

//  Print developers using map()
function PrintDeveloperbyMap() {
  employees.map(function(emp) {
    if(emp.profession === "developer") {
      console.log(emp);
    }
  });
}

//  Print developers using forEach()
function PrintDeveloperbyForEach() {
  employees.forEach(function(emp) {
    if(emp.profession === "developer") {
      console.log(emp);
    }
  });
}

//  Add new employee data
function addData() {
  let newEmployee = {
    id:4,
    name:"susan",
    age:"20",
    profession:"intern"
  };

  employees.push(newEmployee);
  console.log(employees);
}

//  Remove admin employees
function removeAdmin() {
  employees = employees.filter(function(emp) {
    return emp.profession !== "admin";
  });

  console.log(employees);
}

//  Concatenate another array
function ConcatinateArray() {

  let newEmployees = [
    {id:5, name:"mike", age:"22", profession:"designer"},
    {id:6, name:"emma", age:"23", profession:"tester"},
    {id:7, name:"robert", age:"21", profession:"manager"}
  ];

  let combinedArray = employees.concat(newEmployees);

  console.log(combinedArray);
}
