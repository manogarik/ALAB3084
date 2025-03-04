//PART1
//Feeling loopy

console.log("The seperated cells from a CSV file: ");
const str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const newstr = str.split("\n");
for(const c of newstr)
{
    const row = c.split(",");
    console.log(row[0],row[1],row[2],row[3]);
}

//PART2
//EXPANDING FUNCTIONALITY
let newarray=[];
for (const n of newstr)
{
    const count = n.split(",");
    newarray.push(count);
    
}
console.log(newarray);

//PART3
//TRANSFORMING DATA
