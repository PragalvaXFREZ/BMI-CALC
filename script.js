let gender = 'male',
    height = 50,
    weight = 50,
    age = 18;
let root = document.documentElement;
let resultinInches;
let bmiscore;

//making a variable that stores bmi result box
var htmlContent = `<center>  <div class="result">
    <div class="bmi">
        <div class="title">YOUR BMI SCORE IS</div>
        <div class="value" id="value">0.00</div>
    </div>
    <div class="text" id="comment">Your BMI is normal!</div>
    <div class="goggins" id="comment1">
        <a href="">STAY <br></a>
        <a ">HARD!!!</a>
    </div>
    <div class="buttons">
       
            <a id="recalcButton" href="">RECALCULATE</a>
        </div>
    </div>
</div>
</div>
</div>
</center>`;
var originalContentOfDiv = document.getElementById("myBox").innerHTML;
var originalContentOfBox = document.getElementById("calc").innerHTML;

//for gender selection
document.querySelector('.calc .gender .male').onclick = function () {
    gender = 'male';
    this.classList.add('active');
    document.querySelector('.calc .gender .female').className = 'female';

}
document.querySelector('.calc .gender .female').onclick = function () {
    gender = 'female';
    this.classList.add('active');
    document.querySelector('.calc .gender .male').className = 'male';

}

// Function to set up synchronization between range and number inputs
function setupRangeNumberSync(rangeId, numberId) {
    const range = document.getElementById(rangeId);
    const number = document.getElementById(numberId);

    // Add event listener to the range input
    range.addEventListener('input', () => {
        // Update the value of the number input when the range input changes
        number.value = range.value;
    });

    // Add event listener to the number input
    number.addEventListener('input', () => {
        // Update the value of the range input when the number input changes
        range.value = number.value;
    });
}

// Call the function for each pair of range and number inputs
setupRangeNumberSync('myRange', 'myNumber');
setupRangeNumberSync('myRange1', 'myNumber1');
setupRangeNumberSync('myRangeA', 'myNumberA');



//slice the number
function setupInputValidation(ids) {
    ids.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener("input", function (e) {
                const inputValue = e.target.value;
                if (isNaN(inputValue) || inputValue.length !== 4) {
                    e.target.value = inputValue.slice(0, 4);
                }
            });
        }
    });
}
const idsToValidate = ["myNumber", "myNumber1", "myNumberA"];
setupInputValidation(idsToValidate);


//making +/- change the value
document.addEventListener("DOMContentLoaded", function () {
    var inputField = document.getElementById("myNumber");
    var rangeInput = document.getElementById("myRange");
    var addButton = document.querySelector(".add");
    var subButton = document.querySelector(".sub");

    function syncInputs() {
        var currentValue = parseInt(inputField.value);
        rangeInput.value = currentValue;
    }

    addButton.addEventListener("click", function () {
        var currentValue = parseInt(inputField.value);
        if (currentValue < 500) {
            inputField.value = currentValue + 1;
            syncInputs();
        }
    });

    subButton.addEventListener("click", function () {
        var currentValue = parseInt(inputField.value);
        if (currentValue > 0) {
            inputField.value = currentValue - 1;
            syncInputs();
        }
    });

    inputField.addEventListener("input", function () {
        syncInputs();
    });

    rangeInput.addEventListener("input", function () {
        inputField.value = rangeInput.value;
    });
});

//for weight
document.addEventListener("DOMContentLoaded", function () {
    var inputField = document.getElementById("myNumber1");
    var rangeInput = document.getElementById("myRange1");
    var addButton = document.querySelector(".add1");
    var subButton = document.querySelector(".sub1");

    function syncInputs() {
        var currentValue = parseInt(inputField.value);
        rangeInput.value = currentValue;
    }

    addButton.addEventListener("click", function () {
        var currentValue = parseInt(inputField.value);
        if (currentValue < 1500) {
            inputField.value = currentValue + 1;
            syncInputs();
        }
    });

    subButton.addEventListener("click", function () {
        var currentValue = parseInt(inputField.value);
        if (currentValue > 0) {
            inputField.value = currentValue - 1;
            syncInputs();
        }
    });

    inputField.addEventListener("input", function () {
        syncInputs();
    });

    rangeInput.addEventListener("input", function () {
        inputField.value = rangeInput.value;
    });
});

//age
document.addEventListener("DOMContentLoaded", function () {
    var inputField = document.getElementById("myNumberA");
    var rangeInput = document.getElementById("myRangeA");
    var addButton = document.querySelector(".addA");
    var subButton = document.querySelector(".subA");

    function syncInputs() {
        var currentValue = parseInt(inputField.value);
        rangeInput.value = currentValue;
    }

    addButton.addEventListener("click", function () {
        var currentValue = parseInt(inputField.value);
        if (currentValue < 100) {
            inputField.value = currentValue + 1;
            syncInputs();
        }
    });

    subButton.addEventListener("click", function () {
        var currentValue = parseInt(inputField.value);
        if (currentValue > 0) {
            inputField.value = currentValue - 1;
            syncInputs();
        }
    });

    inputField.addEventListener("input", function () {
        syncInputs();
    });

    rangeInput.addEventListener("input", function () {
        inputField.value = rangeInput.value;
    });
});

