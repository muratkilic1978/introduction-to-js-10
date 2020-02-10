const studentsList = ["Janne", "Bo","Stinne", "Kasper", "Henry", "Simon", "David", "Rigmor"];

const squareNumbers = new Array(9, 25, 36, 49, 64, 81, 100);

const outputElement = document.querySelector("#links");



function printStudentsList() {
    for (let i = 0; i < studentsList.length; i++) {
        outputElement.innerHTML += "<li>"+studentsList[i]+"</li>";
    }
}

printStudentsList();