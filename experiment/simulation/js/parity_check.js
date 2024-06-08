function check1() {
    var a1 = parseInt(document.getElementById("a1").value);
    var a2 = parseInt(document.getElementById("a2").value);
    var a3 = parseInt(document.getElementById("a3").value);
    var a4 = parseInt(document.getElementById("a4").value);
    var a5 = parseInt(document.getElementById("a5").value);
    var a6 = parseInt(document.getElementById("a6").value);

    // Check if values are valid single-digit integers
    if (isNaN(a1) || isNaN(a2) || isNaN(a3) || isNaN(a4) || isNaN(a5) || isNaN(a6) ||
        a1 < 0 || a1 > 9 || a2 < 0 || a2 > 9 || a3 < 0 || a3 > 9 ||
        a4 < 0 || a4 > 9 || a5 < 0 || a5 > 9 || a6 < 0 || a6 > 9) {
        document.getElementById("obs1").innerHTML = "Please enter valid positive integers into the boxes.";
        document.getElementById("obs1").style.color = "black";
        return;
    }

    switch (true) {
            
        case (a1 === 3 && a2 === 6 && a3 === 3 && a4 === 3 && a5 === 3 && a6 === 3):
            document.getElementById("obs1").innerHTML = "Correct Answer <br> Click Next button to go to second sub-experiment.";
            document.getElementById("obs1").style.color = "green";
            break;

        case (a1 !== 3 || a2 !== 6):
            document.getElementById("obs1").innerHTML = "The dimension of parity-check matrix \(H\) is incorrect.<br> Please go through the Instructions, and try again.";
            document.getElementById("obs1").style.color = "blue";
            break;

        case (a5 !== 3 || a6 !== 3):
            document.getElementById("obs1").innerHTML = "The dimension of sub-matrix \(P^T\) is incorrect.<br> Please go through the Instructions, and try again.";
            document.getElementById("obs1").style.color = "blue";
            break;
    
        case (a3 !== 3 || a4 !== 3):
            document.getElementById("obs1").innerHTML = "The dimension of identity matrix \(I_{n-k}\) is incorrect.<br> Please go through the Instructions, and try again.";
            document.getElementById("obs1").style.color = "blue";
            break;
    
        default:
            document.getElementById("obs1").innerHTML = "Incorrect Answer <br> Please go through the Instructions, and try again.";
            document.getElementById("obs1").style.color = "red";
            break;
    }    

}

function check2() {
    const m1 = document.getElementById("m1").value;
    const m2 = document.getElementById("m2").value;
    const m3 = document.getElementById("m3").value;
    const m4 = document.getElementById("m4").value;
    const m5 = document.getElementById("m5").value;
    const m6 = document.getElementById("m6").value;
    const m7 = document.getElementById("m7").value;
    const m8 = document.getElementById("m8").value;
    const m9 = document.getElementById("m9").value;
    const obs2 = document.getElementById("obs2");

    // Check if any input field is empty
    if (!m1 || !m2 || !m3 || !m4 || !m5 || !m6 || !m7 || !m8 || !m9) {
        obs2.innerHTML = "Please fill each entry with bits";
        obs2.style.color = "black";
        return;
    }

    // Check if all required codewords are selected
    if (m1 == 1 && m2 == 0 && m3 == 1 && m4 == 1 && m5 == 1 && m6 == 0 && m7 == 0 && m8 == 1 && m9 == 1) {
        obs2.innerHTML = "<b>Correct Answer</b>";
        obs2.style.color = "green";
    } else {
        obs2.innerHTML = "<b>Incorrect Answer <br> Please go through the Instructions, and try again.</b>";
        obs2.style.color = "red";
    }
}


function initial1() {
    document.getElementById("obs1").innerHTML = "";
    document.getElementById("a1").value = "";
    document.getElementById("a2").value = "";
    document.getElementById("a3").value = "";
    document.getElementById("a4").value = "";
    document.getElementById("a5").value = "";
    document.getElementById("a6").value = "";
}

function initial2() {
    // Clear any messages and reset input fields
    document.getElementById("obs2").innerHTML = "";
    document.getElementById("m1").value = "";
    document.getElementById("m2").value = "";
    document.getElementById("m3").value = "";
    document.getElementById("m4").value = "";
    document.getElementById("m5").value = "";
    document.getElementById("m6").value = "";
    document.getElementById("m7").value = "";
    document.getElementById("m8").value = "";
    document.getElementById("m9").value = "";
}

function page1() {
    const part1 = document.getElementById("example1");
    const part2 = document.getElementById("example2");
    const form1 = document.getElementById("form1");
    const obs1 = document.getElementById("observations1");

    part1.style.display = "block";
    part2.style.display = "none";
    obs1.innerHTML = ""; 
    form1.reset();
}

function page2() {
    const part1 = document.getElementById("example1");
    const part2 = document.getElementById("example2");
    const form2 = document.getElementById("form2");
    const obs2 = document.getElementById("observations2");

    part1.style.display = "none";
    part2.style.display = "block";
}