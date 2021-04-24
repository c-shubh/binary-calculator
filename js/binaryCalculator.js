let toDisplay = "";
let result = document.querySelector("#res");

let btn0 = document.querySelector("#btn0");
let btn1 = document.querySelector("#btn1");
let btnClr = document.querySelector("#btnClr");
let btnEql = document.querySelector("#btnEql");
let btnSum = document.querySelector("#btnSum");
let btnSub = document.querySelector("#btnSub");
let btnMul = document.querySelector("#btnMul");
let btnDiv = document.querySelector("#btnDiv");

function display(str, append = true) {
    if (append) {
        toDisplay = toDisplay.concat(str);
    } else {
        toDisplay = str;
    }
    result.innerHTML = toDisplay;
}

function action(event) {
    let btn = event.target || event.srcElement;
    display(btn.innerHTML);
}

function clearDisplay() {
    display("", (append = false));
}

function evalResult() {
    let sign = toDisplay.match(/[+\-*\/]/);
    let [binNum1, binNum2] = toDisplay.split(sign);

    display(
        new Number(eval(`${Number.parseInt(binNum1, 2)} ${sign} ${Number.parseInt(binNum2, 2)}`)).toString(2),
        (append = false)
    );
}

for (let button of [btn0, btn1, btnSum, btnSub, btnMul, btnDiv]) {
    button.onclick = action;
}

btnClr.onclick = clearDisplay;
btnEql.onclick = evalResult;
