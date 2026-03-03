var array1 = [];
var array2 = [];
var cnt1;
var cnt2;


function check1() {
    const obs1 = document.getElementById("observations1");
    const selectedCodewords = document.querySelectorAll('#ex1 .code-word button[style="background-color: rgb(26, 255, 0);"]');
    const correctIds = ["a1", "a2", "a4", "a7"];
    let correctCounter = 0;
    let incorrectCounter = 0;

    selectedCodewords.forEach(button => {
        if (correctIds.includes(button.id)) {
            correctCounter++;
        } else {
            incorrectCounter++;
        }
    });

    let message = '';
    let color = '';

    if (selectedCodewords.length === 0) {
        message = "No codeword has been selected. Choose the codewords by clicking on them.";
        color = "black";
    } else {
        const selectedIds = Array.from(selectedCodewords, button => button.id);
        const isCorrect = correctIds.every(id => selectedIds.includes(id)) && selectedIds.length === correctIds.length;

        if (isCorrect) {
            message = "<b>Correct Answer <br> Click Next to go on second experiment.</b>";
            color = "green";
        } else {
            if (incorrectCounter > 0) {
                message = `<b>Incorrect Answer <br> You have selected ${incorrectCounter} vectors which are not codewords of the code. Please go through the Instructions, and try again.</b>`;
            } else {
                message = "<b>Incorrect Answer <br> Please go through the Instructions, and try again.</b>";
            }
            color = "red";
        }
    }

    message += ` <br> You have selected ${correctCounter} correct options.`;
    obs1.innerHTML = message;
    obs1.style.color = color;
}

// Call check1 function to handle the logic
        check1();

// Add event listeners to each codeword button
document.querySelectorAll('#ex1 .code-word button').forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the selection state
        if (button.style.backgroundColor === "rgb(26, 255, 0)") {
            button.style.backgroundColor = "";
        } else {
            button.style.backgroundColor = "rgb(26, 255, 0)";
        }
        
    });
});

function check2() {
    const obs1 = document.getElementById("observations2");
    const selectedCodewords = document.querySelectorAll('#ex2 .code-word button[style="background-color: rgb(26, 255, 0);"]');
    const correctIds = ["w1", "w2", "w3", "w5", "w9", "w10", "w12", "w13"];
    let correctCounter = 0;
    let incorrectCounter = 0;

    selectedCodewords.forEach(button => {
        if (correctIds.includes(button.id)) {
            correctCounter++;
        } else {
            incorrectCounter++;
        }
    });

    let message = '';
    let color = '';

    if (selectedCodewords.length === 0) {
        message = "No codeword has been selected. Choose the codewords by clicking on them.";
        color = "black";
    } else {
        const selectedIds = Array.from(selectedCodewords, button => button.id);
        const isCorrect = correctIds.every(id => selectedIds.includes(id)) && selectedIds.length === correctIds.length;

        if (isCorrect) {
            message = "<b>Correct Answer <br> Click Next to go on second experiment.</b>";
            color = "green";
        } else {
            if (incorrectCounter > 0) {
                message = `<b>Incorrect Answer <br> You have selected ${incorrectCounter} vectors which are not codewords of the code. Please go through the Instructions, and try again.</b>`;
            } else {
                message = "<b>Incorrect Answer <br> Please go through the Instructions, and try again.</b>";
            }
            color = "red";
        }
    }

    message += ` \n You have selected ${correctCounter} correct options.`;
    obs1.innerHTML = message;
    obs1.style.color = color;
}

// Call check2 function to handle the logic
        check2();

// Add event listeners to each codeword button
document.querySelectorAll('#ex2 .code-word button').forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the selection state
        if (button.style.backgroundColor === "rgb(26, 255, 0)") {
            button.style.backgroundColor = "";
        } else {
            button.style.backgroundColor = "rgb(26, 255, 0)";
        }
        
    });
});

function deselect1() {
    document.querySelectorAll('#ex1 .code-word button').forEach(button => {
        button.style.backgroundColor = ""; // Reset background color
    });
}

function deselect2() {
        document.querySelectorAll('#ex2 .code-word button').forEach(button => {
        button.style.backgroundColor = ""; // Reset background color
    });
}

function pa1() {
    const part1 = document.getElementById("ex1");
    const part2 = document.getElementById("ex2");
    const form1 = document.getElementById("form2");
    const obs1 = document.getElementById("observations2");

    part1.style.display = "block";
    part2.style.display = "none";
    obs1.innerHTML = ""; 
    form1.reset();
}

function pa2() {
    const part1 = document.getElementById("ex1");
    const part2 = document.getElementById("ex2");
    const form2 = document.getElementById("form1");
    const obs2 = document.getElementById("observations1");

    part1.style.display = "none";
    part2.style.display = "block";
    obs2.innerHTML = "";
    form2.reset();
}


// Add event listeners to the buttons
document.getElementById('submitBtn1').addEventListener('click', check1);
document.getElementById('resetBtn1').addEventListener('click', deselect1);
document.getElementById('nextBtn1').addEventListener('click', pa2);
document.getElementById('submitBtn2').addEventListener('click', check2);
document.getElementById('resetBtn2').addEventListener('click', deselect2);
document.getElementById('prevBtn2').addEventListener('click', pa1);