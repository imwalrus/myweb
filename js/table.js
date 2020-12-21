var tableTag = document.getElementById("tbl");

var trTag1 = document.createElement("tr");
var tdTag1 = document.createElement("td");
tdTag1.innerHTML = "Name";
tdTag1.setAttribute("id", "first");
tdTag1.setAttribute("class", "title");
var tdTag2 = document.createElement("td");
tdTag2.innerHTML = "Age";
tdTag2.setAttribute("class", "title");
trTag1.append(tdTag1);
trTag1.append(tdTag2);

console.log(trTag1);
tableTag.append(trTag1);

var trTag2 = document.createElement("tr");
var tdTag3 = document.createElement("td");
tdTag3.innerHTML = "Hong";
tdTag3.setAttribute("id", "first");
tdTag3.setAttribute("class", "data");
var tdTag4 = document.createElement("td");
tdTag4.innerHTML = "15";
tdTag4.setAttribute("class", "data");
trTag2.append(tdTag3);
trTag2.append(tdTag4);

console.log(trTag2);
tableTag.append(trTag2); 