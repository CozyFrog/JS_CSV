/*
function stripCSV

Author: Garrett Sward (garrett.sward@gmail.com)

Description: The function will take in a backtick-based
string containing a small CSV file and output an array
containing the Rows of data.
*/


/* Create a Row object to store each line of data
as an array, and the row's position in the csv
*/
function Row(data, pos) {
	this.data = data;
	this.pos = pos;
}

/* Create an Array that will store the Rows
from the CSV file
*/
let dataArray = [];



function stripCSV(csv_str) {
	let l = csv_str.length;
	let str = '';
	let d = [];
	let p = 0;
	for (let i = 0; i < l; i++) {
		if (csv_str[i] == ',') {	// Reached the end of a data cell
			d.push(str);
			str = '';
		} else if (csv_str[i] == '\n') {	// Reached the end of a row
			d.push(str);
			const row = new Row(d, p);
			dataArray.push(row);
			str = '';
			d = [];
			p += 1;
		} else {
			str += csv_str[i];
		}
	}
}


// *-----------Test-----------*

test_str = `First,Last,Address,City,State,Zip
John,Doe,120 jefferson st.,Riverside,NJ,80752
Jack,McGinnis,220 hobo Av.,Phila,PA,91191
John,Repici,120 Jefferson St.,Riverside,NJ,8075
Stephen,Tyler,7452 Terrace road,SomeTown,SD,91234
Greg,Blankman,SomeTown,SD,29812`

stripCSV(test_str);

for (j = 0; j < dataArray.length; j++)
	console.log(dataArray[j]);