const myForm = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

myForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    // get the value of input
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (fnameValue === ''){
        setErrorFor(fname, 'First Name cannot be empty');
    }
    else{
        // console.log("submitted correctly");
        setSuccessFor(fname);

    }
    if (lnameValue === ''){
        setErrorFor(lname, 'Last Name cannot be empty');
    }
    else{
        // console.log("submitted correctly");
        setSuccessFor(lname);

    }
    if (emailValue === ''){
        setErrorFor(email, 'Email cannot be empty');

        const input = document.getElementById('email')
        email.innerText= 'name@name.com'
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    }else{
        setSuccessFor(email);
    }
    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be empty');
    }else {
        setSuccessFor(password)
    }

}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

    // small.innerText = message
}
function isEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}