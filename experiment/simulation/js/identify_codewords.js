var array1 = [];
var array2 = [];
var cnt1;
var cnt2;

function change(id, experiment) {
    const element = document.getElementById(id);

    if (element.style.backgroundColor === "rgb(26, 255, 0)") {
        element.style.backgroundColor = "rgb(200, 200, 200)";
        if (experiment === 1) {
            const index = array1.indexOf(id);
            if (index !== -1) {
                array1.splice(index, 1);
            }
        } else if (experiment === 2) {
            const index = array2.indexOf(id);
            if (index !== -1) {
                array2.splice(index, 1);
            }
        }
    } else {
        element.style.backgroundColor = "rgb(26, 255, 0)";
        if (experiment === 1) {
            array1.push(id);
        } else if (experiment === 2) {
            array2.push(id);
        }
    }
}

function check1() {
    const obs1 = document.getElementById("observations1");
    const selectedCodewords = document.querySelectorAll('#ex1 .code-word button[style="background-color: rgb(26, 255, 0);"]');

    if (selectedCodewords.length == 0) {
        obs1.innerHTML = "No codeword has been selected for experiment 1. Choose the codewords by clicking on them.";
        obs1.style.color = "black";
    } else {
        const selectedIds = Array.from(selectedCodewords).map(button => button.id);
        const correctIds = ["a1", "a3", "a7", "a4"];
        //const isCorrect = selectedIds.every(id => correctIds.includes(id));
        const isCorrect = correctIds.every(id => selectedIds.includes(id)) && selectedIds.length === correctIds.length;


        if (isCorrect) {
            obs1.innerHTML = "<b>Correct Answer for Experiment 1!!!</b>";
            obs1.style.color = "green";
        } else {
            obs1.innerHTML = "<b>Wrong Answer for Experiment 1!!!</b>";
            obs1.style.color = "red";
        }
    }
}

function check2() {
    const obs1 = document.getElementById("observations2");
    const selectedCodewords = document.querySelectorAll('#ex2 .code-word button[style="background-color: rgb(26, 255, 0);"]');

    if (selectedCodewords.length == 0) {
        obs1.innerHTML = "No codeword has been selected for experiment 2. Choose the codewords by clicking on them.";
        obs1.style.color = "black";
    } else {
        const selectedIds = Array.from(selectedCodewords).map(button => button.id);
        const correctIds = ["w1", "w2", "w3", "w5", "w9", "w10", "w12", "w13"];
        //const isCorrect = selectedIds.every(id => correctIds.includes(id));
        const isCorrect = correctIds.every(id => selectedIds.includes(id)) && selectedIds.length === correctIds.length;


        if (isCorrect) {
            obs1.innerHTML = "<b>Correct Answer for Experiment 2!!!</b>";
            obs1.style.color = "green";
        } else {
            obs1.innerHTML = "<b>Wrong Answer for Experiment 2!!!</b>";
            obs1.style.color = "red";
        }
    }
}

function getCnt1() {
    cnt1 = 0;
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] === "a1" || array1[i] === "a3" || 
            array1[i] === "a4" || array1[i] === "a7") {
            cnt1++;
        } else if (array1[i] === "a2" || array1[i] === "a9" || 
                  array1[i] === "a5" || array1[i] === "a6" || array1[i] === "a8") {
                  cnt1--;
        }
    }
}

function getCnt2() {
    cnt2 = 0;
    for (var i = 0; i < array2.length; i++) {
        if (array2[i] === "w1" || array2[i] === "w2" || array2[i] === "w3" || array2[i] === "w5" ||
            array2[i] === "w7" || array2[i] === "w8" || array2[i] === "w12" || array2[i] === "w13") {
            cnt2++;
        }
        else if (array2[i] === "w4" || array2[i] === "w6" || array2[i] === "w9" || array2[i] === "w10" ||
                array2[i] === "w11" || array2[i] === "w14" || array2[i] === "w15" || array2[i] === "w16") {
            cnt2--;
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