const data = [
    "AA-0001",
    "AA-0002",
    "AA-0003",
    "AA-0004",
    "AB-0001",
    "AB-0002",
    "AB-0003",
    "AB-0004",
    "AC-0001",
    "AC-0002",
    "AC-0003",
    "AC-0004"
];

function findPlates() {
    let startPlate = document.getElementById("startPlate").value;
    let endPlate = document.getElementById("endPlate").value;
  
    let startIndex = data.indexOf(startPlate);
    let endIndex = data.indexOf(endPlate);
    let result = "";
  
    if (startIndex !== -1 && endIndex !== -1) {
        if (startIndex < endIndex) {
            result = data.slice(startIndex, endIndex + 1);
        } else {
            result = data.slice(endIndex, startIndex + 1);
        }
    } else {
        result = "Invalid Plate Number";
    }
  
    document.getElementById("result").innerHTML = result.length-2;
    console.log(result.length)
    alert(result.length-2)
}