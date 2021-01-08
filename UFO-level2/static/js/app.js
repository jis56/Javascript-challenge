var tableData = data;
var button = d3.select("#filter-btn");
var form = d3.select("#form");
var tbody = d3.select("tbody");
var resetbtn = d3.select("#reset-btn");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];

var populate = (dataInput) => {

  dataInput.forEach(ufoSightings => {
    var row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(ufoSightings[column])
    )
  });
};

//Populate table
populate(data);

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
    d3.event.preventDefault();

    var inputDate = d3.select("#date").property("value");
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");
    // Filter by field matching input value
    var filteredDate = data.filter(data => data.datetime === inputDate);
    console.log(filteredDate);
    var filteredCity = data.filter(data => data.city === inputCity);
    console.log(filteredCity);
    var filteredState = data.filter(data => data.state === inputState);
    console.log(filteredState);
    var filteredCountry = data.filter(data => data.country === inputCountry);
    console.log(filteredCountry);
    var filteredShape = data.filter(data => data.shape === inputShape);
    console.log(filteredShape);

    var filteredData = data.filter(data => data.datetime === inputDate || data.city === inputCity || data.state === inputState || data.country === inputCountry || data.shape === inputShape);
    console.log(filteredData);


    var tbody= d3.select("tbody");

    filteredData.forEach((sighting) => {
        var row = tbody.append("tr"); 
        Object.entries(sighting).forEach(([key,value])=> {
        var cell = row.append("td");
        cell.text(value);
        });
    }); 

};
