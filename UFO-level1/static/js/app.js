// from data.js
var tableData = data;

var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
    d3.event.preventDefault();

    var filledData = d3.selectAll("#ufo-table>tbody>tr");
    filledData.html("");

    var inputElement = d3.select("#datetime");
    var inputDate= inputElement.property("value");
    console.log(inputDate);
    console.log(tableData);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputDate);
    console.log(filteredData);

    var tbody= d3.select("tbody");

    filteredData.forEach((entry) => {
        var row = tbody.append("tr"); 
        Object.entries(entry).forEach(([key,value])=> {
        var cell = row.append("td");
        cell.text(value);
        });
    }); 

};