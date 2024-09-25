const generatorMatrices = [
    {
        matrix: [
            [1, 1, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 1, 1, 1, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ],
        dim: 4
    },
    {
        matrix: [
            [0, 1, 1, 1, 0, 1],
            [1, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 0, 1]
        ],
        dim: 3
    },
    {
        matrix: [
            [1, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 1]
        ],
        dim: 2
    },
    {
        matrix: [
            [1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1],
            [1, 0, 1, 0, 1]
        ],
        dim: 3
    },
    {
        matrix: [
            [1, 1, 0],
            [0, 0, 1],
            [0, 1, 0],
            [1, 0, 1]
        ],
        dim: 3
    }
];

var randomGeneratorMatrix = selectRandomGeneratorMatrix();
var dim = randomGeneratorMatrix.dim;
var codelength = randomGeneratorMatrix.matrix[0].length;

document.getElementById("generatorMatrix").innerHTML = "Consider the matrix \\(A \\)= " + formatMatrix(randomGeneratorMatrix.matrix) + " over \\( \\mathbb{F}_2 \\). ";
// document.getElementById("matrixInfo").innerHTML = "Dimensions: " + randomGeneratorMatrix.dim.join("x") + ", Length: " + randomGeneratorMatrix.length;


function selectRandomGeneratorMatrix() {
    const randomIndex = Math.floor(Math.random() * generatorMatrices.length);
    return generatorMatrices[randomIndex];
}

function formatMatrix(matrix) {
    return "\\(\\begin{bmatrix} " + matrix.map(row => row.join(" & ")).join("\\\\ ") + " \\end{bmatrix} \\)";
}

function reset() {
    const dimensionEntered = document.getElementById("dimensionEntered");
    dimensionEntered.innerHTML = "";

    initial();
}

function initial() {

    randomGeneratorMatrix = selectRandomGeneratorMatrix();
    dim = randomGeneratorMatrix.dim;
    codelength = randomGeneratorMatrix.matrix[0].length;

    const generatorMatrixElement = document.getElementById("generatorMatrix");
    generatorMatrixElement.innerHTML = "Consider the matrix \\(A \\)= " + formatMatrix(randomGeneratorMatrix.matrix) + " over \\( \\mathbb{F}_2 \\). ";
    // generatorMatrixElement.innerHTML = " \\(A \\)= " + formatMatrix(randomGeneratorMatrix.matrix);

    // Trigger MathJax to typeset the updated content
    MathJax.typeset([generatorMatrixElement]);

    const isGeneratorQuestion = document.getElementById("isGeneratorQuestion");
    const rateQuestion = document.getElementById("rateQuestion");
    const generatorForm = document.getElementById("generatorForm");
    const rateForm = document.getElementById("rateForm");

    const rateEntered = document.getElementById("rateEntered");

    // dimensionEntered.innerHTML = "Try with new matrix";
    rateEntered.innerHTML = "";

    isGeneratorQuestion.style.display = "block";
    rateQuestion.style.display = "none";

    generatorForm.reset();
    rateForm.reset();
}


function yesValidGeneratorMatrix() {
    const dim = randomGeneratorMatrix.dim;
    const dimensionEntered = parseInt(document.getElementById("dimensionInput").value);
    const isGeneratorQuestion = document.getElementById("isGeneratorQuestion");
    if (dimensionEntered == dim) {
        if (dim === randomGeneratorMatrix.matrix.length) {
            document.getElementById("dimensionEntered").innerHTML = "<b>Yay! Your answer is correct. This is indeed a true generator matrix. It has rank " + parseInt(dim) + " (full row-rank, i.e., all rows are linearly independent), and has " + parseInt(codelength) + " columns. Now you need to enter the rate of the code. </b>";
            document.getElementById("dimensionEntered").style.color = "green";

            isGeneratorQuestion.style.display = "none";
            rateQuestion.style.display = "block";
        } else {
            document.getElementById("dimensionEntered").innerHTML = "<b>Incorrect. Please check if the matrix is full rank.</b>";
            document.getElementById("dimensionEntered").style.color = "red";
        }
    } else {
        document.getElementById("dimensionEntered").innerHTML = "<b>Incorrect. Please try again.</b>";
        document.getElementById("dimensionEntered").style.color = "red";
    }

}

function notValidGeneratorMatrix() {
    const dim = randomGeneratorMatrix.dim;
    const dimensionEntered = parseInt(document.getElementById("dimensionInput").value);
    const isGeneratorQuestion = document.getElementById("isGeneratorQuestion");


    if (dimensionEntered == dim) {
        if (dimensionEntered != randomGeneratorMatrix.matrix.length) {
            document.getElementById("dimensionEntered").innerHTML = "<b>Correct Answer!!!</b>";
            document.getElementById("dimensionEntered").style.color = "green";

            // isGeneratorQuestion.style.display = "none";
            // rateQuestion.style.display = "block";



            document.getElementById("dimensionEntered").innerHTML = "<b>Yes, your answer that the previously showed matrix is not a generator matrix, is absolutely correct! Now, look at this new matrix, and answer the question again.</b>";

            initial();
        } else {
            document.getElementById("dimensionEntered").innerHTML = "<b>Incorrect. Please check if the matrix is full rank or not.</b>";
            document.getElementById("dimensionEntered").style.color = "red";
        }
    } else {
        document.getElementById("dimensionEntered").innerHTML = "<b>Incorrect. Please try again.</b>";
        document.getElementById("dimensionEntered").style.color = "red";
    }

}

function checkRate() {
    const dimensionEntered = document.getElementById("dimensionEntered");
    const rateEntered = document.getElementById("rateEntered");

    const dimensionInput = parseInt(document.getElementById("dimensionInput").value);
    const codelengthInput = parseFloat(document.getElementById("codelengthInput").value);

    const rateForm = document.getElementById("rateForm");

    // remove the dimensionEntered message
    dimensionEntered.innerHTML = "";
    // dimensionEntered.style.display = "none";s

    if (dimensionInput == dim && codelengthInput == codelength) {
        rateEntered.innerHTML = "<b>Correct Answer!!!</b>";
        rateEntered.style.color = "green";
    }
    else {

        rateForm.reset();

        if (rateEntered.innerHTML == "<b>Incorrect. Please try again.</b>") {
            rateEntered.innerHTML = "<b>Incorrect again!!. Please try again.</b>";
            rateEntered.style.color = "red";
            return;
        }
        else {
            rateEntered.innerHTML = "<b>Incorrect. Please try again.</b>";
            rateEntered.style.color = "red";
            return;
        }


    }

}