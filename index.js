let pswdBox = document.getElementById("pswd-box");
let pswd1 = document.getElementById("pswd-1");
let pswd2 = document.getElementById("pswd-2");
let pswd3 = document.getElementById("pswd-3");
let pswd4 = document.getElementById("pswd-4");



function getLength() {
    return Math.floor((Math.random() * 8)) + 8;
}

function getLowerChar() {
    return "a".charCodeAt(0) + Math.floor((Math.random() * 26));
}

function getUpperChar() {
    return "A".charCodeAt(0) + Math.floor((Math.random() * 26));
}

function getDigit() {
    return ("0".charCodeAt(0) + Math.floor(Math.random() * 10));
}

function getSpecial() {
    return ("!".charCodeAt(0) + Math.floor(Math.random() * 34));
}



function getPassword() {
    let passwordContent = [];
    let length = getLength();
    let generator = [getLowerChar(), getUpperChar(), getDigit(), getSpecial()];

    passwordContent.push(String.fromCharCode(generator[0]));
    passwordContent.push(String.fromCharCode(generator[1]));
    passwordContent.push(String.fromCharCode(generator[2]));
    passwordContent.push(String.fromCharCode(generator[3]));

    for (let i = 0; i < length - 4; i++) {
        let index = Math.floor(Math.random() * 4);
        passwordContent.push(String.fromCharCode(generator[index]));
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
