const inputText = document.querySelector('.input-text');
const checkBtn = document.querySelector('.check-button');
const result = document.querySelector('.result');

checkBtn.addEventListener('click',checkPalindrome);
inputText.addEventListener('input',removePreviousResult);


function removePreviousResult() {
    result.textContent = '';
}

function displayResult(enteredText,verdict) {
    if(verdict) {
        result.textContent = `${enteredText.toUpperCase()} is a palindrome.`;
        if(!result.classList.contains('is-palindrome')) result.classList.add('is-palindrome');
        if(result.classList.contains('not-palindrome')) result.classList.remove('not-palindrome');
    } else {
        result.textContent = `${enteredText.toUpperCase()} is not palindrome.`;
        if(result.classList.contains('is-palindrome')) result.classList.remove('is-palindrome');
        if(!result.classList.contains('not-palindrome')) result.classList.add('not-palindrome');
    }
}

function checkPalindrome(event) {
    event.preventDefault();
    const enteredText = inputText.value.toLowerCase();
    let i = 0, j = enteredText.length-1, flag = true;
    while(i<j) {
        if(enteredText.charAt(i) !== enteredText.charAt(j)) {
            flag = false;
            break;
        }
        i++;
        j--;
    }
    if(flag) displayResult(enteredText,true);
    else displayResult(enteredText,false);
}