//for toogling unit
function toggleUnit() {
    var unitLabel = document.getElementById("unitLabel");
    var unitLabel1 = document.getElementById("label1");
    if (unitLabel.textContent === "HEIGHT (cm)") {
        unitLabel.textContent = "HEIGHT (inches)";
        unitLabel1.textContent = "WEIGHT (pound)";
        unitImage.style.display = "inline"; // Display the inches image
    } else {
        unitLabel.textContent = "HEIGHT (cm)";
        unitLabel1.textContent = "WEIGHT (kg)";
        unitImage.style.display = "none"; // Hide the inches image
    }
}

//making box occur
function toggleBox(event) {
    var box = document.getElementById("myBox");
    if (box.style.display === "none") {
        box.style.display = "block";
        box.style.top = (event.clientY + window.scrollY + 20) + "px";
        box.style.left = (event.clientX + window.scrollX + 20) + "px";
    } else {
        box.style.display = "none";
    }
}


function replaceText1() {
    document.getElementById("myBox").innerHTML = originalContentOfDiv;
    document.getElementById("b1").addEventListener("click", resultinInches);
}

document.getElementById("b1").addEventListener("click", resultinInches = () => {
    // Get the value entered in feet input
    var feet = document.getElementById("feetInput").value;
    var originalText = document.getElementById("myBox");

    originalText.innerHTML = `<span onclick="toggleBox(event)" class="close">&times;</span>
    <div id="output-container">
        <h1>HEIGHT IN INCHES</h1>
        <div id="result1"></div>
        <button onclick="replaceText1()" class="recalc">RE-CALCULATE</button>
    </div>`;


    // Check if the value is numeric and not empty
    if (!isNaN(feet) && feet !== "") {
        // Convert centimeters to inches
        var inches = feet * 12;

        // Display the result
        document.getElementById("result1").innerText = inches;
    } else {
        // If input is not valid, display an error message
        document.getElementById("result1").innerText = "Please enter a valid number.";
    }
});

// for result box to appear

// for result box to appear
document.getElementById("calcButton").addEventListener("click", (event) => {
    event.preventDefault();

    var height1 = parseFloat(document.getElementById("myNumber").value); // Height input value
    var weight1 = parseFloat(document.getElementById("myNumber1").value); // Weight input value
    var unitLabel = document.getElementById("unitLabel").textContent; // Unit label text

    var textOriginal = document.getElementById("calc");
    textOriginal.innerHTML = htmlContent;
    document.getElementById("headText").innerText = "RESULT";
    window.scrollTo({ top: 30, behavior: 'smooth' });

    var bmiscore; // Initialize BMI score variable

    // Main BMI calculation based on unit label
    if (!isNaN(height1) && !isNaN(weight1)) {
        if (unitLabel === "HEIGHT (cm)") {
            // BMI calculation when height is in centimeters
            bmiscore = weight1 / ((height1 / 100) * (height1 / 100));
        } else if (unitLabel === "HEIGHT (inches)") {
            // BMI calculation when height is in inches
            bmiscore = (weight1 / (height1 * height1)) * 703;
        }

        const formattedScore = bmiscore % 1 === 0 ? bmiscore.toFixed(0) : bmiscore.toFixed(2);

        // Display the result
        document.getElementById("value").innerText = formattedScore;

        // Update comments and styles based on BMI score
        if (bmiscore <= 18) {
            document.getElementById("comment").innerText = "YOU ARE UNDERWEIGHT";
            document.getElementById("comment1").innerHTML = `<a href="help.html">GET <br></a>
                                    <a href="help.html">HELP!!!<br></a>`;
            root.style.setProperty('--previousShade', '#12aae1');
            root.style.setProperty('--fontRed', '#12aae1');
        } else if (bmiscore > 29) {
            document.getElementById("comment").innerText = "YOU ARE OBESE!!";
            document.getElementById("comment1").innerHTML = `<a href="help.html">GET <br></a>
                                    <a href="help.html">HELP!!!<br></a>`;
            root.style.setProperty('--previousShade', 'red');
        } else if (bmiscore > 18 && bmiscore < 25) {
            document.getElementById("comment").innerText = "YOU ARE NORMAL!!";
            document.getElementById("comment1").innerHTML = `<a href="help.html">STAY <br></a>
                                    <a href="help.html">HARD!!!<br></a>`;
            root.style.setProperty('--previousShade', 'rgb(26, 177, 26)');
            root.style.setProperty('--fontRed', 'rgb(26, 177, 26)');
        } else if (bmiscore > 25 && bmiscore < 29) {
            document.getElementById("comment").innerText = "YOU ARE OVERWEIGHT!!";
            document.getElementById("comment1").innerHTML = `<a href="help.html">NEED <br></a>
                                    <a href="help.html">HELP?<br></a>`;
            root.style.setProperty('--previousShade', '#dae41c');
            root.style.setProperty('--fontRed', '#dae41c');
        }
    } else {
        // If input is not valid, display an error message
        document.getElementById("value").innerText = "Please enter valid numbers for height and weight.";
    }
});






