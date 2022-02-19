function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    document.getElementById('show-pin').value = pin;
};

document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('calc-input');
   if(isNaN(number)){
       if(number == 'C'){
           calcInput.value = '';
       }
   }
   else{
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value =  newNumber;
   }
});

function verifyPin(){
    const pin = document.getElementById('show-pin').value;
    const typedNumber = document.getElementById('calc-input').value;
    const successMessage = document.getElementById('verify-success');
    const failedError = document.getElementById('verify-failed');

    if(pin == typedNumber){
        successMessage.style.display = 'block';
        failedError.style.display = 'none';
    }
    else{
       failedError.style.display = 'block';
       successMessage.style.display = 'none';
    }
};
