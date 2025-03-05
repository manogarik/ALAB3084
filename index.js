//PART1
//Feeling loopy

console.log("The seperated cells from a CSV file: ");
const str = "id,name,occupation,age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const newstr = str.split("\n");
let number_of_cols;
for(const c of newstr)
{
    const row = c.split(",");
    console.log(row[0],row[1],row[2],row[3]);
    number_of_cols = row.length;
}

//PART2
//EXPANDING FUNCTIONALITY
//const number_of_cols = newstr.length;
console.log("Number of cols " + number_of_cols);
let newarray=[];
for (const n of newstr)
{
    const count = n.split(",");
    newarray.push(count);
    
}
console.log(newarray);

//PART3
//TRANSFORMING DATA
//let obj = {};
console.log("TRANSFORMING THE DATA INTO OBJECT");
let result = [];
for(j = 1; j <= 4 ; j++)
{
    const obj = {};
    obj[newarray[0][0]] = newarray[j][0];
    obj[newarray[0][1]] = newarray[j][1];
    obj[newarray[0][2]] = newarray[j][2];
    obj[newarray[0][3]] = newarray[j][3];
    result.push(obj);
}
console.log(result);

//PART4
//Manipulating the array of objects

//Removing last element
result.pop();
console.log("After removing the last element: " );
console.log(result);

//inserting an object at index 1
console.log("After inserting an element at index 1: ")
result.splice(1,0,{id: "48", name: "Barry", occupation: "Runner", age: "25"});
console.log(result);

//Adding an object to the end of the array
console.log("After adding the object to the end of the array : ");
result.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(result);