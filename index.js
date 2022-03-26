let pswdBox = document.getElementById("pswd-box");
let pswd1 = document.getElementById("pswd-1");
let pswd2 = document.getElementById("pswd-2");
let pswd3 = document.getElementById("pswd-3");
let pswd4 = document.getElementById("pswd-4");


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getLength() {
    return getRandom(8, 15);
}

function getLowerChar() {
    return "a".charCodeAt(0) + getRandom(0, 26);
}

function getUpperChar() {
    return "A".charCodeAt(0) + getRandom(0, 26);
}

function getDigit() {
    return "0".charCodeAt(0) + getRandom(0, 9);
}

function getSpecial() {
    return "!".charCodeAt(0) + getRandom(0, 14);
}



function getPassword() {
    let passwordContent = [];
    let length = getLength();
    let generator = [getLowerChar, getUpperChar, getDigit, getSpecial];

    passwordContent.push(String.fromCharCode(generator[0]()));
    passwordContent.push(String.fromCharCode(generator[1]()));
    passwordContent.push(String.fromCharCode(generator[2]()));
    passwordContent.push(String.fromCharCode(generator[3]()));

    for (let i = 0; i < length - 4; i++) {
        let index = getRandom(0, 3);
        passwordContent.push(String.fromCharCode(generator[index]()));
    }

    passwordContent = passwordContent.sort(()=>Math.random()-0.5);

    let password = "";
    for (let i = 0; i < passwordContent.length; i++) {
        password += passwordContent[i];
    }

    return password;
}



function fillPasswords() {
    pswd1.innerText = getPassword();
    pswd2.innerText = getPassword();
    pswd3.innerText = getPassword();
    pswd4.innerText = getPassword();
    pswdBox.style.color = "#00a870";
}
