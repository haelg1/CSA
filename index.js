function generateRandomNumbers() {
    var minValueInput = document.getElementById('minValue');
    var maxValueInput = document.getElementById('maxValue');
    var countInput = document.getElementById('count');
    var minValue = parseInt(minValueInput.value);
    var maxValue = parseInt(maxValueInput.value);
    var count = parseInt(countInput.value);

    if (minValue === maxValue) {
        alert('Min and Max values cannot be the same!');
        return;
    }

    if (minValue < 0 || maxValue < 0 || minValue > maxValue) {
        alert('Min value can not be bigger than Max value!');
        return;
    }

    if (isNaN(minValue) || isNaN(maxValue) || isNaN(count)) {
        alert('Please enter valid non-negative numbers for min, max, and count!');
        return;
    }

    var regex = /^[0-9]+$/;
    if (!regex.test(minValueInput.value) || !regex.test(maxValueInput.value) || !regex.test(countInput.value)) {
        alert('Please enter only numeric values for min, max, and count!');
        return;
    }

    var numbers = [];
    var lastNumber = null;
    for (var i = 0; i < count; i++) {
        var randomNum = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        while (randomNum === lastNumber) {
            randomNum = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        }
        numbers.push(randomNum);
        lastNumber = randomNum;
    }

    document.getElementById('result').textContent = numbers.join(' ');
}

function clearResult() {
    document.getElementById('result').textContent = '';
}

const btn = document.getElementById("btn");
const shapes = [
    "quad-circle-1",
    "quad-circle-2",
    "quad-circle-3",
    "quad-circle-4",
    "triangle-1",
    "triangle-2",
    "triangle-3",
    "triangle-4",
    "circle",
];

const colors = ["#005f73", "#ee9b00", "#ae2012", "#94d2bd"];
const boxes = document.querySelectorAll(".container div");

let generatePattern = () => {
    boxes.forEach((box) => {
        box.className = "";
        let i = Math.floor(Math.random() * shapes.length);
        let j = Math.floor(Math.random() * colors.length);
        box.classList.add(shapes[i]);
        box.style.backgroundColor = colors[j];
    });
};

btn.addEventListener("click", generatePattern);
window.addEventListener("load", generatePattern);

function studinfo()
{
    alert('Hrusha Oleh BSD-23.');
}