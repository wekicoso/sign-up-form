const pw = document.querySelector("#password");
const pwExplain = document.querySelector(".pw-explain");
const pwConfirm = document.querySelector("#confirm-password");

pw.addEventListener('input', changeColorOfPwExplain);

function changeColorOfPwExplain() {
    const text = pw.value;

    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;

    function toogleColor() {
        if (hasUpper) {
            pwExplain.querySelector(":nth-child(1)").classList.add("green-text");
        } else {
            pwExplain.querySelector(":nth-child(1)").classList.remove("green-text");
        }

        if (hasLower) {
            pwExplain.querySelector(":nth-child(2)").classList.add("green-text");
        } else {
            pwExplain.querySelector(":nth-child(2)").classList.remove("green-text");
        }

        if (hasNumber) {
            pwExplain.querySelector(":nth-child(3)").classList.add("green-text");
        } else {
            pwExplain.querySelector(":nth-child(3)").classList.remove("green-text");
        }
    }

    for (let char in text) {
        const code = text.charCodeAt(char);

        if (code >= 65 && code <= 90) {
            hasUpper = true;
        }

        if (code >= 97 && code <= 122) {
            hasLower = true;
        }

        if (code >= 48 && code <= 57) {
            hasNumber = true;
        }
    }

    toogleColor();
}

