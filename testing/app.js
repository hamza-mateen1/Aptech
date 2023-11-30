function calculateResult() {
    // Get marks from input fields
    var marks1 = parseFloat(document.getElementById("subject1").value) || 0;
    var marks2 = parseFloat(document.getElementById("subject2").value) || 0;
    var marks3 = parseFloat(document.getElementById("subject3").value) || 0;
    var marks4 = parseFloat(document.getElementById("subject4").value) || 0;

    // Calculate total marks and percentage
    var totalMarks = marks1 + marks2 + marks3 + marks4;
    var percentage = (totalMarks / 400) * 100;

    // Display result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Total Marks: " + totalMarks + "<br>";
    resultElement.innerHTML += "Percentage: " + percentage.toFixed(2) + "%";
}