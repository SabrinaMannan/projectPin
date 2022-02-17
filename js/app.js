function getPin() {

    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }

    else {
        console.log('Got 3 digits and calling the function again', pin)
        return getPin();
    }
}


function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('keypad').addEventListener('click',
    function (event) {
        const number = (event.target.innerText);
        const calcInput = document.getElementById('typed-number');
        if (isNaN(number)) {
            if (number == 'C') {
                calcInput.value = ''; //refresh then numbers
            }
        }
        else {

            const previousNumber = calcInput.value;
            const newNumber = previousNumber + number;
            calcInput.value = newNumber;
        }

    });

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typednumbers = document.getElementById('typed-number').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typednumbers) {
        //if succeed error message will disappear and vice versa
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {

        failError.style.display = 'block';
        successMessage.style.display = 'none';
    }
}