/** @format */

// Initial array of employees
let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

// Function to print employees with profession "developer" using map()
function PrintDeveloperbyMap() {
  // Using map to iterate through array
  arr.map((employee) => {
    // Checking if profession is developer
    if (employee.profession === "developer") {
      console.log(employee); // Printing developer objects
    }
  });
}

// Function to print employees with profession "developer" using forEach()
function PrintDeveloperbyForEach() {
  // Using forEach to iterate through array
  arr.forEach((employee) => {
    // Checking if profession is developer
    if (employee.profession === "developer") {
      console.log(employee); // Printing developer objects
    }
  });
}

// Function to add a new employee object to the array
function addData() {
  // Creating new employee object
  let newEmployee = {
    id: 4,
    name: "susan",
    age: "20",
    profession: "intern",
  };

  // Adding new object to existing array
  arr.push(newEmployee);

  // Printing updated array
  console.log(arr);
}

// Function to remove employee with profession "admin"
function removeAdmin() {
  // Using filter to remove admin profession
  arr = arr.filter((employee) => employee.profession !== "admin");

  // Printing updated array after removal
  console.log(arr);
}

// Function to create another array and concatenate it with existing array
function concatenateArray() {
  // Creating new array with 3 different employee objects
  let newArr = [
    { id: 5, name: "mike", age: "22", profession: "designer" },
    { id: 6, name: "emma", age: "21", profession: "tester" },
    { id: 7, name: "alex", age: "23", profession: "manager" },
  ];

  // Concatenating both arrays
  let combinedArray = arr.concat(newArr);

  // Printing final combined array
  console.log(combinedArray);
}
