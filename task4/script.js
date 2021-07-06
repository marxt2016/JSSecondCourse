/* Task1 and Task2
 */

let text = "'I'd rather be small, ' aren't they nice?', don't be so 'cool'! 'It's absolute!'. 'Never say What you've done!'";

function replaceSingleQuotes(text) {
    const newText = text.replace(/^'|'$|'(?=\s)|( )'(?=.*)|(?<=\w)'(?=\W)|(?<=\W)'(?=\W)/g, '$1"');

    return newText
}
console.log(text);
console.log(replaceSingleQuotes(text));



/* Task3
 */

const nameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email');
const phoneEl = document.querySelector('#phNumber');
const form = document.querySelector('#form');

const checkName = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const name = nameEl.value.trim();

    if (!isRequired(name)) {
        showError(nameEl, 'Name cannot be blank.');
    } else if (!isBetween(name.length, min, max)) {
        showError(nameEl, `Name must be between ${min} and ${max} characters.`)
    } else if (!isNameValid(name)) {
        showError(nameEl, `Name should contain only english letters`)
    }
    else {
        showSuccess(nameEl);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPhone = () => {
    let valid = false;
    const phone = phoneEl.value.trim();
    if (!isRequired(phone)) {
        showError(phoneEl, 'Phone cannot be blank.');
    } else if (!isPhoneValid(phone)) {
        showError(phoneEl, 'Phone is not valid. please use format +7(000)000-0000')
    } else {
        showSuccess(phoneEl);
        valid = true;
    }
    return valid;
};



const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
const isNameValid = (name) => {
    const re = /^[a-zA-Z]+$/;
    return re.test(name);
}
const isPhoneValid = (phone) => {
    const re = /^\+?[0-9]\((\d{3})\)(\d{3})[- ](\d{4})$/;
    return re.test(phone);
}



const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('error');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('error');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isNameValid = checkName(),
        isEmailValid = checkEmail(),
        isPhoneValid = checkPhone();

    let isFormValid = isNameValid &&
        isEmailValid &&
        isPhoneValid;

});
