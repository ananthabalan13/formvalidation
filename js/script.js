let btn = document.getElementById('btn');
btn.addEventListener('click', validateInputs);

let error = document.querySelectorAll('.error');

function validateInputs() {
    let usernameInput = document.getElementById('username');
    let emailInput = document.getElementById('email');
    let mobNumInput = document.getElementById('mobNum');
    let passInput = document.getElementById('password');
    let cpassInput = document.getElementById('cpassword');

    let usernameVal = usernameInput.value.trim();    
    let emailVal = emailInput.value.trim();
    let mobNumVal = mobNumInput.value.trim();
    let passVal = passInput.value.trim();
    let cpassVal = cpassInput.value.trim();

    if (usernameVal === '') {
        setError(usernameInput, 'Please Enter Username');
    }
    else if(usernameVal.length<5){
        setError(usernameInput,'Must Be 5 Characters')
    }
     else {
        setSuccess(usernameInput);
        usernameVal=''
    }
    if(emailVal===''){
        setError(emailInput,'Please Enter Email Address')
    }
    else if(!emailValidation(emailVal)){
        setError(emailInput,'Please Enter Valid Email Address')
    }
    else{
        setSuccess(emailInput)
    }
    if(mobNumVal===''){
        setError(mobNumInput,'Please Enter a Mobile Number')
    }
    else if(mobNumVal.length<10){
        setError(mobNumInput,'Must Be 10 Characters')
    }
    else{
        setSuccess(mobNumInput)
    }
    if(passVal===''){
        setError(passInput,'Please Enter Password')
    }
    else if(passVal.length<8){
        setError(passInput,'Must Be 8 Characters')
    }
    else{
        setSuccess(passInput)
    }
    if(cpassVal===''){
        setError(cpassInput,'Please Enter Confirm Password')
    }
    else if(passVal!=cpassVal){
        setError(cpassInput,'Password And Confirm Password Does Not Match')
    }
    else{
        setSuccess(cpassInput)
    } 
}

function setSuccess(element){
    const inputGroups = element.parentElement;
    const errElement = inputGroups.querySelector('.error');
    errElement.innerText = '';
    inputGroups.classList.add('succes');
    inputGroups.classList.remove('error');
}

function setError(element, message) {
    const inputGroups = element.parentElement;
    const errElement = inputGroups.querySelector('.error');
    errElement.innerText = message;
    inputGroups.classList.add('error');
    inputGroups.classList.remove('succes');
}
function emailValidation (emailVal){
    return String(emailVal)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}
  




