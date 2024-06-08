var array1 = [];
var array2 = [];
var cnt1;
var cnt2;


function check1() {
    const obs1 = document.getElementById("observations1");
    const selectedCodewords = document.querySelectorAll('#ex1 .code-word button[style="background-color: rgb(26, 255, 0);"]');
    const correctIds = ["a1", "a2", "a4", "a7"];
    let correctCounter = 0;
 
    selectedCodewords.forEach(button => {
        if (correctIds.includes(button.id)) {
            correctCounter++;
        }
    });

    if (selectedCodewords.length === 0) {
        obs1.innerHTML = "No codeword has been selected. Choose the codewords by clicking on them.";
        obs1.style.color = "black";
    } else {
        const selectedIds = Array.from(selectedCodewords, button => button.id);
        const isCorrect = correctIds.every(id => selectedIds.includes(id)) && selectedIds.length === correctIds.length;

        if (isCorrect) {
            obs1.innerHTML = "<b>Correct Answer <br> Click Next to go on second experiment.</b>";
            obs1.style.color = "green";
        } else {
            obs1.innerHTML = "<b>Incorrect Answer <br> Please go through the Instructions, and try again.</b>";
            obs1.style.color = "red";
        }
    }

    obs1.innerHTML += ` You have selected ${correctCounter} correct options.`;
    obs1.style.color = correctCounter === correctIds.length ? "blue" : "red";
}

// Add event listeners to each codeword button
document.querySelectorAll('#ex1 .code-word button').forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the selection state
        if (button.style.backgroundColor === "rgb(26, 255, 0)") {
            button.style.backgroundColor = "";
        } else {
            button.style.backgroundColor = "rgb(26, 255, 0)";
        }
        // Call check1 function to handle the logic
        check1();
    });
});



function check2() {
    const obs1 = document.getElementById("observations2");
    const selectedCodewords = document.querySelectorAll('#ex2 .code-word button[style="background-color: rgb(26, 255, 0);"]');

    if (selectedCodewords.length == 0) {
        obs1.innerHTML = "No codeword has been selected. Choose the codewords by clicking on them.";
        obs1.style.color = "black";
    } else {
        const selectedIds = Array.from(selectedCodewords).map(button => button.id);
        const correctIds = ["w1", "w2", "w3", "w5", "w9", "w10", "w12", "w13"];
        //const isCorrect = selectedIds.every(id => correctIds.includes(id));
        const isCorrect = correctIds.every(id => selectedIds.includes(id)) && selectedIds.length === correctIds.length;


        if (isCorrect) {
            obs1.innerHTML = "<b>Correct Answer </b>";
            obs1.style.color = "green";
        } else {
            obs1.innerHTML = "<b>Incorrect Answer <br> Please go through the Instructions, and try again.</b>";
            obs1.style.color = "red";
        }
    }
}


function deselect1() {
    deselect('.experiment1 button', 'observations1', 'cnt1', 'array1');

        // Clear the selected buttons
        const buttons = document.querySelectorAll('#ex1 .code-word button');
        buttons.forEach(button => {
            button.style.background = "rgb(200, 200, 200)";
        });
    
        // Clear the observations
        obs1.innerHTML = "";
    
        // Clear the array1 variable
        array1 = [];
}

function deselect2() {
    deselect('.experiment2 button', 'observations2', 'cnt2', 'array2');

        // Clear the selected buttons
        const buttons = document.querySelectorAll('#ex2 .code-word button');
        buttons.forEach(button => {
            button.style.background = "rgb(200, 200, 200)";
        });
    
        // Clear the observations
        obs1.innerHTML = "";
    
        // Clear the array1 variable
        array1 = [];
}

function deselect(selector, observationsId, countVariable, arrayVariable) {
    const buttons = document.querySelectorAll(selector);
    buttons.forEach(button => {
        button.style.background = "rgb(26, 255, 0)";
    });

    document.getElementById(observationsId).innerHTML = "";
    
    window[countVariable] = 0;
    window[arrayVariable] = [];
}

function pa1() {
    const part1 = document.getElementById("ex1");
    const part2 = document.getElementById("ex2");
    const form1 = document.getElementById("form1");
    const obs1 = document.getElementById("observations1");

    part1.style.display = "block";
    part2.style.display = "none";
    obs1.innerHTML = ""; 
    form1.reset();
}

function pa2() {
    const part1 = document.getElementById("ex1");
    const part2 = document.getElementById("ex2");
    const form2 = document.getElementById("form2");
    const obs2 = document.getElementById("observations2");

    part1.style.display = "none";
    part2.style.display = "block";
}