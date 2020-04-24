if (4 + 3 === 7) {
    alert("oi chu");
    console.log("aqui tbm chu");

}

var button = document.getElementById("enter");
var button2 = document.getElementById("new");
var input = document.getElementById("number1");
var list1 = document.getElementById("list1");
var list2 = document.getElementById("list2");
var newav = input.value
var prev1 = 0
var prev2 = 0
var prev3 = 0

button.addEventListener("mouseover", function () {
    console.log(input.value);



})


button.addEventListener("click", function () {
    prev2 = prev2 + 1;
    newav = (parseInt(input.value) + prev3) / prev2;
    prev1 = parseInt(input.value);
    newav = newav.toFixed(1);
    prev3 = prev3 + prev1;
    if (input.value.length > 0) {
        console.log(input.value);

        if (list1.value.length === 0) {
            list1.value = newav
            list2.value = newav
        } else {
            list1.value = list1.value + " - " + prev1.toFixed(1)
            list2.value = list2.value + " - " + newav
        }

        input.value = "";
        console.log("prev1 - " + prev1);
        console.log("prev2 - " + prev2);
        console.log("new - " + newav);

    }

})


button2.addEventListener("click", function () {
    list1.value = ""
    list2.value = null
    prev1 = 0
    prev2 = 0
    prev3 = 0

})