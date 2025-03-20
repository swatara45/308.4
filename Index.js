let str = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'

let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';
let commas = 0;
let table = []

for (let i = 0; i < str.length; i++) {
  if (str[i] === ',') {
    // if char is a comma, do this
    commas++;
  } else if (str[i] === '\n') {
    //If char is a "\n", do this\
    console.log(cell1, cell2, cell3, cell4);
    commas = 0;
    cell1 = ``;
    cell2 = ``;
    cell3 = ``;
    cell4 = ``;

  } else {
    // any other char
    if (commas == 0) {
      // if 0 commas
      cell1 += str[i];
    } else if (commas == 1) {
      // if 1 commas
      cell2 += str[i];
    } else if (commas == 2) {
      // if 2 commas
      cell3 += str[i];
    } else {
      // if 3 or more
      cell4 += str[i];
    }
  }

  if (i === str.length - 1) { // if index number is the same as length of string
    console.log(cell1, cell2, cell3, cell4);
  }
}

// Question 2 Expanding functionality

// Split the string into rows using the newline character
let rows = str.split('\n');

// Loop through each row
for (let i = 0; i < rows.length; i++) {
  // Split each row by commas to separate columns
  let columns = rows[i].split(',');

  // Add the resulting array to the 2D array
  table.push(columns);
}

// Log the 2D array to check the result
console.log(table);




// Question  3
const data = [
  ["ID", "Name", "Occupation", "Age"],
  ["42", "Bruce", "Knight", "41"],
  ["57", "Bob", "Fry Cook", "19"],
  ["63", "Blaine", "Quiz Master", "58"],
  ["98", "Bill", "Doctor’s Assistant", "26"]
];

const info = [];

//starting from the row after header row, loop through each row
for (let i = 1; i < data.length; i++) {
  //create a person object for each row in the data
  let row = data[i];
  let personObject = {};

  //loop through the array elements of the row and add the key-value pair to personObj
  for (let k = 0; k < row.length; k++) {
    // convert the keys to lower case
    let key = data[0][k].toLowerCase();
    personObject[key] = row[k];
  }
  // after finish the row, add personObj to peopleArray
  info.push(personObject);
}

console.log(info);


// Part 4: Sorting and Manipulating Data
console.log('\nPart 4: Sorting and Manipulating Data\n')

// Sort array in place
info.sort();

info.pop();
info.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
info.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })

console.log(info);

// Calculate the average age of the group
let numberOfPeople = info.length;
let totalAge = 0;

for (let i = 0; i < info.length; i++) {
  let personObject = info[i];
  totalAge += parseInt(personObject.age);
}

console.log(`The average age of the group is ${totalAge / numberOfPeople}`)


// Part 5: Full Circle
console.log('\nPart 5: Full Circle\n');

//convert array of objects to multi-dimensional array, then covert to csv string 
const csvArray = [];

// find the headers from the 1st object, add to array
let csvHeaders = Object.keys(info[0]);
csvArray.push(csvHeaders);

// get the rest of the data from object value, store in an array, then add to csvArray
for (let person in info) {
  let personObject = info[person];
  let personArr = [];

  for (const key in personObject) {
    personArr.push(personObject[key]);
  }

  csvArray.push(personArr);
}
let rowsArr = [];

for (let i = 0; i < csvArray.length; i++) {
  let row = csvArray[i];
  rowsArr.push(row.join(','));
}

let csvConvertedStr = rowsArr.join('\n');
console.log(csvConvertedStr);