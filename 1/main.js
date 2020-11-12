const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')


// Show input error message

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message
}

// show success message

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check email id is valid or not  (Cot)

function checkMail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    }  else {
        showError(input, `${getFieldName(input)} is not valid`);
    }
}


// Event Listeners


//Checck required
// Note: we're creating because we wanted to remove all if else iteration and passed Array parameter because we dont watn to repeat function for all id's

function checkRequired(inputArray) {
    inputArray.forEach(function(input) {    // For Loop using forEach function
        if(input.value.trim() === '') {
            showError(input,`${getFieldName(input)} is required`);
        } else {
            showSuccess(input)
        }
    });
}

//get field input name

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check Length Function
function checkLength(input, min, max){
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be greater than ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input)
    }
}

//compare password 
function comparePass(pass1, pass2) { 
    if (pass1.value !== pass2.value){
        showError(pass2, `Passwords don't match`);
    } 
}


form.addEventListener('submit', function(e) {
    e.preventDefault(); // To prevent submiting form

    checkRequired([username,email, password, password2,])
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    comparePass(password, password2);
    checkMail(email);
});
