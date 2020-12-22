var name = document.getElementById("show").innerHTML;
console.log(name);
document.getElementById("show").innerHTML = "World";

var divTag = document.createElement("div");
divTag.innerHTML = "Nice"; // <div>Nice</div>

document.getElementById("show").append(divTag);
console.log("---------------------------------------");

var li_1 = document.createElement("li");
var li_2 = document.createElement("li");
li_1.innerHTML = "Apple";
li_2.innerHTML = "Orange";

document.getElementById("fruit").append(li_1);
document.getElementById("fruit").append(li_2);
/////////////////////////////////////////

var grade = 0;
for (var i = 1; i <= 100; i++) {
    console.log(grade = grade + i);
}
document.write("결과값: " + grade + "입니다.")